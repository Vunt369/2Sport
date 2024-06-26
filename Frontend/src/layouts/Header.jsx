import React, { useState } from "react";
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
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Switch } from '@headlessui/react'
import SignInModal from "../components/SignInModal";
import { motion, useScroll } from "framer-motion";

function Header() {
    const { scrollYProgress } = useScroll();
    const { t } = useTranslation("translation");
    const [enabled, setEnabled] = useState(false);

    const changeLanguage = () => {
        const languageValue = enabled ? 'eng' : 'vie'; // Toggle between 'eng' and 'vie'
        i18n.changeLanguage(languageValue);
    }
    return (
        <>
            <div className="w-full relative z-50">
                <div className="fixed top-0 left-0 right-0">
                    <div className="bg-white/95 backdrop-blur-lg font-medium text-black flex justify-between items-center relative text-xs py-2">
                        <div className="flex pl-20 items-center space-x-2">
                            <img
                                src="/assets/images/Logo.png"
                                alt="2Sport"
                                className="max-w-sm max-h-8 pr-3"
                            />
                            <FontAwesomeIcon icon={faLocationDot} />
                            {/* <p>Ho Chi Minh, Viet Nam</p> */}
                            <GetCurrentLocation />
                            <Switch
                                checked={enabled}
                                onChange={() => {
                                    setEnabled(!enabled);
                                    changeLanguage();
                                }}
                                className={`${enabled ? 'bg-orange-200' : 'bg-orange-500'
                                    }  relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                            >
                                <span
                                    aria-hidden="true"
                                    className={`${enabled ? 'translate-x-0' : 'translate-x-5'
                                        } pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>
                            <span className="text-orange-500">{enabled ? 'VI' : 'EN'}</span>
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
                            {/* <select onChange={changeLanguage} className="text-orange-500">
                                <option value="eng">English</option>
                                <option value="vie">Vietnamese</option>
                            </select> */}
                        </div>
                    </div>

                    <div className="bg-zinc-800/80 backdrop-blur-lg text-white  flex justify-between items-center text-base font-normal py-5 pr-20">
                        <div className="flex space-x-10 pl-20 ">
                            <Link to="/" >
                                {t("hcat")}
                                <FontAwesomeIcon icon={faCaretDown} className="pl-2" />
                            </Link>
                            <Link to="/">
                                {t("hproduct")}
                                <FontAwesomeIcon icon={faCaretDown} className="pl-2" />
                            </Link>
                            <Link to="/">{t("hblog")}</Link>
                            <Link to="/">{t("habout")}</Link>
                            <Link to="/">{t("hcontact")}</Link>
                        </div>
                        <div className="flex space-x-4  ">
                            <SignInModal />
                            <Link to="/"><FontAwesomeIcon icon={faCartShopping} className="pr-1" /> {t("cartbtn")}</Link>
                        </div>
                    </div>
                    <motion.div
                        className="progress-bar"
                        style={{ scaleX: scrollYProgress }}
                    />
                </div>
            </div>
        </>
    )

}

export default Header;
