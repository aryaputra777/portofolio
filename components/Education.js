import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';
import { Link as ScrollLink } from 'react-scroll';
import useWindowPosition from '../hook/useWindowPosition'
import Link from "next/link";
import Image from 'next/image'

export default function Education() {
  return (
    <div id="education" className="max-h-screen flex justify-center items-center flex-col bg-white">   
        <h1 className="text-5xl font-dosis font-bold pt-16">Education</h1> 
        <div className="container mx-auto pb-5 mt-4">
            <div className="justify-center flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="flex flex-wrap space-y-3">
                  <div className="w-full lg:w-12/12 px-4 bg-white shadow-md rounded-md">
                    <h5 className="text-xl font-semibold font-serif pb-4 text-center uppercase">
                    BACHELOR DEGREE INFORMATION TECHNOLOGY
                    </h5>
                    <div className="flex flex-row justify-center">
                    <div className="text-gray-600 p-3 text-center items-center justify-center w-auto h-auto mb-5 shadow-lg rounded-full bg-white">
                        <Image
                            alt="..."
                            className="align-middle border-none max-w-full h-auto rounded-lg hover:-mt-4 "
                            src="/logounikom.png"
                            width={50}
                            height={50}
                          />
                      </div>
                      <div className="bg-white flex flex-col justify-start items-center px-5">
                        <h1 className="font-serif text-sm font-semibold">UNIVERSITAS KOMPUTER INDONESIA</h1>
                        <h1 className="font-sans text-gray-400 font-semibold">2013-2017</h1>
                        <h1 className="max-w-md font-sans text-sm">I am finish Bachelor DEGREE With GPA 3.14 Scale of 4.00.</h1>
                      </div>
                    </div>
                  </div>

                  {/* <div className="w-full lg:w-12/12 px-4  bg-white shadow-md rounded-md">
                    <h5 className="text-xl font-semibold pb-4 text-center uppercase">
                    senior high school 
                    </h5>
                    <div className="flex flex-row justify-center">
                      <div className="text-gray-600 p-3 text-center items-center justify-center w-auto h-auto mb-5 shadow-lg rounded-full bg-white">
                        <Image
                            alt="..."
                            className="align-middle border-none max-w-full h-auto rounded-lg hover:-mt-4 "
                            src="/sma.png"
                            width={50}
                            height={50}
                          />
                      </div>
                      <div className="bg-white flex flex-col justify-start items-center px-5">
                        <h1 className="font-serif text-sm font-semibold">SMA PEMBANGUNAN 6 YAPIS</h1>
                        <h1>2010-2013</h1>
                        <h1 className="max-w-md"> I participated in various science and sports competitions at the provincial level</h1>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-12/12 px-4 bg-white shadow-md rounded-md">
                    <h5 className="text-xl font-semibold pb-4 text-center uppercase">
                    junior high school
                    </h5>
                    <div className="flex flex-row justify-center">
                      <div className="text-gray-600 p-3 text-center items-center justify-center w-auto h-auto mb-5 shadow-lg rounded-full bg-white">
                        <Image
                            alt="..."
                            className="align-middle border-none max-w-full h-auto rounded-lg hover:-mt-4 "
                            src="/sma.png"
                            width={50}
                            height={50}
                          />
                      </div>
                      <div className="bg-white flex-col">
                        <h1 className="font-serif text-sm font-semibold">Madrasah Tsanawiyah Nurul Huda</h1>
                        <h1 className="max-w-md">I participated in various science and sports competitions at the provincial level, and get 3rd place in Papua province</h1>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-12/12 px-4 bg-white shadow-md rounded-md">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                    junior high school
                    </h5>
                    <div className="flex flex-row justify-center">
                      <div className="text-gray-600 p-3 text-center items-center justify-center w-auto h-auto mb-5 shadow-lg rounded-full bg-white">
                        <Image
                            alt="..."
                            className="align-middle border-none max-w-full h-auto rounded-lg hover:-mt-4 "
                            src="/sma.png"
                            width={50}
                            height={50}
                          />
                      </div>
                      <div className="bg-white flex-col">
                        <h1 className="font-serif text-sm font-semibold">Madrasah Tsanawiyah Nurul Huda</h1>
                        <h1 className="max-w-md">I participated in various science and sports competitions at the provincial level, and get 3rd place in Papua province</h1>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}
