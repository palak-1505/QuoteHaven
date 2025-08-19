import React from 'react'
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";


function Footer() {
    return (
       <footer className="bg-gray-400 border-y">
          <div className="flex flex-col md:flex-row justify-between items-start max-w-full mx-auto px-4 sm:px-6 lg:px-24 my-8 sm:my-10 lg:my-12">
            <div className="flex justify-start items-start flex-col text-gray-900 font-medium w-full md:w-1/3 mb-8 md:mb-0">
              <div className="mb-2">
                <img
                  src={logo}
                  className="mr-4 h-10 sm:h-12 lg:h-14"
                  alt="Logo"
                />
              </div>
              <div className="text-base sm:text-lg font-medium text-justify">
                QuoteHaven is your personal library of inspiration.
                Browse by mood, save what speaks to you, and share
                with friends in one click.
              </div>
              <div className="flex space-x-4 mt-4 sm:mt-4 md:mt-4">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">
                  <i className="fab fa-facebook-f text-base sm:text-lg lg:text-xl"></i>
                  <FaFacebookF size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">
                  <i className="fab fa-instagram text-base sm:text-lg lg:text-xl"></i>
                  <FaInstagram size={20}/>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">
                  <i className="fab fa-twitter text-base sm:text-lg lg:text-xl"></i>
                  <FaTwitter size={20}/>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">
                  <i className="fab fa-linkedin-in text-base sm:text-lg lg:text-xl"></i>
                  <FaLinkedinIn size={20}/>
                </a>
              </div>
            </div>

            <div className="flex justify-start items-start flex-col text-gray-900 font-medium w-full md:w-auto">
              <div className="mb-2 font-bold text-lg sm:text-xl">
                <h1>Quick Links</h1>
              </div>
              <div className="mb-2 text-base sm:text-lg">
                <ul className="space-y-2">
                  <li>
                    <NavLink to="/Home" className="hover:text-orange-500">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/About" className="hover:text-orange-500">
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Moods" className="hover:text-orange-500">
                      Moods
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Garden" className="hover:text-orange-500">
                      Garden
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="border-gray-500" />
          <div className="flex justify-center m-4">
            <div className="text-gray-900 font-medium text-sm sm:text-base">
              © {new Date().getFullYear()} QuoteHaven. All rights reserved.
            </div>
          </div>
        </footer>
        
    )
}

export default Footer
