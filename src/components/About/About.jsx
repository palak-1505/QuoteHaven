import React from 'react'
import { NavLink } from 'react-router-dom';




function About() {
    return (
         <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-gray-100">
          <div className="text-left w-full max-w-4xl mx-auto flex flex-col justify-center items-start">
            <div className="flex flex-col justify-center items-start text-left mb-8 sm:mb-10 lg:mb-12">
              <div className="mb-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-gray-800">About Us</h1>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg lg:text-lg">
                  QuoteHaven is your cozy corner on the internet for words that match your mood.
                  Whether you are feeling motivated, calm, curious, or romantic, we bring you
                  thoughtfully curated quotes that speak to your heart. Save your favorites,
                  share them with the world, or just keep them close for those quiet moments.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-start mb-8 sm:mb-10 lg:mb-12">
              <div className="mb-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 font-serif">Our Mission</h1>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg lg:text-lg">
                  At QuoteHaven, we believe that a single line can inspire, heal, or spark a new perspective
                  — and we are here to make sure you find the right words, at the right time.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-start mb-8 sm:mb-10 lg:mb-12">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4 sm:mb-6 font-serif">What We Offer</h1>
              <div className="space-y-4">
                <div>
                  <h1 className="text-lg sm:text-xl lg:text-xl font-semibold text-gray-800">
                    • Mood-Based Quotes –{" "}
                    <span className="text-gray-600 font-normal text-base sm:text-lg lg:text-lg">
                      Discover quotes tailored to your emotions — whether you are motivated, calm, curious, or romantic.
                    </span>
                  </h1>
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl lg:text-xl font-semibold text-gray-800">
                    • Save Your Favorites –{" "}
                    <span className="text-gray-600 font-normal text-base sm:text-lg lg:text-lg">
                      Keep a personal collection of quotes that inspire you.
                    </span>
                  </h1>
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl lg:text-xl font-semibold text-gray-800">
                    • Share with Ease –{" "}
                    <span className="text-gray-600 font-normal text-base sm:text-lg lg:text-lg">
                      Instantly share quotes on your social media or with friends.
                    </span>
                  </h1>
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl lg:text-xl font-semibold text-gray-800">
                    • Daily Inspiration –{" "}
                    <span className="text-gray-600 font-normal text-base sm:text-lg lg:text-lg">
                      Fresh words every day to uplift, soothe, or spark your curiosity.
                    </span>
                  </h1>
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl lg:text-xl font-semibold text-gray-700">
                    • A Cozy Digital Haven –{" "}
                    <span className="text-gray-600 font-normal text-base sm:text-lg lg:text-lg">
                      A clean, aesthetic space that feels personal and uplifting.
                    </span>
                  </h1>
                </div>

                <div className="flex justify-center w-full">
                  <div className="mt-6 sm:mt-8">
                    <NavLink
                      to="/quotes"
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-orange-500 text-white text-base sm:text-lg font-bold font-serif rounded-full hover:bg-orange-700 transition duration-300"
                    >
                      Explore Quotes..
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}


export default About;
