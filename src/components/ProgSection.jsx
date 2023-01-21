import React from "react";
import g_rey from "../assets/g_rey.jpg";
import g_uxfe from "../assets/g_uxfe.jpg";
import g_yuri from "../assets/g_yuri.jpg";
import g_hillsong from "../assets/g_hillsong.webp";
import g_ador from "../assets/g_ador.jpg";
import { useContext } from "react";
import { MainContext } from "../context/mainContext";


function ArticleProg({ img, content, h_ini, h_fin }) {
   return (
      <article className="w-full sm:w-64">
         <div
            content={content}
            className={
               "relative h-auto sm:h-60 w-full overflow-hidden object-cover contentGenero after:content-[attr(content)]"
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
   const {prog} = useContext(MainContext);

   const polka =
      "polka Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem sint modi voluptatem veniam, doloribus natus, ab repudiandae asperiores incidunt, cumque molestias sit quia nam esse sed distinctio labore est repellendus?";
   const cumbia =
      "cumbia Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem sint modi voluptatem veniam, doloribus natus, ab repudiandae asperiores incidunt, cumque molestias sit quia nam esse sed distinctio labore est repellendus?";
   const gospel =
      "gospel Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem sint modi voluptatem veniam, doloribus natus, ab repudiandae asperiores incidunt, cumque molestias sit quia nam esse sed distinctio labore est repellendus?";
   const latin =
      "latin Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem sint modi voluptatem veniam, doloribus natus, ab repudiandae asperiores incidunt, cumque molestias sit quia nam esse sed distinctio labore est repellendus?";
   const ador =
      "ador Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem sint modi voluptatem veniam, doloribus natus, ab repudiandae asperiores incidunt, cumque molestias sit quia nam esse sed distinctio labore est repellendus?";
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
            </div>
            <br />
            <p className="mx-auto font-rale text-slate-500 text-sm w-full max-w-3xl text-center">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
               dignissimos iste alias quod, eveniet, veritatis facere illum
               debitis ducimus hic in, laborum nihil ab blanditiis suscipit eum
               distinctio vel accusantium.
            </p>
         </div>
         <svg
            className="relative lg:absolute lg:-bottom-16  xl:-bottom-28 left-0"
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
