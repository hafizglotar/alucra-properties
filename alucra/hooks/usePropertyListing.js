import { useQuery } from '@tanstack/react-query';
import { fetchData } from '@/lib/api';
import { API_ENDPOINTS } from '@/lib/endpoints';
import qs from 'query-string';

export const usePropertyListings = ({
    page = 1,
    per_page = 6,
    for_type,
    category,
    start_price,
    end_price,
    beds,
    baths,
    keyword,
    } = {}) => {
    const rawParams = {
        page,
        per_page,
        for_type,
        category,
        start_price,
        end_price,
        beds,
        baths,
        keyword,
    };

    const queryParams = qs.stringify(rawParams, { skipNull: true, skipEmptyString: true });
    const url = `${API_ENDPOINTS.fetchPropertyListing}?${queryParams}`;

    return useQuery({
        queryKey: ['property_listing', rawParams],
        queryFn: async () => {
        const res = await fetch(url);
        if (!res.ok) throw new Error('API request failed');

        const json = await res.json();

        if (!json.success) {
            throw new Error(json.message || 'Unexpected API error');
        }

        // ✅ Return pagination + properties
        return {
            pagination: {
            currentPage: json.data.current_page,
            lastPage: json.data.last_page,
            perPage: json.data.per_page,
            total: json.data.total,
            nextPageUrl: json.data.next_page_url,
            prevPageUrl: json.data.prev_page_url,
            },
            properties: json.data.data, // array of properties
        };
        },
        keepPreviousData: true,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
};
