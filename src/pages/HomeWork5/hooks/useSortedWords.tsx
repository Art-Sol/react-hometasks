import { useMemo } from 'react';

import { getWordsList } from '../utils';

const WORDS_LIST = getWordsList(1000, 10);

const stringMatchIndex = (str1: string, str2: string): number => {
  return str1.split('').filter((char) => str2.includes(char)).length;
};

export const useSortedWords = (searchStr: string) => {
  return useMemo(() => {
    const getMatchIndex = (word: string) => {
      return stringMatchIndex(searchStr, word);
    };
    const sortFunc = (word1: string, word2: string) => {
      return getMatchIndex(word2) - getMatchIndex(word1);
    };
    return [...WORDS_LIST].sort(sortFunc);
  }, [searchStr]);
};
