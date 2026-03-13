import { Passage } from './types';

export const passage5: Passage = {
  id: 'p5',
  title: 'Deep Sea Exploration: The Final Frontier',
  content: [
    "The deep sea, defined as the ocean below 200 meters, is the largest habitat on Earth, yet it remains one of the least explored. For a long time, scientists believed that life could not exist in the extreme conditions of the deep ocean—crushing pressure, near-freezing temperatures, and total darkness. However, the advent of deep-sea submersibles and remotely operated vehicles (ROVs) has unveiled a world teeming with bizarre and fascinating life forms.",
    "One of the most significant discoveries in deep-sea exploration occurred in 1977 when scientists aboard the submersible Alvin discovered hydrothermal vents along the Galápagos Rift. These vents are essentially underwater hot springs, where mineral-rich water heated by magma beneath the Earth's crust gushes out into the freezing ocean. To the scientists' astonishment, these vents were surrounded by thriving communities of organisms, including giant tube worms, blind crabs, and ghostly white clams.",
    "The discovery of hydrothermal vent communities revolutionized our understanding of biology. Unlike life on the surface, which relies on sunlight and photosynthesis, the organisms around these vents rely on chemosynthesis. Bacteria living inside the tube worms convert the toxic hydrogen sulfide emitted by the vents into organic matter, providing food for the entire ecosystem. This proved that life could thrive independently of the sun.",
    "Exploring the deep sea presents immense technological challenges. The pressure at the bottom of the Mariana Trench, the deepest part of the ocean, is over 1,000 times greater than at the surface—enough to crush a standard submarine like a tin can. To withstand these forces, deep-sea vehicles must be constructed with thick spheres of titanium or specialized syntactic foam. Furthermore, the absolute darkness requires powerful lighting systems, and the cold temperatures necessitate robust insulation for both equipment and human occupants.",
    "Despite the difficulties, deep-sea exploration is crucial for several reasons. The deep ocean plays a vital role in regulating the Earth's climate by absorbing heat and carbon dioxide. Additionally, the unique genetic resources found in deep-sea organisms hold immense potential for medical and industrial applications. However, the deep sea is also facing unprecedented threats from deep-sea mining, pollution, and climate change, making its exploration and conservation more urgent than ever."
  ],
  questions: [
    {
      id: 'p5_q1',
      type: 'fill-in-the-blank',
      instruction: 'Questions 1-7\nComplete the sentences below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.',
      text: 'The deep sea is considered the ocean environment below ________.',
      correctAnswer: '200 meters'
    },
    {
      id: 'p5_q2',
      type: 'fill-in-the-blank',
      text: 'Scientists once thought life was impossible in the deep ocean due to total darkness, near-freezing temperatures, and ________.',
      correctAnswer: 'crushing pressure'
    },
    {
      id: 'p5_q3',
      type: 'fill-in-the-blank',
      text: 'Hydrothermal vents were first discovered in 1977 along the ________.',
      correctAnswer: 'Galápagos Rift'
    },
    {
      id: 'p5_q4',
      type: 'fill-in-the-blank',
      text: 'Organisms living near hydrothermal vents rely on a process called ________ rather than photosynthesis.',
      correctAnswer: 'chemosynthesis'
    },
    {
      id: 'p5_q5',
      type: 'fill-in-the-blank',
      text: 'Bacteria convert toxic ________ into food for the vent ecosystem.',
      correctAnswer: 'hydrogen sulfide'
    },
    {
      id: 'p5_q6',
      type: 'fill-in-the-blank',
      text: 'Deep-sea vehicles use thick spheres of ________ or syntactic foam to survive extreme pressure.',
      correctAnswer: 'titanium'
    },
    {
      id: 'p5_q7',
      type: 'fill-in-the-blank',
      text: 'The deep ocean helps regulate the climate by absorbing carbon dioxide and ________.',
      correctAnswer: 'heat'
    },
    {
      id: 'p5_q8',
      type: 'short-answer',
      instruction: 'Questions 8-13\nAnswer the questions below.\nChoose NO MORE THAN THREE WORDS from the passage for each answer.',
      text: 'What type of vehicles, aside from submersibles, are used to explore the deep sea?',
      correctAnswer: 'remotely operated vehicles'
    },
    {
      id: 'p5_q9',
      type: 'short-answer',
      text: 'What heats the mineral-rich water that comes out of hydrothermal vents?',
      correctAnswer: 'magma'
    },
    {
      id: 'p5_q10',
      type: 'short-answer',
      text: 'Where do the chemosynthetic bacteria live in relation to the tube worms?',
      correctAnswer: 'inside'
    },
    {
      id: 'p5_q11',
      type: 'short-answer',
      text: 'What is the name of the deepest part of the ocean mentioned in the text?',
      correctAnswer: 'Mariana Trench'
    },
    {
      id: 'p5_q12',
      type: 'short-answer',
      text: 'What is required to see in the absolute darkness of the deep ocean?',
      correctAnswer: 'powerful lighting systems'
    },
    {
      id: 'p5_q13',
      type: 'short-answer',
      text: 'What human activity, along with pollution and climate change, threatens the deep sea?',
      correctAnswer: 'deep-sea mining'
    }
  ]
};
