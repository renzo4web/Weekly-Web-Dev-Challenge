/*
DESCRIPTION:
You job is to enable users to give a rating between 1 (bad) and 5 (great), 
and then display that rating in the form of an emoji. The users should give 
their ratings by pressing a key on their keyboards (the numbers 1 to 5). 
Here's the numbers' corresponding emojis:

5 = 😁
3 = 🙂
3 = 😐
2 = ☹️
1 = 🤬

event listeners, keyboard events, key codes, 
focus, focusout, DOM manipulation, tabindex

*/

const emojis = [
  ['🤬', 'red'],
  ['😞', 'violet'],
  ['🙁', 'orange'],
  ['🙂', 'yellow'],
  ['😁', 'green'],
];

const box = document.getElementById('box');
const text = document.getElementById('text');

box.addEventListener('focus', function () {
  text.textContent = 'Type a number between 1 and 5';

  box.addEventListener('keypress', (event) => {
    ratingEmoji(event);
    return;
  });
});

box.addEventListener('focusout', function () {
  text.textContent = 'Click here to give your rating';
});

function ratingEmoji(event) {
  if (event.key > 0 && event.key <= 5) {
    console.log(event.key);
    text.style.fontSize = '60px';
    text.textContent = emojis[event.key - 1][0];
    box.style.backgroundColor = emojis[event.key - 1][1];
  }
}

/*

DETAILED INSTRUCTIONS
1. Listen for keyboard events when the box has focus
2. Figure out which key the user pressed
3. If it's between 1 and 5, display an emoji in the box!

STRETCH GOALS:
- Animate the emoji onto the screen! Why not go crazy with multiple emojis? 
- Reset the entire app when box doesn't have focus anymore
- Can you improve the overall design?

*/
