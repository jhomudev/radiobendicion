import React from "react";
import img1 from "../assets/img1.jpg";
import { useContext } from "react";
import { MainContext } from "../context/mainContext";

function NosotrosSection() {
   const { nos } = useContext(MainContext);
   return (
      <div ref={nos} className="relative bg-white font-advent">
         <div className="relative container mx-auto px-[5%] h-auto py-[5%]">
            <div data-aos="fade-right" className="relative h-min text-right col-start-2">
               <h1 className="title text-c_red">Nosotros</h1>
               <p className="text-gray-500">
                  Somos una radio que busca llegar al corazón del pueblo de Dios
                  y de todas la personas. Nos importas tú y los demás, por lo
                  cual a través de esta emisora queremos compartirte el mensaje
                  de Cristo, nuestro Salvador.
               </p>
            </div>
            <div className="relative h-[40rem] flex flex-col md:flex-row gap-5 items-center justify-center box-border p-1 lg:p-10 font-rale">
               <img data-aos="zoom-out-up"
                  className="absolute w-full h-full mx-auto shadow-2xl opacity-70 object-cover"
                  src={img1}
                  alt="samugari palmpampa"
               />
               <div data-aos="fade-left" className="bg-c_main-normal drop-shadow-2xl text-white w-[90%] mb-0 md:mb-48 h-min max-w-xl px-7 py-5 rounded-xl">
                  <h2 className="font-bahiana text-4xl md:text-6xl">MISIÓN</h2>
                  <p className="text-sm sm:text-base font-advent">
                     Difundir el evangelio que es la palabra de Dios, para el
                     arrepentimiento y perdón de pecados en Jesucristo,
                     edificando y fortaleciendo la fe de la iglesia de habla
                     quechua y hispana alrededor del mundo e impactar a las
                     sociedades con una perspectiva bíblica y Cristocéntrica para que
                     lleguen a ser salvos.
                  </p>
               </div>
               <div data-aos="fade-right" className="bg-c_red drop-shadow-2xl text-white w-[90%] mt-0 md:mt-60 h-min max-w-xl px-7 py-5 rounded-xl">
                  <h2 className="font-bahiana text-4xl md:text-6xl text-right">VISIÓN</h2>
                  <p className="text-sm sm:text-base font-advent">
                     Ser una radio cristiana digital de más audiencia, para la
                     población en general, tener una programación bíblica,
                     educativa, cultural Cristocéntrica y llegue a ser un
                     paradigma en la orientación espiritual, moral e intelectual
                     de habla quechua y hispana en todo el mundo.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default NosotrosSection;
