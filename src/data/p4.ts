import { Passage } from './types';

export const passage4: Passage = {
  id: 'p4',
  title: 'The Great Pyramid of Giza: Engineering Marvel',
  content: [
    "The Great Pyramid of Giza is the oldest and largest of the three pyramids in the Giza pyramid complex bordering present-day El Giza, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact. Egyptologists believe that the pyramid was built as a tomb for the Fourth Dynasty Egyptian pharaoh Khufu and was constructed over a 20-year period concluding around 2560 BC.",
    "Initially standing at 146.5 metres (481 feet), the Great Pyramid was the tallest man-made structure in the world for more than 3,800 years. Originally, the Great Pyramid was covered by casing stones that formed a smooth outer surface; what is seen today is the underlying core structure. Some of the casing stones that once covered the structure can still be seen around the base. There have been varying scientific and alternative theories about the Great Pyramid's construction techniques. Most accepted construction hypotheses are based on the idea that it was built by moving huge stones from a quarry and dragging and lifting them into place.",
    "The pyramid consists of an estimated 2.3 million blocks which most believe to have been transported from nearby quarries. The Tura limestone used for the casing was quarried across the river. The largest granite stones in the pyramid, found in the 'King's Chamber', weigh 25 to 80 tonnes and were transported from Aswan, more than 800 km away. Ancient Egyptians cut stone into rough blocks by hammering grooves into natural stone faces, inserting wooden wedges, then soaking these with water. As the water was absorbed, the wedges expanded, breaking off workable chunks.",
    "Inside the Great Pyramid, there are three known chambers. The lowest chamber was cut into the bedrock upon which the pyramid was built and was unfinished. The so-called Queen's Chamber and King's Chamber are higher up within the pyramid structure. The main part of the Giza complex is a setting of buildings that included two mortuary temples in honor of Khufu, three smaller pyramids for Khufu's wives, an even smaller 'satellite' pyramid, a raised causeway connecting the two temples, and small mastaba tombs surrounding the pyramid for nobles."
  ],
  questions: [
    {
      id: 'p4_q1',
      type: 'ynng',
      instruction: 'Questions 1-7\nDo the following statements agree with the views of the writer in Reading Passage 4?\n\nChoose:\nYES if the statement agrees with the views of the writer\nNO if the statement contradicts the views of the writer\nNOT GIVEN if it is impossible to say what the writer thinks about this',
      text: 'The Great Pyramid of Giza is the only remaining structure of the Seven Wonders of the Ancient World.',
      options: ['Yes', 'No', 'Not Given'],
      correctAnswer: 'Yes'
    },
    {
      id: 'p4_q2',
      type: 'ynng',
      text: 'The construction of the Great Pyramid took exactly 25 years to complete.',
      options: ['Yes', 'No', 'Not Given'],
      correctAnswer: 'No'
    },
    {
      id: 'p4_q3',
      type: 'ynng',
      text: 'The Great Pyramid is currently taller than it was when it was first built.',
      options: ['Yes', 'No', 'Not Given'],
      correctAnswer: 'No'
    },
    {
      id: 'p4_q4',
      type: 'ynng',
      text: 'The smooth outer casing stones of the pyramid were completely destroyed by an earthquake.',
      options: ['Yes', 'No', 'Not Given'],
      correctAnswer: 'Not Given'
    },
    {
      id: 'p4_q5',
      type: 'ynng',
      text: 'The granite stones in the King\'s Chamber were brought from a location over 800 km away.',
      options: ['Yes', 'No', 'Not Given'],
      correctAnswer: 'Yes'
    },
    {
      id: 'p4_q6',
      type: 'ynng',
      text: 'Ancient Egyptians used metal wedges to break off chunks of stone from quarries.',
      options: ['Yes', 'No', 'Not Given'],
      correctAnswer: 'No'
    },
    {
      id: 'p4_q7',
      type: 'ynng',
      text: 'The lowest chamber inside the Great Pyramid was never fully completed.',
      options: ['Yes', 'No', 'Not Given'],
      correctAnswer: 'Yes'
    },
    {
      id: 'p4_q8',
      type: 'multiple-choice',
      instruction: 'Questions 8-13\nChoose the correct letter, A, B, C or D.',
      text: 'Who was the Great Pyramid built for?',
      options: [
        'A noble from El Giza',
        'Pharaoh Khufu',
        'The workers who built it',
        'The queens of the Fourth Dynasty'
      ],
      correctAnswer: 'Pharaoh Khufu'
    },
    {
      id: 'p4_q9',
      type: 'multiple-choice',
      text: 'For how long was the Great Pyramid the tallest man-made structure?',
      options: [
        'Over 2,560 years',
        'Exactly 3,800 years',
        'More than 3,800 years',
        '20 years'
      ],
      correctAnswer: 'More than 3,800 years'
    },
    {
      id: 'p4_q10',
      type: 'multiple-choice',
      text: 'Approximately how many blocks were used to build the pyramid?',
      options: [
        '800,000',
        '1.5 million',
        '2.3 million',
        '3.8 million'
      ],
      correctAnswer: '2.3 million'
    },
    {
      id: 'p4_q11',
      type: 'multiple-choice',
      text: 'What caused the wooden wedges to expand when breaking stones?',
      options: [
        'Heat from the sun',
        'Hammering',
        'Absorption of water',
        'Pressure from other stones'
      ],
      correctAnswer: 'Absorption of water'
    },
    {
      id: 'p4_q12',
      type: 'multiple-choice',
      text: 'How many known chambers are there inside the Great Pyramid?',
      options: [
        'One',
        'Two',
        'Three',
        'Four'
      ],
      correctAnswer: 'Three'
    },
    {
      id: 'p4_q13',
      type: 'multiple-choice',
      text: 'What surrounds the pyramid for the nobles?',
      options: [
        'Mortuary temples',
        'Small mastaba tombs',
        'A raised causeway',
        'Satellite pyramids'
      ],
      correctAnswer: 'Small mastaba tombs'
    }
  ]
};
