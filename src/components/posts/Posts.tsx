'use client';

import { useEffect, useState } from 'react';

const Posts = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		// fetch("https://jsonplaceholder.typicode.com/posts")
		//   .then((res) => res.json())
		//   .then((res) => setData(res));
		getPost();
	}, []);

	const getPost = async () => {
		const response = await (
			await fetch('https://jsonplaceholder.typicode.com/posts')
		).json();
		setData(response);
	};
	return (
		<div>
			<ul>
				{data?.map((post: { title: string; body: string }, i: number) => {
					return (
						<div className=" m-2 border p-4 " key={i}>
							<li> Title: {post.title}</li>
							<li>Body : {post.body}</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default Posts;
