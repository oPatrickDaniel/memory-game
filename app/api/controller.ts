import MemoryGame from './game'

const cardData = [
  {
    tech: 'typescript',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg',
  },
  {
    tech: 'c',
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg',
  },
  // {
  //   tech: 'cplusplus',
  //   url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg',
  // },
  // {
  //   tech: 'php',
  //   url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg',
  // },
  // {
  //   tech: 'csharp',
  //   url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg',
  // },
  // {
  //   tech: 'python',
  //   url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg',
  // },
  // {
  //   tech: 'bash',
  //   url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-plain.svg',
  // },
  // {
  //   tech: 'java',
  //   url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg',
  // },
  // {
  //   tech: 'mysql',
  //   url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg',
  // },
  // {
  //   tech: 'javascript',
  //   url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
  // },
]

// const game = new Game(cardData)
const card = new MemoryGame(cardData)
card.createAndShuffleDeck()
