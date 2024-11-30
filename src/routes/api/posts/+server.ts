import { GetPosts } from '$lib/utils/get-posts';
import type { RequestHandler } from './$types';

// e: RequestEvent
export const GET: RequestHandler = async () => {
	const allPosts = await GetPosts();

	return new Response(JSON.stringify(allPosts), {
		headers: { 'content-type': 'application/json' }
	});
};
