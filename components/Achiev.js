import React from 'react'

export default function Achiev() {
    return (
        <div id="achiev" className="min-h-screen flex justify-center items-center flex-col">
            <h1 className="text-3xl text-center font-dosis font-bold mb-2">Achievement</h1>
            <div
                className="flex items-center justify-center md:flex-row flex-col space-y-4"
            >
                <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                        <img
                            alt="..."
                            src="/finalist.png"
                            className="static h-52 w-full align-middle rounded-t-lg"
                        />
                        
                        <blockquote className="relative p-8 mb-4">
                           
                            <h4 className="text-xl font-bold text-white">
                                FINALIST TECH TITANS
                            </h4>
                            <p className="text-md font-light mt-2 text-white">
                                TELKOMSEL TECH TITANS LEAGUE SERIES 1 - SOFTWARE DEVELOPMENT.
                            </p>
                        </blockquote>
                    </div>
                </div>

                <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                        <img
                            alt="..."
                            src="/02sn.png"
                            className="h-52 w-full align-middle rounded-t-lg"
                        />
                        <blockquote className="relative p-8 mb-4">
                           
                            <h4 className="text-xl font-bold text-white">
                                OLIMPIADE OLAHRAGA SISWA NASIONAL
                            </h4>
                            <p className="text-md font-light mt-2 text-white">
                               3rd PLACE in PROVINCE PAPUA
                            </p>
                        </blockquote>
                    </div>
                </div>

            </div>
        </div>
    )
}
