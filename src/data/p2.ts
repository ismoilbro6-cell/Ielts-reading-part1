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
      type: 'multiple-choice',
      instruction: 'Questions 1-5\nChoose the correct letter, A, B, C or D.',
      text: 'What was the traditional scientific view of forests?',
      options: [
        'A cooperative ecosystem',
        'A highly competitive environment',
        'A network of fungal threads',
        'A place where only young trees survive'
      ],
      correctAnswer: 'A highly competitive environment'
    },
    {
      id: 'p2_q2',
      type: 'multiple-choice',
      text: 'What do fungi receive from trees in a mycorrhizal relationship?',
      options: [
        'Phosphorus and nitrogen',
        'Water from the soil',
        'Carbon-rich sugars',
        'Defensive chemicals'
      ],
      correctAnswer: 'Carbon-rich sugars'
    },
    {
      id: 'p2_q3',
      type: 'multiple-choice',
      text: 'How do mature trees help shaded saplings?',
      options: [
        'By blocking sunlight',
        'By sending excess nutrients through the fungal network',
        'By releasing chemical signals into the air',
        'By reducing the number of pests in the area'
      ],
      correctAnswer: 'By sending excess nutrients through the fungal network'
    },
    {
      id: 'p2_q4',
      type: 'multiple-choice',
      text: 'What happens when a tree is attacked by pests?',
      options: [
        'It immediately dies to save others',
        'It disconnects from the Wood Wide Web',
        'It sends distress signals through the fungal network',
        'It absorbs more water from the soil'
      ],
      correctAnswer: 'It sends distress signals through the fungal network'
    },
    {
      id: 'p2_q5',
      type: 'multiple-choice',
      text: 'What is a key characteristic of "mother trees"?',
      options: [
        'They are the youngest trees in the forest',
        'They do not connect to the fungal network',
        'They act as central distribution hubs for resources',
        'They compete aggressively with their own kin'
      ],
      correctAnswer: 'They act as central distribution hubs for resources'
    },
    {
      id: 'p2_q6',
      type: 'ynng',
      instruction: 'Questions 6-13\nDo the following statements agree with the claims of the writer in Reading Passage 2?\n\nChoose:\nYES if the statement agrees with the claims of the writer\nNO if the statement contradicts the claims of the writer\nNOT GIVEN if it is impossible to say what the writer thinks about this',
      text: 'Recent research has confirmed the traditional view that trees are solitary individuals.',
      options: ['Yes', 'No', 'Not Given'],
      correctAnswer: 'No'
    },
    {
      id: 'p2_q7',
      type: 'ynng',
      text: 'Fungi are incapable of photosynthesis.',
      options: ['Yes', 'No', 'Not Given'],
      correctAnswer: 'Yes'
    },
    {
      id: 'p2_q8',
      type: 'ynng',
      text: 'Suzanne Simard was the only scientist studying the Wood Wide Web in the 1990s.',
      options: ['Yes', 'No', 'Not Given'],
      correctAnswer: 'Not Given'
    },
    {
      id: 'p2_q9',
      type: 'ynng',
      text: 'Trees can use the fungal network to share resources with neighboring trees.',
      options: ['Yes', 'No', 'Not Given'],
      correctAnswer: 'Yes'
    },
    {
      id: 'p2_q10',
      type: 'ynng',
      text: 'Chemical signals sent by attacked trees are often ignored by neighboring trees.',
      options: ['Yes', 'No', 'Not Given'],
      correctAnswer: 'No'
    },
    {
      id: 'p2_q11',
      type: 'ynng',
      text: 'Mother trees are usually the oldest and largest trees in a forest.',
      options: ['Yes', 'No', 'Not Given'],
      correctAnswer: 'Yes'
    },
    {
      id: 'p2_q12',
      type: 'ynng',
      text: 'Mother trees provide equal amounts of nutrients to all saplings, regardless of kinship.',
      options: ['Yes', 'No', 'Not Given'],
      correctAnswer: 'No'
    },
    {
      id: 'p2_q13',
      type: 'ynng',
      text: 'Clear-cutting is highly beneficial for the preservation of the fungal network.',
      options: ['Yes', 'No', 'Not Given'],
      correctAnswer: 'No'
    }
  ]
};
