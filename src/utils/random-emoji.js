const emojies = [
  '✨',
  '😙',
  '😎',
  '😘',
  '😇',
  '😉',
  '😍',
  '🤗',
  '😲',
  '🕺',
  '💃',
  '👰',
  '🤵',
  '👍',
  '🤙',
  '👏',
  '🙏',
  '❤️',
  '‍💋',
  '🙈',
  '🙉',
  '🙊',
  '🌻',
  '💐',
  '🌿',
  '💕',
  '💝',
  '🎉',
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

export default function randomEmoji() {
  return emojies[getRandomInt(0, emojies.length)];
}
