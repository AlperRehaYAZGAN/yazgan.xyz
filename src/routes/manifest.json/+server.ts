import * as config from '$lib/config';

// for ssg support you need to add explicit export for every api route
export const prerender = true;

// e: RequestEvent
export async function GET() {
	const headers = { 'Content-Type': 'application/json' };

	const manifest = {
		name: config.title,
		short_name: config.title,
		description: config.description,
		start_url: '/',
		display: 'standalone',
		theme_color: '#000000',
		background_color: '#ffffff',
		icons: [
			{
				src: '/favicon.png',
				sizes: '48x48',
				type: 'image/png'
			}
		]
	};

	return new Response(JSON.stringify(manifest), { headers });
}
