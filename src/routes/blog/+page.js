// src/routes/blog/+page.js
// @ts-ignore
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/posts`);
	const posts = await response.json();

	console.log(posts);

	return {
		posts
	};
};

/**/
