import React from 'react'
import img1 from '../../assets/img1Home.jpg';

function QuoteOfTheDay() {
      const quote = "Work with heart, love with depth, and measure your worth by the lives you touch.";
      const description = "The work we pour our hearts into becomes our gift to the world, the love we nurture becomes our anchor through storms and the importance we hold lies not in what we achieve, but in how deeply we touch the lives around us.";
      const shareUrl = window.location.href;

      return (
        <div className="flex flex-col mt-24 my-12 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-3xl text-gray-800 font-serif font-bold mb-8 text-center">
            <h1>---- Quote of the Day ---</h1>
          </div>
          <div className="text-xl text-orange-500 text-center mb-8">
            <p>Every day carries a different rhythm of emotions — here’s today’s 
              thought to match your mood, whether it’s to lift your spirit, soothe your soul,
              or simply make you smile.
            </p>
          </div>

          <div className="relative flex flex-col border-solid rounded-3xl bg-gray-200 shadow-lg h-[500px] w-full max-w-[896px] mx-auto quote-container">
            <div className="h-1/2 flex-shrink-0">
              <img
                src={img1}
                className="rounded-t-3xl h-full object-cover w-full"
                alt="Inspirational scene"
              />
            </div>

            <div className="h-1/2 p-8 flex flex-col justify-center">
              <b className="text-lg sm:text-xl text-gray-800 mb-4 font-semibold line-clamp-2">{quote}</b>
              <p className="text-sm sm:text-base text-gray-600 line-clamp-3">{description}</p>
            </div>

            <div className="absolute bottom-4 right-4 flex space-x-3">
              <a
                href={`https://x.com/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(quote)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 social-icon"
                title="Share on X"
                aria-label="Share on X"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(quote)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 social-icon"
                title="Share on Facebook"
                aria-label="Share on Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent("Quote of the Day")}&summary=${encodeURIComponent(quote)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-800 social-icon"
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
    }
export default QuoteOfTheDay;


