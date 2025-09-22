"use client";

import { useState } from "react";

import { usePropertyListings } from "@/hooks/usePropertyListing";
import PropertyCard from "@/components/PropertyCard";

import Pagination from "@/components/Pagination";

const ListingsPage = () => {
    const [page, setPage] = useState(1);

    // State for input fields
    const [inputFilters, setInputFilters] = useState({
        category: "",
        start_price: "",
        end_price: "",
    });

    // State for active filters (used in API call)
    const [activeFilters, setActiveFilters] = useState({});

    const perPage = 6;

    // Fetch properties using active filters
    const { data, isLoading, isError } = usePropertyListings({
        page,
        per_page: perPage,
        ...activeFilters,
    });

    const properties = data?.properties || [];
    const pagination = data?.pagination || {};

    // Handle input changes (typing)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputFilters((prev) => ({ ...prev, [name]: value }));
    };

    // Apply filters on button click
    const handleFilterSubmit = (e) => {
        e.preventDefault();
        setActiveFilters(inputFilters);
        setPage(1); // reset to page 1 when filters applied
    };

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold">Properties</h1>

            {/* Filter Form */}
            <form onSubmit={handleFilterSubmit} className="flex flex-wrap gap-4 mb-6">
                <select
                    name="category"
                    value={inputFilters.category}
                    onChange={handleInputChange}
                    className="border px-3 py-2 rounded"
                >
                    <option value="">All Categories</option>
                    <option value="Studio">Studio</option>
                    <option value="1 Bedroom">1 Bedroom</option>
                    <option value="2 Bedroom">2 Bedroom</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Penthouse">Penthouse</option>
                </select>

                <input
                    type="number"
                    name="start_price"
                    value={inputFilters.start_price}
                    onChange={handleInputChange}
                    placeholder="Min Price"
                    className="border px-3 py-2 rounded"
                />

                <input
                    type="number"
                    name="end_price"
                    value={inputFilters.end_price}
                    onChange={handleInputChange}
                    placeholder="Max Price"
                    className="border px-3 py-2 rounded"
                />

                <button
                    type="submit"
                    className="bg-[#002a32] text-white px-6 py-2 rounded hover:bg-[#004b56] transition"
                >
                    Filter
                </button>
            </form>

            {/* Property cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((prop) => (
                    <PropertyCard key={prop.id} property={prop} />
                ))}
            </div>

            {/* Pagination */}
            <Pagination
                currentPage={pagination.currentPage || 1}
                lastPage={pagination.lastPage || 1}
                onPageChange={(newPage) => setPage(newPage)}
            />
        </div>
    );
};

export default ListingsPage;
