import Profile from '../../../components/dashboard/Profile';
import { render, screen } from '@testing-library/react';

describe('profile component testing ', () => {
	describe('lebel testing', () => {
		test('find the lebel name and phone ', () => {
			render(
				<Profile
					name="hasibul hasan hasib"
					email="hasibul@gmail.com"
					phone="12345"
					isVerified={true}
				/>,
			);
			const Nameheading = screen.getByRole('heading', {
				level: 1,
				name: /name/i,
			});
			expect(Nameheading).toBeInTheDocument();
			const uiNameheadingMatch = screen.getByText('hasibul hasan hasib');
			expect(uiNameheadingMatch).toBeInTheDocument();

			const Phoneheading = screen.getByRole('heading', {
				level: 1,
				name: /phone/i,
			});
			expect(Phoneheading).toBeInTheDocument();
			const uiPhoneheadingMatch = screen.getByText('12345');
			expect(uiPhoneheadingMatch).toBeInTheDocument();

			const Emailheading = screen.getByRole('heading', {
				level: 1,
				name: /email/i,
			});
			expect(Emailheading).toBeInTheDocument();
			const uiEmailheadingMatch = screen.getByText('hasibul@gmail.com');
			expect(uiEmailheadingMatch).toBeInTheDocument();
		});
		test('if is verify false', () => {
			render(
				<Profile
					name="hasibul hasan hasib"
					email="hasibul@gmail.com"
					phone="12345"
					isVerified={false}
				/>,
			);
			expect(screen.getByText('not verified')).toBeInTheDocument();
		});
		test('if is verify true', () => {
			render(
				<Profile
					name="hasibul hasan hasib"
					email="hasibul@gmail.com"
					phone="12345"
					isVerified={true}
				/>,
			);
			expect(screen.getByText('hasibul@gmail.com')).toBeInTheDocument();
		});

		test('text length check  if isverify true', () => {
			render(
				<Profile
					name="hasibul hasan hasib"
					email="hasibul@gmail.com"
					phone="12345"
					isVerified={true}
				/>,
			);
			const headingSelect = screen.getByText(/length/i);
			expect(headingSelect).toHaveTextContent(/hasib\.\.\./i);
		});
		test('text length check  if isverify false', () => {
			render(
				<Profile
					name="hasibul hasan hasib"
					email="hasibul@gmail.com"
					phone="12345"
					isVerified={false}
				/>,
			);
			const headingSelect = screen.getByText(/length/i);
			expect(headingSelect).toHaveTextContent(/hasibul@gmail.com/i);
			expect(headingSelect).not.toHaveTextContent(/hasib\.\.\./i);
		});
	});
});
