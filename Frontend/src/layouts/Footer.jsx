import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="bg-zinc-700 h-full">
            <div className="bg-footer bg-cover bg-center flex justify-center items-center">
                <h1 className="text-3xl py-20 text-white font-rubikmonoone">
                    Follow us on
                    <Link to="/" className="underline underline-offset-2 pl-8">Facebook</Link>
                </h1>
            </div>

            <div className="flex justify-between items-center py-10 space-x-5">
                {/* left side */}
                <div className="pl-20 space-y-5 w-1/2 text-white font-poppins">
                    <img
                        src="/assets/images/Logo.png"
                        alt="2Sport"
                        className="max-w-sm max-h-12"
                    />
                    <p>
                        All content on this website is protected by copyright and may not be used
                        without permission from 2Sport. For more information about our Privacy Policy,
                        please contact our Support Center.
                    </p>
                    <p>Copyright © 2024 2Sport. All Rights Reserved.</p>
                    <div>
                        <p className="font-rubikmonoone ">Get Our Updates</p>
                        <div className="flex w-2/3 bg-white ">
                            <input
                                className="flex-grow bg-transparent outline-none placeholder-gray-400 font-poppins pl-5"
                                placeholder="Enter your email address ..."
                                type="text"
                            />
                            <button className="bg-orange-500 px-8 py-4">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className="flex justify-end w-1/2 pb-5 pr-20">
                    <p>text</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;