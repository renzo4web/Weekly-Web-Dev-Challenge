const emojiContainer = document.querySelector('.emojis-container');
const emojiList = document.querySelector('.emojis-container ul');
const btn = document.getElementById('btn');
let listItems;
const walk = 100;
const gnrateRandomEmoji = () => {
  const bankEmoji = [
    '✌',
    '😂',
    '😝',
    '😁',
    '😱',
    '👉',
    '🙌',
    '🍻',
    '🔥',
    '🌈',
    '☀',
    '🎈',
    '🌹',
    '💄',
    '🎀',
    '⚽',
    '🎾',
    '🏁',
    '😡',
    '👿',
    '🐻',
    '🐶',
    '🐬',
    '🐟',
    '🍀',
    '👀',
    '🚗',
    '🍎',
    '💝',
    '💙',
    '👌',
    '❤',
    '😍',
    '😉',
    '😓',
    '😳',
    '💪',
    '💩',
    '🍸',
    '🔑',
    '💖',
    '🌟',
    '🎉',
    '🌺',
    '🎶',
    '👠',
    '🏈',
    '⚾',
    '🏆',
    '👽',
    '💀',
    '🐵',
    '🐮',
    '🐩',
    '🐎',
    '💣',
    '👃',
    '👂',
    '🍓',
    '💘',
    '💜',
    '👊',
    '💋',
    '😘',
    '😜',
    '😵',
    '🙏',
    '👋',
    '🚽',
    '💃',
    '💎',
    '🚀',
    '🌙',
    '🎁',
    '⛄',
    '🌊',
    '⛵',
    '🏀',
    '🎱',
    '💰',
    '👶',
    '👸',
    '🐰',
    '🐷',
    '🐍',
    '🐫',
    '🔫',
    '👄',
    '🚲',
    '🍉',
    '💛',
    '💚',
  ];

  const randomEmojis = [];
  for (let i = 0; i < 4; i++) {
    let rnd = Math.floor(Math.random() * bankEmoji.length);
    randomEmojis.push(bankEmoji[rnd]);
  }
  return randomEmojis;
};

const handleClick = () => {
  //   emojiList.innerHTML = gnrateRandomEmoji()
  //     .map((emoji) => `<li class='shake'>${emoji}</li>`)
  //     .join('');

  emojiContainer.classList.toggle('hide');
  emojiList.innerHTML += gnrateRandomEmoji()
    .map((emoji) => `<li class='shake'>${emoji}</li>`)
    .join('');
  listItems = document.querySelectorAll('li');
};

btn.addEventListener('click', handleClick);

const generateShadow = (e) => {
  const { offsetHeight: height, offsetWidth: width } = emojiContainer;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xWalk = (x / width) * walk - walk / 2;
  const yWalk = (y / height) * walk - walk / 2;

  let rndColor = () => Math.floor(Math.random() * 255);

  listItems.forEach((li) => {
    li.style.textShadow = `${xWalk}px ${yWalk}px 0 rgb(${rndColor()}, ${rndColor()}, 0)`;
  });
};

emojiContainer.addEventListener('mousemove', generateShadow);
