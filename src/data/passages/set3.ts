import { Passage } from '../types';

export const set3: Passage[] = [
  {
    id: 'p5', title: 'Ancient Egyptian Pyramids',
    content: [
      "The pyramids of Egypt are among the most iconic structures in history. Built as monumental tombs for pharaohs, these massive stone structures reflect the ancient Egyptians' deep belief in the afterlife. The most famous is the Great Pyramid of Giza, constructed for Pharaoh Khufu.",
      "Building a pyramid was a colossal undertaking that required precise engineering and a massive workforce. Contrary to popular belief, the workers were not slaves but skilled laborers and farmers who worked during the Nile's flood season when agricultural work was impossible.",
      "The pyramids were filled with treasures, food, and everyday items that the pharaoh would need in the afterlife. However, this wealth attracted tomb robbers, and most pyramids were looted in antiquity. Today, they stand as a testament to the ingenuity of ancient Egyptian civilization."
    ],
    questions: [
      { id: 'p5_q1', type: 'ynng', instruction: 'Questions 1-7 (Yes/No/Not Given)', text: 'The pyramids were built as tombs for pharaohs.', options: ['Yes', 'No', 'Not Given'], correctAnswer: 'Yes' },
      { id: 'p5_q2', type: 'ynng', text: 'The Great Pyramid of Giza was built for Pharaoh Tutankhamun.', options: ['Yes', 'No', 'Not Given'], correctAnswer: 'No' },
      { id: 'p5_q3', type: 'ynng', text: 'The pyramids were built entirely by slaves.', options: ['Yes', 'No', 'Not Given'], correctAnswer: 'No' },
      { id: 'p5_q4', type: 'ynng', text: 'Workers built the pyramids during the Nile\'s flood season.', options: ['Yes', 'No', 'Not Given'], correctAnswer: 'Yes' },
      { id: 'p5_q5', type: 'ynng', text: 'The workers were paid in gold and silver.', options: ['Yes', 'No', 'Not Given'], correctAnswer: 'Not Given' },
      { id: 'p5_q6', type: 'ynng', text: 'Most pyramids remained untouched by robbers.', options: ['Yes', 'No', 'Not Given'], correctAnswer: 'No' },
      { id: 'p5_q7', type: 'ynng', text: 'The pyramids reflect a belief in the afterlife.', options: ['Yes', 'No', 'Not Given'], correctAnswer: 'Yes' },
      { id: 'p5_q8', type: 'fill-in-the-blank', instruction: 'Questions 8-13 (Fill in the blanks)', text: 'The Great Pyramid of Giza was constructed for Pharaoh ________.', correctAnswer: 'Khufu' },
      { id: 'p5_q9', type: 'fill-in-the-blank', text: 'Building a pyramid required precise ________.', correctAnswer: 'engineering' },
      { id: 'p5_q10', type: 'fill-in-the-blank', text: 'The workers included skilled laborers and ________.', correctAnswer: 'farmers' },
      { id: 'p5_q11', type: 'fill-in-the-blank', text: 'The pyramids were filled with ________, food, and everyday items.', correctAnswer: 'treasures' },
      { id: 'p5_q12', type: 'fill-in-the-blank', text: 'Most pyramids were looted in ________.', correctAnswer: 'antiquity' },
      { id: 'p5_q13', type: 'fill-in-the-blank', text: 'The pyramids stand as a testament to the ________ of ancient Egyptian civilization.', correctAnswer: 'ingenuity' }
    ]
  },
  {
    id: 'p6', title: 'Artificial Intelligence in Modern Life',
    content: [
      "Artificial Intelligence (AI) has rapidly transitioned from science fiction to everyday reality. AI systems, powered by machine learning algorithms, are now capable of performing tasks that typically require human intelligence, such as visual perception, speech recognition, and decision-making.",
      "In healthcare, AI is being used to analyze medical images and predict patient outcomes with remarkable accuracy. In transportation, self-driving cars rely on AI to navigate complex environments. Furthermore, virtual assistants like Siri and Alexa use natural language processing to interact with users.",
      "Despite its benefits, the rise of AI raises ethical concerns. Issues regarding data privacy, algorithmic bias, and the potential displacement of jobs are subjects of intense debate. As AI continues to evolve, society must establish frameworks to ensure its responsible development and deployment."
    ],
    questions: [
      { id: 'p6_q1', type: 'multiple-choice', instruction: 'Questions 1-7 (Multiple Choice)', text: 'What powers modern AI systems?', options: ['Magic', 'Machine learning algorithms', 'Manual programming', 'Clockwork mechanisms'], correctAnswer: 'Machine learning algorithms' },
      { id: 'p6_q2', type: 'multiple-choice', text: 'Which of the following is an AI capability mentioned?', options: ['Cooking', 'Speech recognition', 'Building houses', 'Flying planes'], correctAnswer: 'Speech recognition' },
      { id: 'p6_q3', type: 'multiple-choice', text: 'How is AI used in healthcare?', options: ['To perform surgeries', 'To analyze medical images', 'To clean hospitals', 'To manufacture drugs'], correctAnswer: 'To analyze medical images' },
      { id: 'p6_q4', type: 'multiple-choice', text: 'What do self-driving cars rely on to navigate?', options: ['GPS only', 'Human drivers', 'AI', 'Magnets'], correctAnswer: 'AI' },
      { id: 'p6_q5', type: 'multiple-choice', text: 'What technology do virtual assistants use?', options: ['Natural language processing', 'Telepathy', 'Sonar', 'Radar'], correctAnswer: 'Natural language processing' },
      { id: 'p6_q6', type: 'multiple-choice', text: 'Which of the following is an ethical concern regarding AI?', options: ['Too much free time', 'Algorithmic bias', 'Slower computers', 'Expensive electricity'], correctAnswer: 'Algorithmic bias' },
      { id: 'p6_q7', type: 'multiple-choice', text: 'What must society establish for AI?', options: ['New religions', 'Frameworks for responsible development', 'More factories', 'Strict bans'], correctAnswer: 'Frameworks for responsible development' },
      { id: 'p6_q8', type: 'tfng', instruction: 'Questions 8-13 (True/False/Not Given)', text: 'AI is still mostly considered science fiction.', options: ['True', 'False', 'Not Given'], correctAnswer: 'False' },
      { id: 'p6_q9', type: 'tfng', text: 'AI can predict patient outcomes accurately.', options: ['True', 'False', 'Not Given'], correctAnswer: 'True' },
      { id: 'p6_q10', type: 'tfng', text: 'Virtual assistants are the most profitable AI products.', options: ['True', 'False', 'Not Given'], correctAnswer: 'Not Given' },
      { id: 'p6_q11', type: 'tfng', text: 'The rise of AI has no negative consequences.', options: ['True', 'False', 'Not Given'], correctAnswer: 'False' },
      { id: 'p6_q12', type: 'tfng', text: 'Job displacement is a subject of intense debate.', options: ['True', 'False', 'Not Given'], correctAnswer: 'True' },
      { id: 'p6_q13', type: 'tfng', text: 'AI development is currently heavily regulated by international law.', options: ['True', 'False', 'Not Given'], correctAnswer: 'Not Given' }
    ]
  }
];
