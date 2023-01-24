import React from "react";
import g_rey from "../assets/g_rey.jpg";
import g_uxfe from "../assets/g_uxfe.jpg";
import g_yuri from "../assets/g_yuri.jpg";
import g_hillsong from "../assets/g_hillsong.webp";
import g_ador from "../assets/g_ador.jpg";
import g_predica from "../assets/g_predica.jpg";
import g_infantil from "../assets/g_infantil.jpg";
import { useContext } from "react";
import { MainContext } from "../context/mainContext";

function ArticleProg({ img, content, h_ini, h_fin }) {
   return (
      <article data-aos="zoom-in-down" className="w-full sm:w-64">
         <div
            content={content}
            className={
               "relative h-auto sm:h-60 w-full overflow-hidden object-cover shadow-xl contentGenero after:content-[attr(content)]"
            }
         >
            <img
               src={img}
               alt="musica cristiana"
               className="relative w-full h-full"
            />
         </div>
         <span className="block w-max py-1 px-5 mx-auto mt-3 text-center font-advent font-semibold bg-gray-100 rounded-full text-gray-400">
            De {h_ini} - {h_fin}
         </span>
      </article>
   );
}

function ProgSection() {
   const { prog } = useContext(MainContext);

   const polka = "FOLROCK, POLKA";
   const cumbia = "CUMBIA";
   const gospel = "GOSPEL";
   const latin = "LATINOAMERICANO";
   const ador = "ADORACIÓN";
   const infan = "INFANTIL";
   const pred = "MENSAJES, PRÉDICAS";
   return (
      <div ref={prog} className="relative bg-white h-auto pt-5">
         <div className="relative container mx-auto px-[5%] min-h-screen">
            <h1 className="title text-c_violet text-center my-10">
               Disfruta de{" "}
               <span className="text-c_red">nuestra programación</span>
            </h1>
            <div className="flex justify-center gap-10 flex-wrap">
               <ArticleProg
                  img={g_rey}
                  content={polka}
                  h_ini="8:00 am"
                  h_fin="10:00 am"
               />
               <ArticleProg
                  img={g_uxfe}
                  content={cumbia}
                  h_ini="10:00 am"
                  h_fin="12:00 pm"
               />
               <ArticleProg
                  img={g_yuri}
                  content={latin}
                  h_ini="12:00 pm"
                  h_fin="1:00 pm"
               />
               <ArticleProg
                  img={g_hillsong}
                  content={gospel}
                  h_ini="1:00 pm"
                  h_fin="3:00 pm"
               />
               <ArticleProg
                  img={g_ador}
                  content={ador}
                  h_ini="3:00 pm"
                  h_fin="6:00 pm"
               />
               <ArticleProg
                  img={g_infantil}
                  content={infan}
                  h_ini="3:00 pm"
                  h_fin="6:00 pm"
               />
               <ArticleProg
                  img={g_predica}
                  content={pred}
                  h_ini="3:00 pm"
                  h_fin="6:00 pm"
               />
            </div>
            <br />
            <p
               data-aos="fade-right"
               className="mx-auto font-rale text-slate-500 text-sm w-full max-w-3xl text-center"
            >
               Nuestra programación esta pensada para todo público cristiano,
               incluyendo programación infantil hasta juvenil y folcklorica,
               además de mensajes de la palabra de Dios. Disfrute de esta
               programación y que su vida se llene de la bendición del Señor a
               traves de nuestra emisora.
            </p>
         </div>
         <svg
            className="relative xl:-mt-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
         >
            <path
               fill="#7c2ad3"
               d="M0,0L40,32C80,64,160,128,240,165.3C320,203,400,213,480,202.7C560,192,640,160,720,133.3C800,107,880,85,960,85.3C1040,85,1120,107,1200,101.3C1280,96,1360,64,1400,48L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
         </svg>
      </div>
   );
}

export default ProgSection;
