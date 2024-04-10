import React from "react";

function LandingPage() {

    return (
        <>
            <div className="bg-banner bg-cover bg-center h-full">
                <div className="bg-sky-100 bg-opacity-65 h-full">
                    <div className="flex pb-16 pt-14 space-x-60 justify-between ">
                        <div className="pl-20">
                            <p className="text-6xl" >PLAY MORE, <br /> PAY LESS </p>
                            <p>Welcome to Your Ultimate Destination for Gently Used Sporting Excellence –
                                Where the Game Never Ends, and the Savings Are Endless!</p>
                        </div>
                        <div className="flex w-11/12 items-center pb-5" >
                        <img src="/assets/images/image.png"
                             className="w-10/12"
                        />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p>BRANDS</p>
            </div>
        </>
    );
}

export default LandingPage;
