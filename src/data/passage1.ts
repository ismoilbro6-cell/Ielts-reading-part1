import { Passage } from './types';

export const passage1: Passage = {
  id: 'p1',
  title: 'The Evolution of the Bicycle',
  content: [
    "The bicycle, an invention that revolutionized personal transport, was not created by a single individual in a single moment. Instead, it evolved over several decades through the contributions of various inventors across Europe. The earliest verifiable predecessor to the modern bicycle was the 'dandy horse' (or Laufmaschine), invented by the German baron Karl von Drais in 1817. Constructed almost entirely of wood, it featured two wheels in a line and a steerable front wheel, but it lacked pedals. Riders propelled themselves by pushing their feet against the ground, gliding forward. While it enjoyed a brief period of popularity among the European aristocracy, it was largely impractical for rough roads.",
    "The next major leap occurred in the 1860s in France. Inventors, most notably Pierre Michaux and Pierre Lallement, attached pedals directly to the front wheel of a two-wheeled machine, creating the 'velocipede'. Unlike the wooden dandy horse, the velocipede featured a stiff iron frame and wooden wheels surrounded by iron tires. This combination, along with the cobblestone streets of the era, resulted in an incredibly jarring ride, earning the machine the popular nickname 'boneshaker'. Despite the discomfort, the velocipede sparked the first widespread bicycle craze.",
    "In the 1870s, the quest for greater speed led to the development of the 'penny-farthing' or 'high wheel' bicycle, primarily in England by inventors like Eugene Meyer and James Starley. By making the front wheel massive—sometimes up to 1.5 meters in diameter—the rider could travel much further with a single rotation of the pedals. The rear wheel was reduced to a fraction of the size. While fast, the penny-farthing was notoriously dangerous. The rider sat high above the center of gravity, and any sudden stop caused by a rut or a rock would send the rider pitching forward over the handlebars, an accident commonly referred to as taking a 'header'.",
    "The turning point in bicycle history came in 1885 when John Kemp Starley (nephew of James Starley) introduced the 'Rover', the first commercially successful 'safety bicycle'. The safety bicycle featured two wheels of equal size and, crucially, a chain drive that transferred power from the pedals to the rear wheel. This allowed the rider to sit lower to the ground, drastically reducing the risk of fatal falls while maintaining the speed of the high wheelers.",
    "The final piece of the puzzle was added in 1888 by a Scottish veterinarian named John Boyd Dunlop. Seeking to make his son's tricycle more comfortable, Dunlop invented the pneumatic (air-filled) rubber tire. When applied to the safety bicycle, the pneumatic tire absorbed the shocks of the road, making cycling a smooth and comfortable experience. This innovation triggered the massive 'bicycle boom' of the 1890s, transforming the bicycle from a dangerous sporting equipment for young men into a practical, everyday mode of transportation for people of all ages and genders."
  ],
  questions: [
    {
      id: 'p1_q1',
      type: 'tfng',
      instruction: 'Questions 1-6\nDo the following statements agree with the information given in Reading Passage 1?\n\nChoose:\nTRUE if the statement agrees with the information\nFALSE if the statement contradicts the information\nNOT GIVEN if there is no information on this',
      text: 'Karl von Drais\'s invention featured pedals attached to the front wheel.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'False'
    },
    {
      id: 'p1_q2',
      type: 'tfng',
      text: 'The velocipede was given the nickname \'boneshaker\' due to its uncomfortable ride.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'True'
    },
    {
      id: 'p1_q3',
      type: 'tfng',
      text: 'The penny-farthing was primarily ridden by wealthy aristocrats.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'Not Given'
    },
    {
      id: 'p1_q4',
      type: 'tfng',
      text: 'The safety bicycle was considered more dangerous than the penny-farthing.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'False'
    },
    {
      id: 'p1_q5',
      type: 'tfng',
      text: 'John Kemp Starley\'s Rover bicycle featured wheels of different sizes.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'False'
    },
    {
      id: 'p1_q6',
      type: 'tfng',
      text: 'Pneumatic tires were invented before the safety bicycle.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'False'
    },
    {
      id: 'p1_q7',
      type: 'fill-in-the-blank',
      instruction: 'Questions 7-13\nComplete the sentences below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.',
      text: 'The earliest predecessor of the bicycle was made almost entirely of ________.',
      correctAnswer: 'wood'
    },
    {
      id: 'p1_q8',
      type: 'fill-in-the-blank',
      text: 'Riders of the penny-farthing were at risk of taking a ________ if they hit an obstacle.',
      correctAnswer: 'header'
    },
    {
      id: 'p1_q9',
      type: 'fill-in-the-blank',
      text: 'The safety bicycle utilized a ________ to connect the pedals to the rear wheel.',
      correctAnswer: 'chain drive'
    },
    {
      id: 'p1_q10',
      type: 'fill-in-the-blank',
      text: 'John Boyd Dunlop\'s invention provided riders with a smooth and ________ experience.',
      correctAnswer: 'comfortable'
    },
    {
      id: 'p1_q11',
      type: 'fill-in-the-blank',
      text: 'The massive surge in cycling popularity during the 1890s is referred to as the ________.',
      correctAnswer: 'bicycle boom'
    },
    {
      id: 'p1_q12',
      type: 'fill-in-the-blank',
      text: 'The velocipede featured a stiff ________ frame.',
      correctAnswer: 'iron'
    },
    {
      id: 'p1_q13',
      type: 'fill-in-the-blank',
      text: 'The dandy horse was largely impractical for ________.',
      correctAnswer: 'rough roads'
    }
  ]
};
