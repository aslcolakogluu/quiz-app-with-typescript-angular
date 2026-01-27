import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QUESTIONS, Question } from '../data/questions';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class QuizComponent {
  questions: Question[] = QUESTIONS;
  currentIndex = 0;
  score = 0;
  selectedOption: number | null = null;
  finished = false;

  selectOption(index: number) {
    this.selectedOption = index;
  }

  nextQuestion() {
    if (this.selectedOption === this.questions[this.currentIndex].correctAnswer) {
      this.score++;
    }

    this.selectedOption = null;
    this.currentIndex++;

    if (this.currentIndex === this.questions.length) {
      this.finished = true;
    }
  }
}
