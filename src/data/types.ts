export type QuestionType = 'tfng' | 'ynng' | 'fill-in-the-blank' | 'multiple-choice' | 'short-answer';

export interface Question {
  id: string;
  type: QuestionType;
  instruction?: string;
  text: string;
  options?: string[];
  correctAnswer: string;
}

export interface Passage {
  id: string;
  title: string;
  content: string[];
  questions: Question[];
}
