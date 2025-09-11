import React from 'react'
import { useState,useEffect } from 'react';
import QuoteCard from '../Home/QuoteCard';

function Quotes() {

   
    
    const [quotes,setQuotes] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState(null);


    async function GetQuotes() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/quotes");
      console.log('Response Status:', response.status); // Log status
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Response Data:', data); // Log the full response
      setQuotes(prev => [...prev,...data]); // Fallback to data if results is undefined
    } catch (error) {
      console.error('Fetch Error:', error.message);
       setError(error.message);
    } finally {
      setIsLoading(false);
    }
    }

        useEffect(() =>{
           GetQuotes();
        },[setQuotes]);

    return (


      <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
        
      <h1 className="text-3xl font-bold  font-serif text-center mb-4 text-gray-700 lg:text-5xl">QuotesHaven</h1>
      <p className='text-center text-gray-700 font-serif  text-md mb-8 lg:text-xl'>Explore timeless thoughts, trending vibes, and soulful words — all in one place.</p>


      {isLoading && <p className="text-center text-gray-500 text-lg">Loading quotes...</p>}
      {error && <p className="text-center text-red-500 text-lg">Error: {error}</p>}
      {quotes.length === 0 && !isLoading && !error && (
        <p className="text-center text-gray-500 text-lg">No quotes available.</p>
      )}
      {quotes.length > 0  && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {quotes.map((quote, index) => (
            <QuoteCard key={index} quote={quote.q} author={quote.a} />
          ))}
        </div>
      )}

      <div className="mt-8 flex justify-center space-x-4">
        
        <button
          onClick={() => GetQuotes(true)}
          className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition disabled:bg-gray-400"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Get More Quotes'}
        </button>
      </div>
    </div>
        
        
    )
}

export default Quotes
