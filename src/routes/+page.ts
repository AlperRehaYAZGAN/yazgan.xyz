import type { Post } from '$lib/types';
import type { PageLoad } from './$types';

// src/routes/+page.ts

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/posts');
	const posts: Post[] = await response.json();

	return {
		posts
	};
};
