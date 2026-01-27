import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question, QuizResult, UserAnswer } from './question.model';
import { QUIZ_QUESTIONS } from './quiz-data';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions: Question[] = QUIZ_QUESTIONS;
  private currentQuestionIndex = 0;
  private userAnswers: UserAnswer[] = [];
  private score = 0;

  // Observable for current question
  private currentQuestionSubject = new BehaviorSubject<Question>(this.questions[0]);
  currentQuestion$ = this.currentQuestionSubject.asObservable();

  // Observable for quiz progress
  private progressSubject = new BehaviorSubject<number>(0);
  progress$ = this.progressSubject.asObservable();

  constructor() { }

  startQuiz(): void {
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.score = 0;
    this.shuffleQuestions();
    this.currentQuestionSubject.next(this.questions[0]);
    this.updateProgress();
  }

  getCurrentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  getTotalQuestions(): number {
    return this.questions.length;
  }

  getCurrentQuestionNumber(): number {
    return this.currentQuestionIndex + 1;
  }

  submitAnswer(selectedAnswer: number): boolean {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    if (isCorrect) {
      this.score++;
    }

    this.userAnswers.push({
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect
    });

    return isCorrect;
  }

  nextQuestion(): boolean {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.currentQuestionSubject.next(this.questions[this.currentQuestionIndex]);
      this.updateProgress();
      return true;
    }
    return false;
  }

  getResults(): QuizResult {
    const percentage = (this.score / this.questions.length) * 100;
    return {
      score: this.score,
      totalQuestions: this.questions.length,
      percentage: Math.round(percentage),
      answers: this.userAnswers,
      completedAt: new Date()
    };
  }

  getQuestionById(id: number): Question | undefined {
    return this.questions.find(q => q.id === id);
  }

  private shuffleQuestions(): void {
    this.questions = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5);
  }

  private updateProgress(): void {
    const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
    this.progressSubject.next(progress);
  }

  resetQuiz(): void {
    this.startQuiz();
  }
}
