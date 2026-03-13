import { Passage } from './types';

export const passage3: Passage = {
  id: 'p3',
  title: 'The Voyager Missions: Journey to Interstellar Space',
  content: [
    "Launched in 1977, the twin spacecraft Voyager 1 and Voyager 2 embarked on what was initially designed as a four-year mission to explore Jupiter and Saturn. However, their journey became one of the most remarkable achievements in the history of space exploration, extending far beyond their original targets to the very edges of our solar system and into interstellar space.",
    "The timing of the Voyager launches was crucial. In the late 1970s, a rare planetary alignment occurred, an event that happens only once every 176 years. This alignment allowed the spacecraft to use a technique called 'gravity assist'. By flying close to a planet, the spacecraft could use the planet's gravity to slingshot itself towards the next destination, significantly reducing the travel time and the amount of fuel required. Thanks to this alignment, Voyager 2 was able to visit Jupiter, Saturn, Uranus, and Neptune—a 'Grand Tour' of the outer solar system.",
    "Both spacecraft made groundbreaking discoveries. Voyager 1 provided the first detailed images of Jupiter's moons, revealing active volcanoes on Io and a thick, smoggy atmosphere on Titan. Voyager 2 remains the only spacecraft to have ever visited Uranus and Neptune, discovering new moons and rings around both ice giants. The data and images transmitted back to Earth fundamentally changed our understanding of planetary science.",
    "Perhaps the most famous aspect of the Voyager missions is the 'Golden Record' carried by both spacecraft. Conceived by a committee chaired by astronomer Carl Sagan, these 12-inch gold-plated copper disks contain sounds and images selected to portray the diversity of life and culture on Earth. They include greetings in 55 languages, music from various cultures, and sounds of nature, serving as a time capsule and a message to any extraterrestrial intelligence that might encounter them.",
    "In 2012, Voyager 1 made history by crossing the heliopause—the boundary where the solar wind is stopped by the interstellar medium—becoming the first human-made object to enter interstellar space. Voyager 2 followed suit in 2018. Despite being billions of miles away and operating on technology from the 1970s, both spacecraft continue to send valuable data back to Earth, though their power sources are slowly depleting."
  ],
  questions: [
    {
      id: 'p3_q1',
      type: 'short-answer',
      instruction: 'Questions 1-6\nAnswer the questions below.\nChoose NO MORE THAN THREE WORDS from the passage for each answer.',
      text: 'What was the original planned duration of the Voyager missions?',
      correctAnswer: 'four-year'
    },
    {
      id: 'p3_q2',
      type: 'short-answer',
      text: 'How often does the rare planetary alignment used by the Voyagers occur?',
      correctAnswer: 'every 176 years'
    },
    {
      id: 'p3_q3',
      type: 'short-answer',
      text: 'What technique did the spacecraft use to reduce travel time and fuel?',
      correctAnswer: 'gravity assist'
    },
    {
      id: 'p3_q4',
      type: 'short-answer',
      text: 'Which moon of Jupiter was discovered to have active volcanoes?',
      correctAnswer: 'Io'
    },
    {
      id: 'p3_q5',
      type: 'short-answer',
      text: 'Who chaired the committee that created the Golden Record?',
      correctAnswer: 'Carl Sagan'
    },
    {
      id: 'p3_q6',
      type: 'short-answer',
      text: 'What boundary did Voyager 1 cross in 2012?',
      correctAnswer: 'the heliopause'
    },
    {
      id: 'p3_q7',
      type: 'tfng',
      instruction: 'Questions 7-13\nDo the following statements agree with the information given in Reading Passage 3?\n\nChoose:\nTRUE if the statement agrees with the information\nFALSE if the statement contradicts the information\nNOT GIVEN if there is no information on this',
      text: 'Voyager 1 and Voyager 2 were launched in the same year.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'True'
    },
    {
      id: 'p3_q8',
      type: 'tfng',
      text: 'Voyager 1 visited Uranus and Neptune after exploring Jupiter and Saturn.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'False'
    },
    {
      id: 'p3_q9',
      type: 'tfng',
      text: 'The Golden Record contains video recordings of human activities.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'False'
    },
    {
      id: 'p3_q10',
      type: 'tfng',
      text: 'The Golden Record includes greetings in exactly 55 languages.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'True'
    },
    {
      id: 'p3_q11',
      type: 'tfng',
      text: 'Voyager 2 entered interstellar space before Voyager 1.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'False'
    },
    {
      id: 'p3_q12',
      type: 'tfng',
      text: 'The spacecraft are currently powered by solar panels.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'Not Given'
    },
    {
      id: 'p3_q13',
      type: 'tfng',
      text: 'Both spacecraft are still transmitting data back to Earth.',
      options: ['True', 'False', 'Not Given'],
      correctAnswer: 'True'
    }
  ]
};
