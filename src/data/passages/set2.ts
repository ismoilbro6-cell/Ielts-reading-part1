import { Passage } from '../types';

export const set2: Passage[] = [
  {
    id: 'p3', title: 'The Psychology of Sleep',
    content: [
      "Sleep is a fundamental human need, yet its exact purpose remains one of the great mysteries of biology. While we know that sleep is essential for physical restoration, recent research highlights its critical role in cognitive function and emotional regulation.",
      "During sleep, the brain cycles through different stages, including REM (Rapid Eye Movement) and deep sleep. Deep sleep is crucial for physical repair, while REM sleep is associated with dreaming and memory consolidation. Lack of sleep can lead to impaired judgment, mood swings, and a weakened immune system.",
      "Modern lifestyles, characterized by artificial light and constant connectivity, have disrupted natural sleep patterns. Experts recommend 7-9 hours of sleep per night for adults, emphasizing the importance of a consistent sleep schedule and a dark, quiet environment."
    ],
    questions: [
      { id: 'p3_q1', type: 'multiple-choice', instruction: 'Questions 1-6 (Multiple Choice)', text: 'What is a primary function of deep sleep?', options: ['Dreaming', 'Physical repair', 'Memory consolidation', 'Emotional regulation'], correctAnswer: 'Physical repair' },
      { id: 'p3_q2', type: 'multiple-choice', text: 'Which stage of sleep is associated with dreaming?', options: ['Stage 1', 'Deep sleep', 'REM sleep', 'Light sleep'], correctAnswer: 'REM sleep' },
      { id: 'p3_q3', type: 'multiple-choice', text: 'What can lack of sleep lead to?', options: ['Improved memory', 'Impaired judgment', 'Stronger immunity', 'Better mood'], correctAnswer: 'Impaired judgment' },
      { id: 'p3_q4', type: 'multiple-choice', text: 'What has disrupted natural sleep patterns?', options: ['Exercise', 'Modern lifestyles', 'Healthy diets', 'Reading books'], correctAnswer: 'Modern lifestyles' },
      { id: 'p3_q5', type: 'multiple-choice', text: 'How many hours of sleep are recommended for adults?', options: ['5-6 hours', '6-8 hours', '7-9 hours', '8-10 hours'], correctAnswer: '7-9 hours' },
      { id: 'p3_q6', type: 'multiple-choice', text: 'What kind of environment is recommended for sleep?', options: ['Bright and noisy', 'Dark and quiet', 'Warm and humid', 'Cold and bright'], correctAnswer: 'Dark and quiet' },
      { id: 'p3_q7', type: 'fill-in-the-blank', instruction: 'Questions 7-13 (Fill in the blanks)', text: 'Sleep is essential for physical ________.', correctAnswer: 'restoration' },
      { id: 'p3_q8', type: 'fill-in-the-blank', text: 'REM sleep is crucial for memory ________.', correctAnswer: 'consolidation' },
      { id: 'p3_q9', type: 'fill-in-the-blank', text: 'Lack of sleep can result in a weakened ________ system.', correctAnswer: 'immune' },
      { id: 'p3_q10', type: 'fill-in-the-blank', text: 'Modern lifestyles are characterized by artificial ________.', correctAnswer: 'light' },
      { id: 'p3_q11', type: 'fill-in-the-blank', text: 'Experts emphasize the importance of a consistent sleep ________.', correctAnswer: 'schedule' },
      { id: 'p3_q12', type: 'fill-in-the-blank', text: 'The exact purpose of sleep remains a mystery of ________.', correctAnswer: 'biology' },
      { id: 'p3_q13', type: 'fill-in-the-blank', text: 'During sleep, the brain cycles through different ________.', correctAnswer: 'stages' }
    ]
  },
  {
    id: 'p4', title: 'The Rise of Solar Energy',
    content: [
      "Solar energy has emerged as a leading alternative to fossil fuels. By harnessing the power of the sun, solar panels generate electricity without emitting greenhouse gases. The technology relies on photovoltaic (PV) cells, which convert sunlight directly into electricity.",
      "The cost of solar panels has plummeted over the last decade, making solar power increasingly accessible to homeowners and businesses. Governments around the world have also implemented subsidies and tax incentives to encourage the adoption of renewable energy.",
      "Despite its benefits, solar energy faces challenges. Energy production is dependent on weather conditions and daylight hours. To overcome this, advancements in battery storage technology are crucial, allowing excess energy generated during the day to be stored for use at night."
    ],
    questions: [
      { id: 'p4_q1', type: 'tfng', instruction: 'Questions 1-6 (True/False/Not Given)', text: 'Solar panels emit a small amount of greenhouse gases.', options: ['True', 'False', 'Not Given'], correctAnswer: 'False' },
      { id: 'p4_q2', type: 'tfng', text: 'Photovoltaic cells convert sunlight into electricity.', options: ['True', 'False', 'Not Given'], correctAnswer: 'True' },
      { id: 'p4_q3', type: 'tfng', text: 'The cost of solar panels has increased recently.', options: ['True', 'False', 'Not Given'], correctAnswer: 'False' },
      { id: 'p4_q4', type: 'tfng', text: 'Governments offer incentives to promote solar energy.', options: ['True', 'False', 'Not Given'], correctAnswer: 'True' },
      { id: 'p4_q5', type: 'tfng', text: 'Solar energy is the most popular renewable energy source globally.', options: ['True', 'False', 'Not Given'], correctAnswer: 'Not Given' },
      { id: 'p4_q6', type: 'tfng', text: 'Solar energy production is unaffected by the weather.', options: ['True', 'False', 'Not Given'], correctAnswer: 'False' },
      { id: 'p4_q7', type: 'multiple-choice', instruction: 'Questions 7-13 (Multiple Choice)', text: 'What do PV cells do?', options: ['Store energy', 'Convert sunlight to electricity', 'Reflect sunlight', 'Generate heat'], correctAnswer: 'Convert sunlight to electricity' },
      { id: 'p4_q8', type: 'multiple-choice', text: 'What has happened to the cost of solar panels?', options: ['It doubled', 'It remained stable', 'It plummeted', 'It fluctuated'], correctAnswer: 'It plummeted' },
      { id: 'p4_q9', type: 'multiple-choice', text: 'Who is solar power becoming more accessible to?', options: ['Only governments', 'Homeowners and businesses', 'Only large corporations', 'Scientists'], correctAnswer: 'Homeowners and businesses' },
      { id: 'p4_q10', type: 'multiple-choice', text: 'What is a major challenge for solar energy?', options: ['High maintenance', 'Dependence on weather', 'Noise pollution', 'Lack of materials'], correctAnswer: 'Dependence on weather' },
      { id: 'p4_q11', type: 'multiple-choice', text: 'What technology is crucial for overcoming solar energy\'s challenges?', options: ['Wind turbines', 'Battery storage', 'Nuclear reactors', 'Fossil fuels'], correctAnswer: 'Battery storage' },
      { id: 'p4_q12', type: 'multiple-choice', text: 'When is excess solar energy typically stored?', options: ['During the night', 'During the day', 'In winter', 'During storms'], correctAnswer: 'During the day' },
      { id: 'p4_q13', type: 'multiple-choice', text: 'What do governments use to encourage renewable energy adoption?', options: ['Strict laws', 'Subsidies and tax incentives', 'Public shaming', 'Free solar panels'], correctAnswer: 'Subsidies and tax incentives' }
    ]
  }
];
