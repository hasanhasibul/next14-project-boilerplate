import AddPage from '@/app/post/add/page';
import AddPost from '@/components/posts/AddPost';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('checking add page redering', () => {
	test('add page', () => {
		render(<AddPage />);
	});
});

describe('add form', () => {
	test('validation component render', () => {
		render(<AddPost />);
	});

	test('finding input fields using label', async () => {
		render(<AddPost />);
		const submitBtn = screen.getByRole('button', { name: 'Submit' });
		expect(submitBtn).toBeDisabled();
		const nameInput = screen.getByLabelText(/Name/);
		await userEvent.type(nameInput, 'hasibul hasan');
		const emailInput = screen.getByLabelText(/Email/);
		await userEvent.type(emailInput, 'hasib@gmail.com');
		const phoneInput = screen.getByLabelText(/Phone/);
		await userEvent.type(phoneInput, '01999999');
		expect(submitBtn).toBeEnabled();
		await userEvent.click(submitBtn);
		const succesText = await screen.findByText(/submited success/);
		expect(succesText).toBeInTheDocument();
	});
});
