export const getLetterMatchCount = (word, secretWord) => {
	const arrayOfWord = [...new Set(word.split(''))];
	const arrayOfSecretWord = [...new Set(secretWord.split(''))];
	return arrayOfSecretWord.filter(letter => arrayOfWord.includes(letter)).length;
};
