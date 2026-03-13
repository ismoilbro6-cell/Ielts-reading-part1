import { Passage } from './types';

export const passage2: Passage = {
  id: 'p2',
  title: 'The Secret Life of Forests',
  content: [
    "For centuries, the prevailing scientific view of a forest was that of a battleground. Trees were seen as solitary individuals, locked in a relentless competition for sunlight, water, and soil nutrients. The strongest and tallest survived, while the weaker ones perished. However, groundbreaking research over the past few decades has completely overturned this paradigm, revealing that forests are actually highly cooperative and interconnected ecosystems.",
    "The key to this hidden world lies beneath the forest floor. The roots of trees are intertwined with a vast, microscopic network of fungal threads known as mycelium. This symbiotic association between tree roots and fungi is called a mycorrhiza. The fungi, which cannot photosynthesize, rely on the trees for carbon-rich sugars produced in the leaves. In exchange, the fungal network acts as an extension of the tree's root system, scavenging the soil for water and essential minerals like phosphorus and nitrogen, and delivering them back to the tree.",
    "Ecologist Suzanne Simard was one of the first to discover that this fungal network—often dubbed the 'Wood Wide Web'—does more than just connect a single tree to the soil; it connects trees to each other. Through the mycelial network, trees can share resources. A mature, healthy tree growing in abundant sunlight can pump excess carbon and nutrients into the network, which are then channeled to younger, shaded saplings that are struggling to survive. This sharing mechanism ensures the resilience of the entire forest community.",
    "Furthermore, the network serves as a sophisticated communication system. When a tree is attacked by pests, such as aphids or bark beetles, it releases chemical signals into the fungal network. Neighboring trees receive these distress signals and respond by ramping up their own production of defensive chemicals, making their leaves less palatable or even toxic to the invading insects, long before the pests actually reach them.",
    "At the center of these complex networks are the 'hub trees', or 'mother trees'. These are typically the oldest and largest trees in the forest, with the most extensive root systems and fungal connections. Mother trees act as central distribution hubs, managing the flow of resources and information. Simard's research has shown that mother trees can even recognize their own kin—saplings grown from their own seeds—and will preferentially send them more nutrients and reduce their own root competition to give their offspring a better chance of survival."
  ],
  questions: [
    {
      id: 'p2_q1',
      type: 'tfng',
      instruction: 'Questions 1-6\nDo the following statements agree with the information given in Reading Passage 2?\n\nChoose:\nTRUE if the statement agrees with the information\nFALSE if the statement contradicts the information\nNOT GIVEN if there is no information on this',
      text: 'Historically, scientists believed that trees cooperated with each other to survive.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'False'
    },
    {
      id: 'p2_q2',
      type: 'tfng',
      text: 'Fungi are able to produce their own sugars through photosynthesis.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'False'
    },
    {
      id: 'p2_q3',
      type: 'tfng',
      text: 'Suzanne Simard coined the term "Wood Wide Web".',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'Not Given'
    },
    {
      id: 'p2_q4',
      type: 'tfng',
      text: 'Trees can use the fungal network to warn others of impending insect attacks.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'True'
    },
    {
      id: 'p2_q5',
      type: 'tfng',
      text: 'Mother trees treat all saplings equally when distributing nutrients.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'False'
    },
    {
      id: 'p2_q6',
      type: 'tfng',
      text: 'Clear-cutting is considered a sustainable forestry practice by modern ecologists.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'Not Given'
    },
    {
      id: 'p2_q7',
      type: 'fill-in-the-blank',
      instruction: 'Questions 7-13\nComplete the sentences below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.',
      text: 'The microscopic network of fungal threads beneath the forest floor is known as ________.',
      correctAnswer: 'mycelium'
    },
    {
      id: 'p2_q8',
      type: 'fill-in-the-blank',
      text: 'Fungi provide trees with water and essential minerals like nitrogen and ________.',
      correctAnswer: 'phosphorus'
    },
    {
      id: 'p2_q9',
      type: 'fill-in-the-blank',
      text: 'A mature tree in sunlight can send excess nutrients to shaded ________.',
      correctAnswer: 'saplings'
    },
    {
      id: 'p2_q10',
      type: 'fill-in-the-blank',
      text: 'Trees under attack produce ________ to make their leaves less appealing to pests.',
      correctAnswer: 'defensive chemicals'
    },
    {
      id: 'p2_q11',
      type: 'fill-in-the-blank',
      text: 'The oldest and largest trees in the forest are referred to as ________ or mother trees.',
      correctAnswer: 'hub trees'
    },
    {
      id: 'p2_q12',
      type: 'fill-in-the-blank',
      text: 'The symbiotic association between tree roots and fungi is called a ________.',
      correctAnswer: 'mycorrhiza'
    },
    {
      id: 'p2_q13',
      type: 'fill-in-the-blank',
      text: 'Mother trees act as central ________, managing the flow of resources and information.',
      correctAnswer: 'distribution hubs'
    }
  ]
};
