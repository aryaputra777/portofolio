import React from 'react'
import Typical from 'react-typical'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content';
import { Link as ScrollLink } from 'react-scroll';
import useStartAnimation from '../hook/useStartAnimation'

export default function Header() {
const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;
  const styleTranslate = 'translate-y-10 opacity-0';
  const animated = useStartAnimation();
  return (
    <div
      style={{
        background: '#091C29',
      }}
      className="min-h-screen flex items-center justify-center"
      id="header"
    >
      <div className="flex flex-col items-center justify-center md:flex-row-reverse md:w-10/12 md:justify-between">
        <div className="w-full md:w-2/5 ">
          <LazyLoadImage
            src={content.header.img}
            alt="profile"
            className={`w-full mx-auto`}
            effect="blur"
            placeholderSrc={content.header.imgPlaceholder}
          />
        </div>

        <div className="font-dosis w-full md:w-3/5 text-center md:text-left ">
          <div className="items-center text-center">
            <div className="bg-gray-100 sm:text-center sm:items-center rounded-full h-20 w-20">
              {/* <h1>hdsjhdshdsj</h1> */}
              <LazyLoadImage src={content.header.img2}
              alt="profile"
              className={`mx-auto shadow-lg object-scale-down items-center text-center h-20 w-full rounded-full font-normal`}
              effect="blur" />
            </div>
          </div>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl text-white font-bold transform ${
              animated ? 'translate-y-0' : styleTranslate
            }  ${transition(2000)} `}
          >
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1
            className={`text-2xl md:text-4xl text-gray-400 transform ${
              animated ? 'translate-y-0' : styleTranslate
            } ${transition(3000)} `}
          >
            {content.header.text[2]}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className="inline-block"
              wrapper="p"
            />
          </h1>
          <h1 className="text-white text-sm mt-5">
          a man who always learns new things and is never satisfied with the knowledge he has acquired, and don't stop when it get hard, but stop when it get done.
          Software Engineer Enthusiast
          </h1>

          <ScrollLink to="project" smooth={true}>
            <button
              className={` animate-bounce bg-indigo-500 px-10 py-3 text-lg uppercase text-white rounded-lg mt-10 hover:bg-indigo-300 transform  ${
                animated ? 'translate-y-0' : styleTranslate
              } ${transition(3500)}`}
            >
              {content.header.btnText}
            </button>
          </ScrollLink>

          <div className="w-full lg:w-6/12 px-4">
              <div className="mt-6 lg:mb-0 mb-6">
                <button onClick={()=> window.open("https://www.youtube.com/channel/UCqX_Ykd22JdYPdmrDtQO3og", "_blank")}
                  className="bg-white text-youtube shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-youtube"></i>
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button onClick={()=> window.open("https://www.linkedin.com/in/arya-sanjaya-a47008169", "_blank")}  
                  className="bg-white text-linkedin shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-linkedin"></i>
                </button>
                <button  onClick={()=> window.open("https://github.com/aryaputra777", "_blank")}
                  className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
