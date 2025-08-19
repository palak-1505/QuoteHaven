import React from 'react'
import QuoteCard from './QuoteCard'
import { NavLink } from 'react-router-dom'


function TrendyQuotes() {

    const quotes = [
        {quote:"“Keep your face always toward the sunshine—and shadows will fall behind you.”" , author:"Walt Whitman"},
        {quote:"“Reality is merely an illusion, albeit a very persistent one.”", author:" Albert Einstein"},
        {quote:"“To succeed in your mission, you must have single-minded devotion to your goal.”" , author:"A. P. J. Abdul Kalam"}
    ]

    return (
        <div className="flex flex-col  max-w-4xl mx-auto px-4 mt-32">
            <div className='text-3xl font-serif font-bold text-gray-800 text-center mb-8'>
                <h1>--- Trendy Quotes ---</h1>
            </div>
            <div className='text-xl text-orange-500 text-center '>
                <p>
                    Join the trend, feel the vibe—discover the quotes that are setting hearts and timelines on fire today.
                    Stay connected with the freshest quotes shaping today’s conversations
                </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-stretch  bg-gray-100 p-4">
                {quotes.map((item, index) => (
            <div key={index} className="flex-1 max-w-xs">
              <QuoteCard quote={item.quote} author={item.author} />
            </div>
          ))}

            </div>

            <div className="flex  justify-center gap-4 text-lg font-serif font-semibold my-8">
                <NavLink to='/Quotes'
                    className="px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition duration-200">
                    Explore Quotes
                </NavLink>        
            </div>
        </div>
        
    )
};

export default TrendyQuotes
