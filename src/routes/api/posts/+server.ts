import type { Post } from '$lib/types';
import type { RequestEvent, RequestHandler } from './$types';

async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/posts/*.md', {
		eager: true
	});

	for (const path in paths) {
		if (!path || path?.length < 1) continue;
		const file = paths[path];

		const slug = path.split('/').pop()?.replace('.md', '');
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			if (post?.published) {
				posts.push(post);
			}
		}
	}

	posts = posts.sort((a, b) => {
		const aDate = new Date(a.date);
		const bDate = new Date(b.date);
		return bDate.getTime() - aDate.getTime();
	});

	return posts;
}

export const GET: RequestHandler = async (e: RequestEvent) => {
	const allPosts = await getPosts();

	return new Response(JSON.stringify(allPosts), {
		headers: { 'content-type': 'application/json' }
	});
};
