import React from "react";
import Mediaplayer from "./Mediaplayer";
import imgMusic from "../assets/imgMusic.jpg";
import img3 from "../assets/img3.jpeg";

function HomeSection() {
   return (
      <div className="relative bg-c_main-normal h-auto">
         <div className="relative container min-h-[calc(100vh-5rem)] mx-auto px-[5%] grid grid-cols-1 lg:grid-cols-2 justify-center lg:items-center">
            <div className="after-imgBg absolute z-0 left-0 top-0 w-full h-full object-contain">
               <img
                  className="relative opacity-20 w-full h-full drop-shadow-xl"
                  src={imgMusic}
                  alt="musica"
               />
            </div>
            <div className="relative z-1 lg:col-end-2 flex flex-col items-center justify-center text-white">
               <strong data-aos="fade-down" className="flex flex-wrap w-full mt-14 lg:-mt-20 font-crimson font-extrabold italic text-5xl tracking-wider">
                  RADIO BENDICIÓN
                  <br />
                  90.5 FM
                  <span className="w-full text-xl">PALMAPAMPA - SAMUGARI</span>
               </strong>
               <p data-aos="fade-right" className="text-md font-advent mt-4">
                  La radio bendicion.com 90.5 FM. Es una bendición para
                  creyentes en Cristo y el público en general de habla quechua y
                  hispana. Es una radio digital que transmite desde Perú para
                  todo el mundo.
               </p>
               <i data-aos="fade-up" className="mt-5 text-center">
                  "Aclamad con júbilo al SEÑOR, toda la tierra; prorrumpid y
                  cantad con gozo, cantad alabanzas." Salmos 98:4
               </i>
            </div>
            <div className="relative h-full grid place-items-center">
               <img data-aos="zoom-out-up"
                  className="absolute top-0 lg:top-32"
                  src={img3}
                  alt="palmapampa samugari"
               />
               <Mediaplayer />
            </div>
         </div>
         <svg
            className="absolute bottom-0 left-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
         >
            <path
               fill="#ffffff"
               d="M0,256L48,261.3C96,267,192,277,288,282.7C384,288,480,288,576,245.3C672,203,768,117,864,80C960,43,1056,53,1152,85.3C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
         </svg>
      </div>
   );
}

export default HomeSection;
