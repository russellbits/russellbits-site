import { json } from '@sveltejs/kit';
import { comments } from '$lib/comments.js';

export function GET() {
	return json(comments);
}

// Function without @sveltekit json helper:
// export function GET() {
// 	return new Response(JSON.stringify(comments), {
// 		headers: { 'Content-Type': 'application/json' }
// 	});
// }
