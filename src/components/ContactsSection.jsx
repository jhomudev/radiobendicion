import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import radio3 from "../assets/rimg3.jpeg";
import radio2 from "../assets/rimg2.jpeg";
import radio1 from "../assets/rimg1.jpeg";
import { useContext } from "react";
import { MainContext } from "../context/mainContext";

function ContactsSection() {
  const { cont } = useContext(MainContext);

  return (
    <div ref={cont} className="relative bg-c_main-normal font-advent">
      <div className="relative container mx-auto px-[5%] h-auto pt-12 lg:pt-24">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <h1 className="title text-c_cyan">Contáctenos</h1>
          <p className="text-white">
            y solicite sus canciones favoritas, lo escucharemos y atenderemos
            los pedidos de nuestros radioyentes.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease"
            className="descri lg:col-end-2"
          >
            <h2 className="text-c_red text-lg mt-5">Nuestros contactos</h2>
            <ul className="flex flex-col gap-4 mt-3">
              <li>
                <a
                  href="tel:+51966978585"
                  className="flex gap-2 items-center text-white hover:underline"
                >
                  <FaPhoneAlt /> 988988070
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=51988988070&text=Radio%Bendición%2C%Palmapampa%-%Samugari."
                  target="_blank"
                  className="flex gap-2 items-center text-white hover:underline"
                >
                  <FaWhatsapp /> 988988070
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100089312583025"
                  target="_blank"
                  className="flex gap-2 items-center text-white hover:underline"
                >
                  <FaFacebook /> Radio Bendición Samugari
                </a>
              </li>
              <li>
                <a
                  href="mailto:radiobendicion@gmail.com.com"
                  target="_blank"
                  className="flex gap-2 items-center text-white hover:underline"
                >
                  <MdEmail /> radiobendicion@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease"
            className="relative w-full mt-3 lg:mt-0 lg:w-96 mx-auto lg:col-start-2 lg:col-end-3 overflow-hidden lg:overflow-visible"
          >
            <img
              className="w-full relative lg:w-auto shadow-2xl"
              src={radio3}
              alt="radio bendición"
            />
            <img
              className="w-52 hidden lg:block lg:w-auto lg:absolute lg:right-64 lg:top-24"
              src={radio2}
              alt="radio bendición"
            />
            <img
              className="w-52 hidden lg:block lg:w-auto lg:ml-20"
              src={radio1}
              alt="radio bendición"
            />
            {/* <lottie-player
                     class="presentation__img"
                     src="https://assets2.lottiefiles.com/packages/lf20_M7zf6YI9dl.json"
                     background="transparent"
                     speed="1"
                     loop
                     autoplay
                  ></lottie-player> */}
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          d="M0,256L48,234.7C96,213,192,171,288,149.3C384,128,480,128,576,160C672,192,768,256,864,277.3C960,299,1056,277,1152,234.7C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default ContactsSection;
