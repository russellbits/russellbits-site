// src/routes/+layout.js
export const prerender = true;

// @ts-ignore
export const load = ({ url }) => {
	const currentRoute = url.pathname;

	return {
		currentRoute
	};
};
