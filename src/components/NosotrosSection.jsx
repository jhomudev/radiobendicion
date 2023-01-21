import React from "react";
import img1 from "../assets/img1.jpg";
import { useContext } from "react";
import { MainContext } from "../context/mainContext";

function NosotrosSection() {
   const {nos} = useContext(MainContext);
   return (
      <div ref={nos} className="relative bg-white font-advent">
         <div className="relative container mx-auto px-[5%] h-auto py-[5%]">
            <div className="relative h-min text-right col-start-2">
               <h1 className="title text-c_red">Nosotros</h1>
               <p className="text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Praesentium assumenda fugit amet iste asperiores, corrupti
                  quasi perspiciatis obcaecati error ipsa commodi dolore totam
                  tempora ipsam impedit tenetur, ad dolorem vel?
               </p>
            </div>
            <div className="relative h-[40rem] flex flex-col md:flex-row gap-5 items-center justify-center p-1 lg:p-10 font-rale">
               <img
                  className="absolute w-full h-full mx-auto shadow-2xl opacity-70 object-cover"
                  src={img1}
                  alt="samugari palmpampa"
               />
               <div className="bg-c_main-normal drop-shadow-2xl text-white w-[90%] mb-0 md:mb-48 h-min max-w-xl px-7 py-10 rounded-xl">
                  <h2 className="font-bahiana text-6xl">MISIÓN</h2>
                  <p className="text-sm">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Dolore unde perspiciatis culpa facere inventore. Aliquam
                     optio earum veritatis eos a fugiat neque voluptatum qui
                     modi et, ducimus aspernatur, culpa facilis?
                  </p>
               </div>
               <div className="bg-c_red drop-shadow-2xl text-white w-[90%] mt-0 md:mt-60 h-min max-w-xl px-7 py-10 rounded-xl">
                  <h2 className="font-bahiana text-6xl text-right">VISIÓN</h2>
                  <p className="text-sm">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Dolore unde perspiciatis culpa facere inventore. Aliquam
                     optio earum veritatis eos a fugiat neque voluptatum qui
                     modi et, ducimus aspernatur, culpa facilis?
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default NosotrosSection;
