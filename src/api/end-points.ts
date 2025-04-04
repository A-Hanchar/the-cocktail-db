const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const BASE_URL = `${API_URL}${API_KEY}`;

export const urlPath = {
	search: '/search.php',
} as const;
