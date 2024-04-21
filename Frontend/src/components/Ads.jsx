import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function Ads() {
    const controls = useAnimation();

    useEffect(() => {
        const scrollHandler = () => {
            // Get the current scroll position
            const scrollY = window.scrollY || window.pageYOffset;

            // Set animation based on scroll position
            controls.start({
                opacity: scrollY > 100 ? 1 : 0,
                y: scrollY > 100 ? 0 : 50, // Adjust the value based on your desired animation
                transition: {
                    opacity: { duration: 0.5 },
                    y: { duration: 0.5 }
                }
            });
        };

        // Add scroll event listener
        window.addEventListener("scroll", scrollHandler);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [controls]);

    return (
        <div className="flex py-5 space-x-10 justify-between items-center">
            {/* title */}
            <motion.div
                animate={controls}
                initial={{ y: "2rem", opacity: 0 }}
                className="flex-col flex pl-20"
            >
                <img src="/assets/images/ads/badmintion.png" />
            </motion.div>
            {/* photo */}
            <motion.div
                animate={controls}
                initial={{ y: "7rem", opacity: 0 }}
                className="flex-col flex pr-20"
            >
                <img src="/assets/images/ads/image.png" />
            </motion.div>
        </div>
    );
}

export default Ads;
