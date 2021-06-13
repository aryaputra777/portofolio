import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import Gambar1 from "../public/njki.png"

export default function Project() {
    return (
        <div id="project" className="min-h-screen flex justify-center items-center flex-col bg-gray-300">
            <h1 className="text-5xl font-dosis font-bold mt-11 mb-2">Project</h1>
            <div className="container mx-auto">
              <div className="justify-center flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-4/12 px-4">
                      <h5 className="text-xl font-semibold pb-1 text-center">
                        NJKI 
                      </h5>
                      <p className="text-gray-600 text-sm text-center font-semibold mb-4">The application submits a MOMENT OF JUSTIFICATION OF CAPEX INVESTMENT NEEDS, which will be reviewed in escalation and can be tracked until the Signing process is integrated with Peruri Digital Signature </p>
                        <Link href="/">
                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-red-500 w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                          <Image
                            alt="..."
                            className="align-middle border-none max-w-full h-auto rounded-lg"
                            src={Gambar1}
                            width={300}
                            height={200}
                          />
                        </div>
                        </Link>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <h5 className="text-xl font-semibold pb-4 text-center">
                        Dismantle AP
                      </h5>
                      <p className="text-gray-600 text-sm text-center font-semibold mb-4">Applications to submit Dismantle AP which are candidates, submitted by TREG and WITEL will then be reviewed </p>
                        <Link href="/">
                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                          <Image
                            alt="..."
                            className="align-middle border-none max-w-full h-auto rounded-lg hover:-mt-4 "
                            src="/dismantle.PNG"
                            width={300}
                            height={200}
                          />
                        </div>
                        </Link>
                     
                    </div>

                    <div className="w-full lg:w-4/12 px-4">
                      <h5 className="text-xl font-semibold pb-4 text-center">
                        SBR Teknis
                      </h5>
                      <p className="text-gray-600 text-sm text-center font-semibold mb-4">The application submits a Special Business Request, which is carried out by escalation, POC to Go Live. </p>
                       <br/>
                        <Link href="/">
                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                          <Image
                            alt="..."
                            className="align-middle border-none max-w-full h-auto rounded-lg"
                            src="/sbrteknis.PNG"
                            width={300}
                            height={200}
                          />
                        </div>
                        </Link>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <h5 className="text-xl font-semibold pb-4 text-center">
                        Surveillance Telkomsel
                      </h5>
                      <p className="text-gray-600 text-sm text-center font-semibold mb-4">Application Monitoring GPN/XGPON, BSS 2G/3G/4G /5G, and IP Radio Access nationwide with every 3 minutes Update </p>
                        <Link href="/">
                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                          <Image
                            alt="..."
                            className="align-middle border-none max-w-full h-auto rounded-lg"
                            src="/survellancelogin.PNG"
                            width={300}
                            height={200}
                          />
                        </div>
                        </Link>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <h5 className="text-xl font-semibold pb-4 text-center">
                        NITS Council
                      </h5>
                      <p className="text-gray-600 text-sm text-center font-semibold mb-4">NITS Council Portal Application for Documents, NEWS, Activities and Working Committees within TELKOM GROUP </p>
                        <Link href="/">
                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                          <Image
                            alt="..."
                            className="align-middle border-none max-w-full h-auto rounded-lg"
                            src="/nitscouncil.PNG"
                            width={300}
                            height={200}
                          />
                        </div>
                        </Link>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <h5 className="text-xl font-semibold pb-4 text-center">
                        Papeda
                      </h5>
                      <p className="text-gray-600 text-sm text-center font-semibold mb-4">Aplikasi Monitoring Revenue, SUBS, Payload, Traffic, dan Duration </p>
                        <Link href="/">
                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                          <Image
                            alt="..."
                            className="align-middle border-none max-w-full h-auto rounded-lg"
                            src="/tifapuma.PNG"
                            width={300}
                            height={200}
                          />
                        </div>
                        </Link>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}
