import { Passage } from './types';

export const passage6: Passage = {
  id: 'p6',
  title: 'The Global Journey of Coffee',
  content: [
    "Coffee is one of the most widely consumed beverages in the world, but its origins are shrouded in legend. The most famous story traces the discovery of coffee to an Ethiopian goatherd named Kaldi in the 9th century. According to the legend, Kaldi noticed that his goats became unusually energetic and unable to sleep after eating the red berries from a certain tree. Curious, he tried the berries himself and experienced a similar stimulating effect. He brought the berries to a local monastery, where a monk made a drink from them, discovering that it kept him alert during long hours of evening prayer.",
    "From Ethiopia, knowledge of the energizing berries spread across the Red Sea to the Arabian Peninsula. By the 15th century, coffee was being cultivated in the Yemeni district of Arabia, and by the 16th century, it was known in Persia, Egypt, Syria, and Turkey. Coffee was not only enjoyed in homes but also in the many public coffee houses—called qahveh khaneh—which began to appear in cities across the Near East. These coffee houses became vibrant centers of social activity and communication, often referred to as 'Schools of the Wise' because of the intellectual conversations that took place there.",
    "European travelers to the Near East brought back stories of an unusual dark black beverage. By the 17th century, coffee had made its way to Europe and was becoming popular across the continent. However, it was initially met with suspicion and fear, with some calling it the 'bitter invention of Satan'. The controversy was so great that Pope Clement VIII was asked to intervene. Before making a decision, he decided to taste the beverage for himself. He found the drink so satisfying that he gave it papal approval.",
    "With the Pope's blessing, coffee houses rapidly spread across Europe. In England, 'penny universities' sprang up, so called because for the price of a penny, one could purchase a cup of coffee and engage in stimulating conversation. Coffee began to replace the common breakfast drink beverages of the time—beer and wine. Those who drank coffee instead of alcohol began the day alert and energized, leading to a noticeable improvement in the quality of their work.",
    "In the late 1600s, the Dutch finally managed to obtain coffee seedlings, breaking the Arabian monopoly on coffee cultivation. They successfully planted them on the island of Java in Indonesia. The plants thrived, and the Dutch soon had a productive and growing trade in coffee. They later expanded the cultivation to the islands of Sumatra and Celebes. Today, coffee is grown in a multitude of countries around the world, primarily in the equatorial region known as the 'Coffee Belt'."
  ],
  questions: [
    {
      id: 'p6_q1',
      type: 'tfng',
      instruction: 'Questions 1-6\nDo the following statements agree with the information given in Reading Passage 6?\n\nChoose:\nTRUE if the statement agrees with the information\nFALSE if the statement contradicts the information\nNOT GIVEN if there is no information on this',
      text: 'The story of Kaldi the goatherd is a proven historical fact.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'False'
    },
    {
      id: 'p6_q2',
      type: 'tfng',
      text: 'The first person to make a drink from coffee berries was an Ethiopian monk.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'True'
    },
    {
      id: 'p6_q3',
      type: 'tfng',
      text: 'Coffee houses in the Near East were exclusively for religious gatherings.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'False'
    },
    {
      id: 'p6_q4',
      type: 'tfng',
      text: 'Pope Clement VIII banned coffee in Europe after tasting it.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'False'
    },
    {
      id: 'p6_q5',
      type: 'tfng',
      text: 'Before coffee became popular in Europe, people commonly drank beer or wine for breakfast.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'True'
    },
    {
      id: 'p6_q6',
      type: 'tfng',
      text: 'The Dutch were the first to cultivate coffee outside of the Arabian Peninsula.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'True'
    },
    {
      id: 'p6_q7',
      type: 'multiple-choice',
      instruction: 'Questions 7-13\nChoose the correct letter, A, B, C or D.',
      text: 'What effect did the red berries have on Kaldi\'s goats?',
      options: [
        'They became sick',
        'They fell asleep immediately',
        'They became highly energetic',
        'They stopped eating other food'
      ],
      correctAnswer: 'They became highly energetic'
    },
    {
      id: 'p6_q8',
      type: 'multiple-choice',
      text: 'By which century was coffee being cultivated in Yemen?',
      options: [
        '9th century',
        '15th century',
        '16th century',
        '17th century'
      ],
      correctAnswer: '15th century'
    },
    {
      id: 'p6_q9',
      type: 'multiple-choice',
      text: 'Why were Near Eastern coffee houses called "Schools of the Wise"?',
      options: [
        'Because they were located near universities',
        'Because only educated people were allowed in',
        'Because of the intellectual conversations held there',
        'Because monks taught classes there'
      ],
      correctAnswer: 'Because of the intellectual conversations held there'
    },
    {
      id: 'p6_q10',
      type: 'multiple-choice',
      text: 'What did some Europeans initially call coffee?',
      options: [
        'The dark black beverage',
        'The bitter invention of Satan',
        'The morning energy drink',
        'The Arabian medicine'
      ],
      correctAnswer: 'The bitter invention of Satan'
    },
    {
      id: 'p6_q11',
      type: 'multiple-choice',
      text: 'What was a "penny university" in England?',
      options: [
        'A cheap school for the poor',
        'A coffee house where one could buy coffee and converse for a penny',
        'A university that served free coffee',
        'A place where coffee beans were sold for a penny'
      ],
      correctAnswer: 'A coffee house where one could buy coffee and converse for a penny'
    },
    {
      id: 'p6_q12',
      type: 'multiple-choice',
      text: 'Where did the Dutch successfully plant their first coffee seedlings?',
      options: [
        'Sumatra',
        'Celebes',
        'Java',
        'Ethiopia'
      ],
      correctAnswer: 'Java'
    },
    {
      id: 'p6_q13',
      type: 'multiple-choice',
      text: 'What is the equatorial region where most coffee is grown today called?',
      options: [
        'The Coffee Zone',
        'The Bean Belt',
        'The Coffee Belt',
        'The Equatorial Ring'
      ],
      correctAnswer: 'The Coffee Belt'
    }
  ]
};
