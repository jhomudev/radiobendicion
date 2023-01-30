import React from "react";
import g_rey from "../assets/g_rey.jpg";
import g_uxfe from "../assets/g_uxfe.jpg";
import g_yuri from "../assets/g_yuri.jpg";
import g_hillsong from "../assets/g_hillsong.webp";
import g_predica from "../assets/g_predica.jpg";
import g_infantil from "../assets/g_infantil.jpg";
import g_quechua from "../assets/g_quechua.jpg";
import g_huayno from "../assets/g_huayno.jpg";
import { useContext } from "react";
import { MainContext } from "../context/mainContext";

function ArticleProg({ img, content, h_ini, h_fin }) {
  return (
    <article
      data-aos="zoom-in-down"
      data-aos-duration="1000"
      data-aos-easing="ease"
      className="w-full sm:w-64"
    >
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
        {h_ini} - {h_fin}
      </span>
    </article>
  );
}

function ProgSection() {
  const { prog } = useContext(MainContext);

  return (
    <div ref={prog} className="relative bg-white h-auto pt-5">
      <div className="relative container mx-auto px-[5%] min-h-screen">
        <h1 className="title text-c_violet text-center my-10">
          Disfruta de <span className="text-c_red">nuestra programación</span>
        </h1>
        <div className="flex justify-center gap-10 flex-wrap">
          <ArticleProg
            img={g_quechua}
            content="PROGRAMA EN QUECHUA"
            h_ini="4:00 am"
            h_fin="5:00 am"
          />
          <ArticleProg
            img={g_rey}
            content="FOLROCK, POLKA"
            h_ini="8:00 am"
            h_fin="10:00 am"
          />
          <ArticleProg
            img={g_infantil}
            content="INFANTIL"
            h_ini="Dom. 9:00 am"
            h_fin="11:00 am"
          />
          <ArticleProg
            img={g_yuri}
            content="LATINOAMERICANO"
            h_ini="10:00 am"
            h_fin="11:00 am"
          />
          <ArticleProg
            img={g_predica}
            content="MENSAJES, PRÉDICAS"
            h_ini="12:00 pm"
            h_fin="1:00 pm"
          />
          <ArticleProg
            img={g_hillsong}
            content="GOSPEL, MÚSICA JUVENIL"
            h_ini="1:00 pm"
            h_fin="2:00 pm"
          />
          <ArticleProg
            img={g_uxfe}
            content="CUMBIA CRISTIANA"
            h_ini="2:00 pm"
            h_fin="3:00 pm"
          />
          
          
          <ArticleProg
            img={g_huayno}
            content="HUAYNO CRISTIANO"
            h_ini="5:00 pm"
            h_fin="6:00 pm"
          />
          
        </div>
        <br />
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease"
          className="mx-auto font-rale font-semibold text-slate-400 text-sm w-full max-w-3xl text-center"
        >
          Nuestra emisora transmite desde las 4:00 am hasta las 9:00 pm. Tenemos una programación pensada para todo público cristiano,
          incluyendo programación infantil hasta juvenil y folcklorica, además
          de mensajes de la palabra de Dios. Disfrute de esta programación y que
          su vida se llene de la bendición del Señor a traves de nuestra
          señal.
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
