'use client';
import { useState } from 'react';
import Profile from '../components/dashboard/Profile';

const Page = () => {
	const [showText, setShowText] = useState(false);
	return (
		<div className="p-8">
			<h1>hello</h1>
			<button>Click me </button>
			<input name="first" className="border" type="text" />
			<label htmlFor="text-input"> name</label>
			<input id="text-input" className="border" type="text" />
			<br />
			<br />
			<input className="border" type="text" placeholder="your name" />
			<br />
			<br />
			<input className="border" type="text" value={'hello'} />

			<div>
				{showText && 'conditional rendaring'}
				<button
					onClick={() =>
						setTimeout(() => {
							setShowText(!showText);
						}, 1500)
					}
				>
					show text
				</button>
			</div>

			<div className="mt-10">
				<Profile
					name="Hasibul Hasan"
					email="hasib@gmail.com"
					phone="123456"
					isVerified={true}
				/>
			</div>
		</div>
	);
};

export default Page;
