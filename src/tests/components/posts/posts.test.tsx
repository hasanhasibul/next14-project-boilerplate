import Posts from '../../../components/posts/Posts';
import { render, screen } from '@testing-library/react';

describe('post component testing', () => {
	describe('component api testing', () => {
		test('get post api', async () => {
			render(<Posts />);
			expect(await screen.findByText(/title 1/)).toBeInTheDocument();
			expect(await screen.findByText(/body 1/)).toBeInTheDocument();
		});
	});
});
