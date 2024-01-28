import { http, HttpResponse } from 'msw';

export const handlers = [
	http.get('https://jsonplaceholder.typicode.com/posts', () => {
		return HttpResponse.json([
			{
				userId: 1,
				id: 1,
				title: 'title 1',
				body: 'body 1',
			},
		]);
	}),
];
