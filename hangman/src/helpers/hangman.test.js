import { checkIfLetterIsInWord } from "./hangman"

describe('checkIfLetterIsInWord', () => {
    it('returns true for the letter e and the word cheese', () => {
        expect(checkIfLetterIsInWord('e', 'cheese')).toBeTruthy()
    })
})