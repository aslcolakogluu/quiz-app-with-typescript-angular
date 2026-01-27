export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option (0-3)
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  explanation?: string; // optional explanation
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  answers: UserAnswer[];
  completedAt: Date;
}

export interface UserAnswer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
}
