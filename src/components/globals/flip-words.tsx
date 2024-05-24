import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
    const words = ["Powerful", "Unique", "Reliable", "Robust",];

    return (
        <div className="mx-4 md:mx-0 flex items-center ">
            <div className="md:text-4xl  text-2xl font-normal text-neutral-600 dark:text-neutral-400">
                <p className='bg-gradient-to-r from-[#815BF5] via-[#FC8929] to-[#FC8929] bg-clip-text text-transparent font-bold mt-12 text-3xl md:text-5xl'> Features  <span>that are</span> <br />
                </p> always {' '}
                <FlipWords words={words} /> <br />
              
            </div>
        </div>
    );
}
