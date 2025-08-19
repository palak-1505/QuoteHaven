import React from 'react'
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";


function Footer() {
    return (
        <footer className="bg-gray-400 border-y">
            <div className='flex justify-between flex-row  max-w-full items-center  my-12  mx-24 '>
                <div className="flex justify-start items-start flex-col text-gray-900 font-medium w-1/3 ">
                        <div className='mb-2' >
                            <img
                                src={logo}
                                className="mr-4 h-14"
                                alt="Logo"
                            />
                        </div>

                        {/* <div>
                            Find quotes by mood — save, share, and carry them with you.
                        </div> */}
                        <div  className='text-lg font-medium text-justify'>QuoteHaven is your personal library of inspiration.
                            Browse by mood, save what speaks to you, and share
                            with friends in one click.
                        </div>

                        <div className="flex space-x-4 mt-2 md:mt-0">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">
                              <FaFacebookF size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">
                              <FaInstagram size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">
                               <FaTwitter size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">
                              <FaLinkedinIn size={20} />
                            </a>
                          </div>                  

                        
                 

                </div>

                <div className='flex justify-between flex-row  max-w-full items-center  my-12  mx-24'>
                    <div className='flex justify-start items-start flex-col text-gray-900 font-medium '>
                        <div className='mb-2 font-bold text-xl'>
                            <h1 >Quick Links</h1>
                        </div>
                        <div className='mb-2 text-lg'>
                            <ul>
                                <li>
                                    <NavLink to='/Home'>Home

                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/About'>About Us

                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/Moods'>Moods

                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/Garden'>Garden

                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr  className=''/>
            <div className='flex justify-center m-4'>
                <div className='text-gray-900 font-medium'>
                    © {new Date().getFullYear()}  QuoteHaven. All rights reserved.
                </div>
            </div>
            
        </footer>
        
    )
}

export default Footer
