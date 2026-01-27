import { Question } from './question.model';

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'What does HTML stand for?',
    options: [
      'Hyper Text Markup Language',
      'High Tech Modern Language',
      'Home Tool Markup Language',
      'Hyperlinks and Text Markup Language'
    ],
    correctAnswer: 0,
    category: 'Web Development',
    difficulty: 'easy',
    explanation: 'HTML stands for Hyper Text Markup Language, the standard markup language for creating web pages.'
  },
  {
    id: 2,
    question: 'Which programming language is known as the "language of the web"?',
    options: ['Python', 'Java', 'JavaScript', 'C++'],
    correctAnswer: 2,
    category: 'Web Development',
    difficulty: 'easy',
    explanation: 'JavaScript is often called the "language of the web" because it runs in all web browsers.'
  },
  {
    id: 3,
    question: 'What does CSS stand for?',
    options: [
      'Computer Style Sheets',
      'Cascading Style Sheets',
      'Creative Style Sheets',
      'Colorful Style Sheets'
    ],
    correctAnswer: 1,
    category: 'Web Development',
    difficulty: 'easy',
    explanation: 'CSS stands for Cascading Style Sheets, used to style and layout web pages.'
  },
  {
    id: 4,
    question: 'Which company developed Angular?',
    options: ['Facebook', 'Google', 'Microsoft', 'Apple'],
    correctAnswer: 1,
    category: 'Frameworks',
    difficulty: 'easy',
    explanation: 'Angular is developed and maintained by Google.'
  },
  {
    id: 5,
    question: 'What is TypeScript?',
    options: [
      'A JavaScript library',
      'A superset of JavaScript',
      'A database',
      'A CSS framework'
    ],
    correctAnswer: 1,
    category: 'Programming',
    difficulty: 'medium',
    explanation: 'TypeScript is a superset of JavaScript that adds static typing and other features.'
  },
  {
    id: 6,
    question: 'Which HTTP method is used to retrieve data from a server?',
    options: ['POST', 'GET', 'PUT', 'DELETE'],
    correctAnswer: 1,
    category: 'Web Development',
    difficulty: 'medium',
    explanation: 'GET is the HTTP method used to request data from a specified resource.'
  },
  {
    id: 7,
    question: 'What does API stand for?',
    options: [
      'Application Programming Interface',
      'Advanced Programming Interface',
      'Application Process Integration',
      'Automated Programming Interface'
    ],
    correctAnswer: 0,
    category: 'Programming',
    difficulty: 'easy',
    explanation: 'API stands for Application Programming Interface, a set of protocols for building software.'
  },
  {
    id: 8,
    question: 'Which of these is NOT a JavaScript framework?',
    options: ['React', 'Vue', 'Angular', 'Django'],
    correctAnswer: 3,
    category: 'Frameworks',
    difficulty: 'medium',
    explanation: 'Django is a Python web framework, not a JavaScript framework.'
  },
  {
    id: 9,
    question: 'What is the purpose of the "npm" command?',
    options: [
      'To manage Node.js packages',
      'To compile TypeScript',
      'To run Angular apps',
      'To style web pages'
    ],
    correctAnswer: 0,
    category: 'Tools',
    difficulty: 'easy',
    explanation: 'npm (Node Package Manager) is used to install and manage JavaScript packages.'
  },
  {
    id: 10,
    question: 'Which symbol is used for comments in TypeScript?',
    options: ['#', '//', '<!--', '/*'],
    correctAnswer: 1,
    category: 'Programming',
    difficulty: 'easy',
    explanation: '// is used for single-line comments in TypeScript and JavaScript.'
  }
];
