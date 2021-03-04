import React,{useState} from 'react'
import Link from "next/link";
import { Link as ScrollLink } from 'react-scroll';


export default function Navbar() {
    const [hidden,sethidden] = useState(false)
    const [pos,setpos] = useState(false)
    return (
        <div className="font-dosis fixed top-0 w-screen z-40" style={{background: '#091c29',}}>
            <div className="flex justify-between w-10/12 mx-auto py-3">
                <div className="flex lg:flex-row justify-between w-full flex-col">
                    <h1 className="text-3xl font-bold text-white">
                        APS
                        <span className="w-3 h-3 bg-red-500 inline-block rounded-full mx-1"> </span>
                    </h1>
                    <div className={`${hidden ? 'block' : 'hidden'} items-center lg:flex flex-col lg:flex-row justify-between`} >
                    <ScrollLink to="education" smooth={true}>
                        <button className="text-sm mr-4 block text-white font-serif outline-none focus:outline-none"> Education</button>
                    </ScrollLink>
                    <ScrollLink to="work" smooth={true}>
                        <button className="text-sm mr-4 block text-white outline-none focus:outline-none"> Work</button>
                    </ScrollLink>

                    <ScrollLink to="project" smooth={true}>
                        <button className="text-sm mr-4 block text-white outline-none focus:outline-none"> Project</button>
                    </ScrollLink>

                    <ScrollLink to="skill" smooth={true}>
                        <button className="text-sm mr-4 block text-white outline-none focus:outline-none"> Skills</button>
                    </ScrollLink>

                    <ScrollLink to="achiev" smooth={true}>
                        <button className="text-sm mr-4 block text-white outline-none focus:outline-none"> Achievement</button>
                    </ScrollLink>
                    </div>
                </div>

                <div className="lg:hidden pt-2">
                    <button onClick={()=>sethidden(!hidden)} className="focus:outline-none text-white block lg:hidden">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" stroke="currentColor">
                                 <path className={!hidden ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                 <path className={hidden ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
            </div>
        </div>
    )
    
}
