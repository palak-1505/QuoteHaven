import React from 'react'
import { NavLink } from 'react-router-dom'


function QuoteCard({quote,author}) {
    return (
        <div 
        className="bg-white rounded-xl shadow-md p-6 m-4 min-h-[300px] flex flex-col justify-between card-hover " 
        >
            <p className="text-gray-800 text-lg italic ">{quote}</p>
            <p className="text-green-600 text-lg mb-6">- {author}</p>
            

        </div>
        
    )
}

export default QuoteCard
