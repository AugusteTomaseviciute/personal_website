import TypingWord from './TypingWord';
import {act, render} from '@testing-library/react';

describe('Typing words', () => {
	const typingSpeed = 1000;
	const deletingSpeed = 1000;
	const testWords = ['abc', 'aaa', 'bbb'];
	it('types one letter at the time', async () => {
		const testWord = testWords[0];
		const screen = render(<TypingWord textOptions={testWord}
										  typingSpeed={typingSpeed} pause={1000}/>);
		await act(async () => {
			for (let i = 0; i < testWord[0].length; i++) {
				expect(screen.getByTestId('word').textContent).toBe(testWord.slice(0, i));
				await new Promise((r) => setTimeout(r, typingSpeed));
			}

			await new Promise((r) => setTimeout(r, 1000));

			for (let i = testWord[0].length - 1; i >= 0; i--) {
				expect(screen.getByTestId('word').textContent).toBe(testWord.slice(0, i));
				await new Promise((r) => setTimeout(r, typingSpeed));
			}
		});
	});

});
