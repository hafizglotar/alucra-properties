import React, { useState, useEffect } from 'react';
import PrevArrow from './Icons/PrevArrow';
import NextArrow from './Icons/NextArrow';

const Pagination = ({ currentPage, lastPage, onPageChange }) => {
    const [inputPage, setInputPage] = useState(currentPage || 1);
    useEffect(() => {
        setInputPage(currentPage || 1);
    }, [currentPage]);

    // const handleInputChange = (e) => {
    //     setInputPage(e.target.value);
    // };

    const handleInputSubmit = (e) => {
        e.preventDefault();
        const pageNum = Number(inputPage);
        if (pageNum >= 1 && pageNum <= lastPage) {
            onPageChange(pageNum);
        }
    };

    return (
        <div className="flex justify-between items-center gap-4 mt-8 text-[#808083]">
            <button
                className="w-12 h-12 flex justify-center items-center text-[#002A32] bg-[#ECEDF1] border border-[#ECEDF1] rounded-full disabled:opacity-50 cursor-pointer hover:text-[#ECEDF1] hover:bg-[#002A32] hover:border-[#002A32]"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                <PrevArrow width={18} height={18} />
            </button>

            <form onSubmit={handleInputSubmit}>
                <div className="flex justify-center items-center gap-2 text-[#808083]">
                    <span>Page</span>
                    {/* <span className='w-20 text-center border border-[#dadada] rounded-full appearance-none px-2 py-2'>{inputPage}</span> */}
                      <select
                            className="text-center border border-[#dadada] rounded-full appearance-none px-8 py-2"
                            value={inputPage}
                            onChange={(e) => {
                            const selectedPage = Number(e.target.value);
                            setInputPage(selectedPage);
                            onPageChange(selectedPage);
                            }}
                        >
                            {Array.from({ length: lastPage }, (_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                            ))}
                        </select>
                    <span className="ml-2">of {lastPage}</span>
                </div>
            </form>

            <button
                className="w-12 h-12 flex justify-center items-center text-[#002A32] bg-[#ECEDF1] border border-[#ECEDF1] rounded-full disabled:opacity-50 cursor-pointer hover:text-[#ECEDF1] hover:bg-[#002A32] hover:border-[#002A32]"
                disabled={currentPage === lastPage}
                onClick={() => onPageChange(currentPage + 1)}
            >
                <NextArrow width={18} height={18} />
            </button>
        </div>
    );
};

export default Pagination;
