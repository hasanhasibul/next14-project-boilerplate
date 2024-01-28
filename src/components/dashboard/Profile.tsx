import { FC } from 'react';

interface props {
	name: string;
	email: string;
	phone: string;
	isVerified: boolean;
}

const Profile: FC<props> = ({ name, email, isVerified, phone }) => {
	return (
		<div>
			<h1>
				Name: <span>{name}</span>
			</h1>
			<h1>
				phone: <span>{phone}</span>
			</h1>
			<h1>
				email: {isVerified ? <span>{email}</span> : <span>not verified </span>}{' '}
			</h1>
			<h1>
				length:{' '}
				<span>{isVerified ? email.slice(0, 5).concat('...') : email}</span>
			</h1>
		</div>
	);
};

export default Profile;
