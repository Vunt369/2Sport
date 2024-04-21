import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Banner() {
    const { t, i18n } = useTranslation("translation");
    const language = i18n.language;
    return (
        <>
            <div className="bg-banner bg-cover bg-center h-full">
                <div className="bg-sky-100 bg-opacity-65 h-full">
                    <div className="flex py-24 justify-between items-center">
                        {/* title */}
                        <motion.div
                            initial={{ x: "7rem", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                type: "ease-in",
                            }}
                            className="flex-col flex pl-20"
                        >
                            <p className={language === 'eng' ? 'font-rubikmonoone text-7xl' : 'font-alfa text-7xl'} >{t("tit1")} <br /> {t("tit2")}</p> 
                            <p className="pt-10 pb-10 font-poppins text-xl text-wrap">Welcome to Your Ultimate Destination for <br /> Gently Used Sporting Excellence –
                                Where the Game Never Ends,<br /> and the Savings Are Endless!</p>
                            <button className="bg-orange-500 font-poppins font-semibold text-white text-xl py-3 px-10 w-fit">SHOP NOW</button>
                        </motion.div>
                        {/* photo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 2,
                                ease: [0, 0.71, 0.2, 1.01],
                                scale: {
                                    type: "spring",
                                    damping: 5,
                                    stiffness: 100,
                                    restDelta: 0.001
                                }
                            }}
                            className="flex justify-end w-2/5 pb-5 pr-20"
                        >
                            <img src="/assets/images/image.png"
                                className=""
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Banner;
