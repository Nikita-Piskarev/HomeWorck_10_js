'use strict'
// Функция которая принимает строку и возвращает количество слов в ней.
// const str ="The MDN Web Docs site provides information about Open Web technologies including HTML";

// const returnNumWord = (string) => string.split(" ").length;

// Функция, которая получает строку и возвращает размер самого большого слова в ней

const str =
  "The MDN Web Docs site provides information about Open Web technologies including HTML";

const returnBigWord = (arr) => {
  const arrey = arr.split(" ");
  let word = 0;
  for (let i = 0; i < arrey.length; i++) {
    if (word < arrey[i].length) {
      word = arrey[i].length;
    }
  }
  return word;
};
