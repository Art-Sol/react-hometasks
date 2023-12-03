export const getWordsList = (listLength: number, wordLength: number) => {
  let array = [];

  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;

  for (let i = 0; i < listLength; i++) {
    let word = '';
    for (let j = 0; j < wordLength; j++) {
      word += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    array.push(word);
  }

  return array;
};
