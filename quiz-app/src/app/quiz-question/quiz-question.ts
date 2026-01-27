import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuizService } from '../quiz';
import { Question } from '../question.model';

@Component({
  selector: 'app-quiz-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-question.html',
  styleUrl: './quiz-question.css'
})
export class QuizQuestion implements OnInit {
  currentQuestion!: Question;
  selectedAnswer: number | null = null;
  isAnswered = false;
  isCorrect = false;
  currentQuestionNumber = 0;
  totalQuestions = 0;
  progress = 0;

  constructor(
    private quizService: QuizService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadQuestion();
    this.totalQuestions = this.quizService.getTotalQuestions();
    this.updateProgress();
  }

  loadQuestion(): void {
    this.currentQuestion = this.quizService.getCurrentQuestion();
    this.currentQuestionNumber = this.quizService.getCurrentQuestionNumber();
    this.selectedAnswer = null;
    this.isAnswered = false;
  }

  selectAnswer(index: number): void {
    if (!this.isAnswered) {
      this.selectedAnswer = index;
    }
  }

  submitAnswer(): void {
    if (this.selectedAnswer === null) return;

    this.isCorrect = this.quizService.submitAnswer(this.selectedAnswer);
    this.isAnswered = true;
  }

  nextQuestion(): void {
    const hasNext = this.quizService.nextQuestion();

    if (hasNext) {
      this.loadQuestion();
      this.updateProgress();
    } else {
      this.router.navigate(['/result']);
    }
  }

  updateProgress(): void {
    this.progress = (this.currentQuestionNumber / this.totalQuestions) * 100;
  }

  getOptionClass(index: number): string {
    if (!this.isAnswered) {
      return this.selectedAnswer === index ? 'selected' : '';
    }

    if (index === this.currentQuestion.correctAnswer) {
      return 'correct';
    }

    if (index === this.selectedAnswer && !this.isCorrect) {
      return 'incorrect';
    }

    return '';
  }
}
