import React from 'react'
import { motion } from "framer-motion";
import SearchBar from './SearchBar';
import QuoteOfTheDay from './QuoteOfTheDay';
import QuoteCategories from './QuoteCategories';
import TrendyQuotes from './TrendyQuotes';




function Home() {
    return (
        
    <section className='bg-gray-100 h-full  text-gray-700'>
        <div className="flex justify-center items-center flex-col min-h-screen bg-gray-50 ">
            <div className="w-full  bg-gray-100 rounded-lg shadow-sm p-4 sm:p-6 md:p-8">
            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-8 sm:mt-10 md:mt-12 mb-4 text-center">
              <h1 className="font-serif">Find Words That Feel Like You</h1>
            </div>
            <div className="text-center text-base sm:text-lg md:text-xl font-medium">
              <p>Quotes for every mood—Motivated. Calm. Curious. Romantic.</p>
            </div>
            <div className="flex justify-center mt-6 sm:mt-8">
              <div className="text-base sm:text-lg md:text-xl text-center max-w-3xl">
                <p className="text-orange-500">
                  Every feeling has a story, and every story deserves the right words.
                  At QuoteHaven, we help you capture your emotions—whether you are
                  chasing motivation, seeking calm, exploring curiosity, or
                  embracing romance. Save what touches your heart and share
                  it with the people who matter.
                </p>
              </div>
            </div>
                <SearchBar/>
                <QuoteCategories/>
                <QuoteOfTheDay/>
                <TrendyQuotes/>
            </div>
        </div>
                
                

                
            
    </section> 
        
    );
}

export default Home;
