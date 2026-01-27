import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuizService } from '../quiz';

@Component({
  selector: 'app-quiz-start',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-start.html',
  styleUrl: './quiz-start.css'
})
export class QuizStart {
  totalQuestions: number;

  constructor(
    private quizService: QuizService,
    private router: Router
  ) {
    this.totalQuestions = this.quizService.getTotalQuestions();
  }

  startQuiz(): void {
    this.quizService.startQuiz();
    this.router.navigate(['/quiz']);
  }
}
