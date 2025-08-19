 import React from "react";
import { NavLink } from "react-router-dom";
function QuoteCategories() {
            const categories = [
                "Motivation", "Success", "Leadership", "Life", "Happiness", "Love", "Wisdom",
                "Philosophy", "Science", "Art", "Business"
            ];

            return (
                <div className="flex flex-col items-center justify-center mt-8 w-full ">
                    <div className="flex flex-wrap gap-2 ">
                        {/* <span className="text-gray-700 font-medium mr-2">Popular:</span> */}
                        {categories.map((category) => (
                            <button
                                key={category}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 transition duration-200"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-4 text-lg font-serif font-semibold mt-8">
                        <NavLink to='/Quotes'
                        className="px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition duration-200">
                            Explore Quotes
                        </NavLink>

                        <NavLink to="/About"
                        className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition duration-200">
                            Learn More
                        </NavLink>
                    </div>

                    {/* <div className=" border-orange-500 border-t-2 w-3/4 mx-auto mt-16"></div> */}
                </div>
            );
        }

        export default QuoteCategories;