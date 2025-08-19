import React from 'react'
import { Link,NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Header() {
    return (
        <header className='sticky w-full top-0 shadow z-50'>
            <nav className='bg-gray-100 border-gray-200 px-4 lg:px-6 py-2.5'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                    <div className="flex justify-center items-center flex-col text-gray-900 font-medium">
                        <div >
                            <img
                            src={logo}
                            className="mr-4 h-14"
                            alt="Logo"
                        />
                        </div>
                        <div>
                            Find quotes by mood — save, share, and carry them with you.
                        </div>
                    </div>
                    

                    <div 

                        className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 text-xl font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500" : "text-gray-900"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/Quotes"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500" : "text-gray-900"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                > Quotes
                                
                                </NavLink>
                            </li>
                            

                            <li>
                                <NavLink
                                to="/Garden"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500" : "text-gray-900"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Garden
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/Moods"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500" : "text-gray-900"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                > Moods
                                
                                </NavLink>
                            </li>
                        
                            <li>
                                <NavLink
                                to="/About"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500" : "text-gray-900"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                > About
                                
                                </NavLink>
                            </li>
                            
                        </ul>

                    </div>



                    
                </div>
            </nav>
        </header>
        
    )
}

export default Header
