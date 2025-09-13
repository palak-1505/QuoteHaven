import React, { useState, useEffect } from 'react';

function Garden() {
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    const quotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
    setSavedQuotes(quotes);
  }, []);

  const handleRemove = (index) => {
    const updatedQuotes = savedQuotes.filter((_, i) => i !== index);
    setSavedQuotes(updatedQuotes);
    localStorage.setItem('savedQuotes', JSON.stringify(updatedQuotes));
  };

  window.scrollTo({top : 0 , behavior : "smooth"})

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-serif font-bold text-white mb-6">Your Quote Garden</h1>
      {savedQuotes.length === 0 ? (
        <p className="text-white text-xl">No quotes saved yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {savedQuotes.map((quoteObj, index) => {
            const { quote, author } = quoteObj; // Assuming saved as {quote: text, author}
            const shareUrl = window.location.href;
            const encodedQuote = encodeURIComponent(`${quote} — ${author}`);
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 m-4 min-h-[250px] flex flex-col justify-between card-hover"
              >
                <blockquote className="text-xl italic text-gray-800">{quote}</blockquote>
                <p className="text-lg text-right text-green-600 mt-2">— {author}</p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => handleRemove(index)}
                    className="px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-semibold button-hover transition duration-300 hover:bg-orange-700"
                  >
                    Remove
                  </button>
                  <div className="flex space-x-3">
                    <a
                      href={`https://x.com/share?url=${encodeURIComponent(shareUrl)}&text=${encodedQuote}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 button-hover"
                      title="Share on X"
                      aria-label="Share on X"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodedQuote}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-800 button-hover"
                      title="Share on Facebook"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                      </svg>
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodedQuote}&summary=${encodedQuote}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-900 button-hover"
                      title="Share on LinkedIn"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.351V9.003h3.414v1.561h.048c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.283zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.924 2.065-2.064 2.065zm1.782 13.019H3.555V9.003h3.564v11.449zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Garden;