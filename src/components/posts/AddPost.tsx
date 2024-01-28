/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';

const AddPost = () => {
	const [user, setUser] = useState<any>({
		name: '',
		phone: '',
		email: '',
		msg: '',
	});

	const [isDisabled, setIsDisabled] = useState(true);
	const handleOnChange = (e: any) => {
		const info = { ...user };
		info[e.target.name] = e.target.value;
		setUser(info);
	};

	useEffect(() => {
		if (user.name && user.phone && user.email) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	}, [user]);
	const handleSubmit = (e: any) => {
		e.preventDefault();

		setUser({
			...user,
			msg: 'submited success',
		});
	};

	return (
		<div className="p-8">
			<form action="">
				<label htmlFor="name">Name : </label>
				<input
					name="name"
					id="name"
					onChange={(e: any) => handleOnChange(e)}
					value={user.name}
					className="mb-2 border px-2"
					type="text"
					placeholder="name"
				/>
				<br />
				<label htmlFor="email">Email : </label>
				<input
					name="email"
					id="email"
					value={user.email}
					onChange={(e: any) => handleOnChange(e)}
					className="mb-2 border px-2"
					type="text"
					placeholder="email"
				/>

				<br />
				<label htmlFor="phone">Phone : </label>
				<input
					name="phone"
					id="phone"
					value={user.phone}
					onChange={(e: any) => handleOnChange(e)}
					className="mb-2 border px-2"
					type="text"
					placeholder="phone"
				/>
				<br />
				<button
					disabled={isDisabled}
					className="rounded border p-1 disabled:cursor-not-allowed"
					onClick={handleSubmit}
				>
					Submit
				</button>
			</form>

			<h2>{user?.msg}</h2>
		</div>
	);
};

export default AddPost;
