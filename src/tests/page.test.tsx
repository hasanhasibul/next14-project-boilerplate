import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Page from '../app/page';

describe('Home page testing', () => {
	describe('Home text test ..', () => {
		test('home page text match ...', () => {
			render(<Page />);
			expect(screen.getByText(/hello/i)).toBeInTheDocument();
		});
		test('find button with name click me ', () => {
			render(<Page />);
			expect(
				screen.getByRole('button', { name: 'Click me' }),
			).toBeInTheDocument();
		});

		test('get input by textbox', () => {
			render(<Page />);
			const inputBox = screen.getByRole('textbox', { name: 'name' });
			expect(inputBox).toBeInTheDocument();
		});
		test('get input by label', () => {
			render(<Page />);
			const labelInput = screen.getByLabelText(/name/);
			expect(labelInput).toBeInTheDocument();
		});
		test('get input by placeholder name', () => {
			render(<Page />);
			const placeholderInput = screen.getByPlaceholderText('your name');
			expect(placeholderInput).toBeInTheDocument();
		});
		test('get input field by value', () => {
			render(<Page />);

			const inputByValue = screen.getByDisplayValue(/hello/);
			expect(inputByValue).toBeInTheDocument();
		});
		test('find H1 heading', () => {
			render(<Page />);
			const findHeading = screen.getByRole('heading', {
				level: 1,
				name: /hello/,
			});
			expect(findHeading).toBeInTheDocument();
		});
	});

	describe('interective testing ..', () => {
		test('conditional test shown', async () => {
			render(<Page />);
			expect(
				screen.queryByText('conditional rendaring'),
			).not.toBeInTheDocument();
			const showButton = screen.getByRole('button', { name: 'show text' });
			expect(showButton).toBeInTheDocument();
			await userEvent.click(showButton);
			expect(
				await screen.findByText('conditional rendaring', {}, { timeout: 5000 }),
			).toBeInTheDocument();
		});
	});
});
