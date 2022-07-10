import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';
import { Link as ScrollLink } from 'react-scroll';
import useWindowPosition from '../hook/useWindowPosition'
import Link from "next/link";
import Image from 'next/image'

export default function Work() {
  return (
    <div id="work" className="min-h-screen flex justify-center items-center flex-col bg-white">
      <h1 className="text-5xl font-dosis font-bold">Experience</h1>
      <div className="container mx-auto pb-5 mt-10">
        <div className="justify-center flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <div className="flex flex-wrap space-y-3">
              <div className="w-full px-4 bg-white shadow-md rounded-md">
                <h5 className="text-xl font-semibold pb-4 text-center">
                  TOKOPEDIA
                </h5>
                <div className="flex flex-row justify-center items-center">
                  <div className="text-gray-600 p-3 text-center items-center justify-center mr-10">
                    <Image
                      alt="..."
                      className=""
                      src="/tokopedia.png"
                      width={220}
                      height={100}
                    />
                  </div>
                  <div className="bg-white flex flex-col justify-center">
                    <h1 className="text-2x font-semibold">SOFTWARE ENGINEER</h1>
                    <h1  className="text-2x font-semibold">I'm part of the Payment Team, and theese my responsibilities.</h1>
                    <h1>OKTOBER 2021 - PRESENT</h1>
                    <h1>Area DKI Jakarta</h1>
                    <ul className="list-disc space-y-2 pb-3">
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                        </span>
                        <p className="ml-2">
                        Working closely with engineer and product team to architect and develop the best technical design and testing approach.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                        </span>
                        <p className="ml-2">
                        Develop test plans, test cases, and end-to-end Scenarios based on user stories.
Conduct load and performance testing, regression testing, smoke testing, and chaos engineering.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                        </span>
                        <p className="ml-2">
                        Create and execute automation test scripts for both Front-End and Back-End services.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                        </span>
                        <p className="ml-2">
                        Analyze, reproduce, and report defects found in the production environment.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                        </span>
                        <p className="ml-2">
                        Continues to develop and maintain features of the current automation framework.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 bg-white shadow-md rounded-md">
                <h5 className="text-xl font-semibold pb-4 text-center">
                  TELKOM INDONESIA
                </h5>
                <div className="flex flex-row justify-center items-center">
                  <div className="text-gray-600 p-3 text-center items-center justify-center">
                    <Image
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg hover:-mt-4 "
                      src="/telkom.png"
                      width={120}
                      height={60}
                    />
                  </div>
                  <div className="bg-white flex flex-col justify-center">
                    <h1 className="text-2x font-semibold">SOFTWARE ENGINEER</h1>
                    <h1>PROHIRE</h1>
                    <h1>MAR 2020 - OKTOBER 2021</h1>
                    <h1>Area DKI Jakarta</h1>
                    <ul className="list-disc space-y-2 pb-3">
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                        </span>
                        <p className="ml-2">
                          Development Aplication in Direktorat Network IT Solution
                          <code className="text-sm font-bold text-gray-900"> (NITS)</code>
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                        </span>
                        <p className="ml-2">
                          Techincal Writter Application in Directorat Network IT Solution
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                        </span>
                        <p className="ml-2">
                          Security Tester Application in Directorat Network IT Solution
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4  bg-white shadow-md rounded-md">
                <h5 className="text-xl font-semibold pb-4 text-center uppercase">
                  Telkomsel
                </h5>
                <div className="flex flex-row justify-center items-center">
                  <div className="text-gray-600 p-3 text-center items-center justify-center mb-5">
                    <Image
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg hover:-mt-4 "
                      src="/logotelkomsel.png"
                      width={120}
                      height={60}
                    />
                  </div>
                  <div className="bg-white flex-col px-2 ">
                    <h1 className="uppercase font-semibold">SOFTWARE ENGINEER</h1>
                    <h1>DEC 2017 - Februari 2020</h1>
                    <h1 className="max-w-md">Telkomsel Regional Papua dan Maluku</h1>
                    <ul className="list-disc space-y-2 max-w-md pb-3">
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                        </span>
                        <p className="ml-2">
                          Development Aplication in Sales Regional Papua dan Maluku
                          <code className="text-sm font-bold text-gray-900"> ( PUMA )</code>
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                        </span>
                        <p className="ml-2">
                          Responsible for Server and Databases.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                        </span>
                        <p className="ml-2">
                          Data Analyst & Data Engineer
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
