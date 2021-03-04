import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


import content from '../content';

export default function Skill() {
    return (
        <div id="skill"
            className="min-h-screen flex items-center justify-center flex-col bg-gray-300"
          
        >
            <h1 className="text-3xl font-dosis font-bold mb-2 pt-16">Skill</h1>
            <div>
                <h1 className="text-center font-sans font-semibold mb-5 text-xl">Programming Language</h1>
                <div className="flex flex-wrap justify-center">
                    {content.stack.tech.map((tech, index) => (
                    <div>
                        <span
                            key={index}
                            className={`h-30 w-30 bg-white shadow-xl  ml-2  rounded-full flex justify-center items-center p-5 m-2 ${index % 2 !== 0 ? 'animate-bounce' : 'animate-bounceFirst'
                                }`}
                        >
                            <LazyLoadImage className="object-contain h-20 w-20" effect="blur" src={tech.img} alt={tech.alt} />
                        </span>
                        <h1 className="text-center font-semibold">{tech.alt}</h1>
                    </div>
                    ))}
                </div>
                <h1 className="text-center font-semibold mb-5 mt-5 font-sans text-xl">Library & Framework</h1>
                <div className="flex flex-wrap justify-center">
                    {content.stack2.tech.map((tech, index) => (
                    <div>
                        <span
                            key={index}
                            className={` h-30 w-30 bg-white shadow-xl  ml-2  rounded-full flex justify-center items-center p-5 m-2 ${index % 2 !== 0 ? 'animate-bounce' : 'animate-bounceFirst'
                                }`}
                        >
                            <LazyLoadImage className="object-contain h-20 w-20"  effect="blur" src={tech.img} alt={tech.alt} />
                        </span>
                         <h1 className="text-center font-semibold">{tech.alt}</h1>
                    </div>
                    ))}
                </div>
                <h1 className="text-center font-semibold mb-5 mt-5 font-sans text-xl">CSS Framework & UI KIT</h1>
                <div className="flex flex-wrap justify-center">
                    {content.stack3.tech.map((tech, index) => (
                    <div>
                        <span
                            key={index}
                            className={` h-30 w-30 bg-white shadow-xl  ml-2  rounded-full flex justify-center items-center p-5 m-2 ${index % 2 !== 0 ? 'animate-bounce' : 'animate-bounceFirst'
                                }`}
                        >
                            <LazyLoadImage className="object-contain h-20 w-20"  effect="blur" src={tech.img} alt={tech.alt} />
                        </span>
                        <h1 className="text-center font-semibold">{tech.alt}</h1>
                    </div>
                    ))}
                </div>
                <h1 className="text-center font-semibold mb-5 mt-5 font-sans text-xl">DBMS</h1>
                <div className="flex flex-wrap justify-center pb-3">
                    {content.stack4.tech.map((tech, index) => (
                    <div>
                        <span
                            key={index}
                            className={` h-30 w-30 bg-white shadow-xl  ml-2  rounded-full flex justify-center items-center p-5 m-2 ${index % 2 !== 0 ? 'animate-bounce' : 'animate-bounceFirst'
                                }`}
                        >
                            <LazyLoadImage className="object-contain h-20 w-20"  effect="blur" src={tech.img} alt={tech.alt} />
                        </span>
                        <h1 className="text-center font-semibold">{tech.alt}</h1>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
