import { Passage } from '../types';

export const set1: Passage[] = [
  {
    id: 'p1', title: 'The History of Coffee',
    content: [
      "Coffee is one of the world's most popular beverages. Its history dates back to the 9th century in Ethiopia. According to legend, a goat herder named Kaldi discovered coffee when he noticed his goats became energetic after eating berries from a certain tree.",
      "By the 15th century, coffee was being grown in the Yemeni district of Arabia. It soon spread to Egypt, Persia, and Turkey. Coffee houses, known as 'qahveh khaneh', began to appear, becoming important centers for social interaction and intellectual debate.",
      "In the 17th century, coffee made its way to Europe. Initially viewed with suspicion, it quickly gained popularity. The Dutch were the first to cultivate coffee commercially, establishing plantations in their colonies in Indonesia, particularly on the island of Java."
    ],
    questions: [
      { id: 'p1_q1', type: 'tfng', instruction: 'Questions 1-7 (True/False/Not Given)', text: 'Coffee was discovered in the 9th century in Yemen.', options: ['True', 'False', 'Not Given'], correctAnswer: 'False' },
      { id: 'p1_q2', type: 'tfng', text: 'Kaldi was a goat herder who discovered coffee.', options: ['True', 'False', 'Not Given'], correctAnswer: 'True' },
      { id: 'p1_q3', type: 'tfng', text: 'Coffee houses in Arabia were only used for drinking coffee.', options: ['True', 'False', 'Not Given'], correctAnswer: 'False' },
      { id: 'p1_q4', type: 'tfng', text: 'Coffee was immediately accepted in Europe without any suspicion.', options: ['True', 'False', 'Not Given'], correctAnswer: 'False' },
      { id: 'p1_q5', type: 'tfng', text: 'The Dutch established coffee plantations in Java.', options: ['True', 'False', 'Not Given'], correctAnswer: 'True' },
      { id: 'p1_q6', type: 'tfng', text: 'Coffee is currently the most expensive beverage in the world.', options: ['True', 'False', 'Not Given'], correctAnswer: 'Not Given' },
      { id: 'p1_q7', type: 'tfng', text: 'Persia was one of the first places coffee spread to from Yemen.', options: ['True', 'False', 'Not Given'], correctAnswer: 'True' },
      { id: 'p1_q8', type: 'fill-in-the-blank', instruction: 'Questions 8-13 (Fill in the blanks)', text: 'According to legend, coffee was discovered by a ________ named Kaldi.', correctAnswer: 'goat herder' },
      { id: 'p1_q9', type: 'fill-in-the-blank', text: 'Kaldi noticed his goats became ________ after eating the berries.', correctAnswer: 'energetic' },
      { id: 'p1_q10', type: 'fill-in-the-blank', text: 'Coffee houses were known as ________.', correctAnswer: 'qahveh khaneh' },
      { id: 'p1_q11', type: 'fill-in-the-blank', text: 'Coffee reached Europe in the ________ century.', correctAnswer: '17th' },
      { id: 'p1_q12', type: 'fill-in-the-blank', text: 'The ________ were the first to cultivate coffee commercially.', correctAnswer: 'Dutch' },
      { id: 'p1_q13', type: 'fill-in-the-blank', text: 'Commercial plantations were established in Indonesia, specifically on the island of ________.', correctAnswer: 'Java' }
    ]
  },
  {
    id: 'p2', title: 'Deep Sea Exploration',
    content: [
      "The deep sea remains one of the least explored environments on Earth. Covering over 60% of the planet's surface, the ocean depths are characterized by extreme pressure, near-freezing temperatures, and complete darkness. For a long time, scientists believed that life could not exist in such harsh conditions.",
      "This view changed dramatically in 1977 with the discovery of hydrothermal vents along the Galapagos Rift. These vents spew mineral-rich, superheated water from the Earth's crust. To the astonishment of researchers, these vents were teeming with life, including giant tube worms and blind crabs, which rely on chemosynthesis rather than photosynthesis.",
      "Today, deep-sea exploration relies heavily on remotely operated vehicles (ROVs) and autonomous underwater vehicles (AUVs). These robotic submarines can withstand the crushing pressures and capture high-definition video and samples, revealing a world of bizarre and fascinating creatures."
    ],
    questions: [
      { id: 'p2_q1', type: 'ynng', instruction: 'Questions 1-6 (Yes/No/Not Given)', text: 'The deep sea covers more than half of the Earth\'s surface.', options: ['Yes', 'No', 'Not Given'], correctAnswer: 'Yes' },
      { id: 'p2_q2', type: 'ynng', text: 'Scientists have always known that life exists in the deep sea.', options: ['Yes', 'No', 'Not Given'], correctAnswer: 'No' },
      { id: 'p2_q3', type: 'ynng', text: 'Hydrothermal vents were discovered in the 1970s.', options: ['Yes', 'No', 'Not Given'], correctAnswer: 'Yes' },
      { id: 'p2_q4', type: 'ynng', text: 'Creatures near hydrothermal vents use photosynthesis to survive.', options: ['Yes', 'No', 'Not Given'], correctAnswer: 'No' },
      { id: 'p2_q5', type: 'ynng', text: 'Giant tube worms are the most common species in the deep sea.', options: ['Yes', 'No', 'Not Given'], correctAnswer: 'Not Given' },
      { id: 'p2_q6', type: 'ynng', text: 'ROVs are controlled remotely.', options: ['Yes', 'No', 'Not Given'], correctAnswer: 'Yes' },
      { id: 'p2_q7', type: 'multiple-choice', instruction: 'Questions 7-13 (Multiple Choice)', text: 'What characterizes the deep sea environment?', options: ['High temperatures and light', 'Extreme pressure and darkness', 'Low pressure and freezing temperatures', 'Abundant plant life'], correctAnswer: 'Extreme pressure and darkness' },
      { id: 'p2_q8', type: 'multiple-choice', text: 'When were hydrothermal vents discovered?', options: ['1967', '1977', '1987', '1997'], correctAnswer: '1977' },
      { id: 'p2_q9', type: 'multiple-choice', text: 'Where were the first hydrothermal vents found?', options: ['Mariana Trench', 'Galapagos Rift', 'Mid-Atlantic Ridge', 'Great Barrier Reef'], correctAnswer: 'Galapagos Rift' },
      { id: 'p2_q10', type: 'multiple-choice', text: 'What do hydrothermal vents spew?', options: ['Cold water', 'Lava', 'Mineral-rich, superheated water', 'Toxic gases only'], correctAnswer: 'Mineral-rich, superheated water' },
      { id: 'p2_q11', type: 'multiple-choice', text: 'Which process do vent creatures rely on?', options: ['Photosynthesis', 'Chemosynthesis', 'Biosynthesis', 'Thermosynthesis'], correctAnswer: 'Chemosynthesis' },
      { id: 'p2_q12', type: 'multiple-choice', text: 'What does ROV stand for?', options: ['Robotic Ocean Vehicle', 'Remotely Operated Vehicle', 'Research Observation Vessel', 'Remote Ocean Viewer'], correctAnswer: 'Remotely Operated Vehicle' },
      { id: 'p2_q13', type: 'multiple-choice', text: 'What is a primary function of AUVs?', options: ['Carrying human passengers', 'Capturing video and samples', 'Drilling for oil', 'Cleaning the ocean floor'], correctAnswer: 'Capturing video and samples' }
    ]
  }
];
