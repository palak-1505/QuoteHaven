

import React from 'react';

function SearchBar() {

     
    return (
        <div className="flex justify-center items-center w-full max-w-xl mx-auto mt-8">
            <div className="relative w-full">
                <input
                    type="text"
                    placeholder="Search for quotes by keyword or author..."
                    className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-lg text-gray-700 placeholder-gray-500"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>


            
        </div>
    );
}

export default SearchBar;