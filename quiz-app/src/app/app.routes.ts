import { Routes } from '@angular/router';
import { QuizStart } from './quiz-start/quiz-start';
import { QuizQuestion } from './quiz-question/quiz-question';
import { QuizResult } from './quiz-result/quiz-result';

export const routes: Routes = [
  { path: '', component: QuizStart },
  { path: 'quiz', component: QuizQuestion },
  { path: 'result', component: QuizResult },
  { path: '**', redirectTo: '' }
];
