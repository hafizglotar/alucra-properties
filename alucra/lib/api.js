import { API_ENDPOINTS } from "./endpoints";
// General API request
export const fetchData = async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error('API request failed');

    const json = await res.json();
    if (json.status !== 'success') throw new Error(json.message || 'Unexpected API error');
    return json.data;
};
