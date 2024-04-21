import React from "react";
// import { Link, NavLink } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faLocationDot,
    faPhone,
    faEnvelope,
    faCaretDown,
    faUser,
    faCartShopping,
}
    from '@fortawesome/free-solid-svg-icons';
import GetCurrentLocation from "../components/GetCurrentLocation";


function Header() {
    return (
        <>
            <div className="w-full relative z-50">
                <div className="fixed top-0 left-0 right-0">
                    <div className="bg-white/95 backdrop-blur-lg font-medium text-black flex justify-between items-center relative text-xs py-2">
                        <div className="flex pl-20 items-center space-x-1">
                            <img
                                src="/assets/images/Logo.png"
                                alt="2Sport"
                                className="max-w-sm max-h-8 pr-3"
                            />
                            <FontAwesomeIcon icon={faLocationDot} />
                            {/* <p>Ho Chi Minh, Viet Nam</p> */}
                            <GetCurrentLocation/>
                        </div>
                        <div className="flex w-1/4 bg-white border-2 border-orange-500 rounded-full  p-2 mx-auto">
                            <input
                                className="flex-grow bg-transparent outline-none placeholder-gray-400"
                                placeholder="Enter your search keywords here"
                                type="text"
                            />
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="items-center text-orange-500 font-medium pr-3" />
                        </div>
                        <div className="flex pr-20 items-center space-x-4">
                            <p><FontAwesomeIcon icon={faPhone} className="pr-1" />+84 123-456-789</p>
                            <p><FontAwesomeIcon icon={faEnvelope} className="pr-1" />support@gmail.com</p>
                        </div>
                    </div>

                    <div className="bg-zinc-800/80 backdrop-blur-lg text-white  flex justify-between items-center text-base font-normal py-5 pr-20">
                        <div className="flex space-x-10 pl-20">
                            <Link to="/">
                                Browse Categories
                                <FontAwesomeIcon icon={faCaretDown} className="pl-2" />
                            </Link>
                            <Link to="/">
                                Product
                                <FontAwesomeIcon icon={faCaretDown} className="pl-2" />
                            </Link>
                            <Link to="/">Blog</Link>
                            <Link to="/">About</Link>
                            <Link to="/">Contact</Link>
                        </div>
                        <div className="flex space-x-4  ">
                            <Link to="/" className="border-r-2 pr-4"><FontAwesomeIcon icon={faUser} className="pr-1" /> Sign in</Link>
                            <Link to="/"><FontAwesomeIcon icon={faCartShopping} className="pr-1" /> Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Header;
