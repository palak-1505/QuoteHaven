import React from 'react'
import { useState,useEffect } from 'react';
import QuoteCard from '../Home/QuoteCard';

function Quotes() {
  const QuoteArray  = [
    {quote:"“Always bear in mind that your own resolution to success is more important than any other one thing.”" , author:"Abraham Lincoln"},
    {quote:" “Success is not final; failure is not fatal: It is the courage to continue that counts.”",author:"Winston S. Churchill"},
    {quote:"“Some people dream of success, while others wake up and work hard at it.”",author:"Napoleon Hill"},
    {quote:"“Happiness is not something ready-made. It comes from your own actions.”",author:"Dalai Lama"},
    {quote:"“Happiness is nothing more than good health and a bad memory.”",author:"Albert Schweitzer"},
    {quote:"“Where there is love, there is life.”",author:"Mahatma Gandhi"},
    {quote:"“Be the change that you wish to see in the world.”",author:"Mahatma Gandhi"},
    {quote:"“Man is the only creature who refuses to be what he is.”",author:"Albert Camus"}
    
  ]

   
    
    const [quotes,setQuotes] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState(null);


    async function GetQuotes() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/quotes");

      // console.log('Response Status:', response.status); // Log status

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // console.log('Response Data:', data); // Log the full response
      setQuotes(prev => [...prev,...data]); // Fallback to data if results is undefined
    } catch (error) {
      // console.error('Fetch Error:', error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
    }

        useEffect(() =>{
           GetQuotes();
        },[setQuotes]);

    return (


      <div className=" mx-auto p-6 bg-gray-50 min-h-screen">
        
      <h1 className="text-3xl font-bold  font-serif text-center mb-4 text-gray-700 lg:text-5xl">QuotesHaven</h1>
      <p className='text-center text-gray-700 font-serif  text-md mb-8 lg:text-xl'>Explore timeless thoughts, trending vibes, and soulful words — all in one place.</p>

      {QuoteArray.length > 0  && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {QuoteArray.map((quote, index) => (
            <QuoteCard key={index} quote={quote.quote} author={quote.author} />
          ))}
        </div>
      )}


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
