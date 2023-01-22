import logo from "../assets/logotipo.svg";
import React from "react";
import { useRef, useState, useContext } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MainContext } from "../context/mainContext";

function Header() {
   const {
      play,
      btnNavPlay,
      btnModalNavPlay,
      home,
      prog,
      cont,
      nos,
      scrollTosection,
   } = useContext(MainContext);
   function ItemNav({ to, text, capitalizer,enabledShowBar }) {
      return (
         <li
            onClick={() => {
               if(enabledShowBar) showBar();
               scrollTosection(to);
            }}
            // onClick={showBar}
            className={
               capitalizer +
               " grid justify-center items-center sm:justify-start font-medium cursor-pointer"
            }
         >
            <a className="text-white text-lg hover:font-bold hover:text-xl transition-all duration-200">
               {text}
            </a>
         </li>
      );
   }

   let btnBar = useRef();
   let navModal = useRef();
   const [isHidden, setState] = useState("w-0 p-0");

   function showBar() {
      if (isHidden == "w-0 p-0") {
         setState("w-full p-10 sm:w-96");
         document.body.classList.add("overflow-hidden");
      } else {
         setState("w-0 p-0");
         document.body.classList.remove("overflow-hidden");
      }
   }

   return (
      <div
         ref={home}
         className="w-full z-50 top-0 px-2 sm:p-0headerBox bg-c_main-normal font-advent"
      >
         <header className="relative container h-20 mx-auto flex justify-between items-center">
            <div className="logo relative w-28 sm:w-36 h-full object-contain">
               <img
                  src={logo}
                  alt="logotipo radio bendicion"
                  className="relative w-full h-full"
               />
            </div>
            <div
               ref={btnBar}
               className="btnBar md:hidden text-white text-3xl font-extrabold cursor-pointer"
               onClick={showBar}
            >
               <BiMenuAltRight />
            </div>
            <nav className="hidden md:flex justify-between gap-10">
               <ul className="flex gap-10">
                  <ItemNav to={home} enabledShowBar={false} text="Home" />
                  <ItemNav to={prog} enabledShowBar={false} text="Programación" />
                  <ItemNav to={cont} enabledShowBar={false} text="Contactos" />
                  <ItemNav to={nos} enabledShowBar={false} text="Nosotros" />
               </ul>
               <button
                  ref={btnNavPlay}
                  onClick={play}
                  className="bg-white hover:bg-gray-200 transition-all duration-500 hover:outline hover:outline-2 hover:outline-c_red px-10 py-1 rounded-full text-c_red text-2xl font-bold font-bahiana tracking-widest"
               >
                  PLAY
               </button>
            </nav>
         </header>
         <nav
            ref={navModal}
            className={
               isHidden +
               " shadow-left bg-c_main-transparent backdrop-blur-sm overflow-hidden absolute z-50 h-[calc(100vh-5rem)] right-0 md:hidden transition-all duration-500 ease-in"
            }
         >
            <ul className="flex flex-col gap-10">
               <ItemNav to={home} enabledShowBar={true} capitalizer="uppercase" text="Home" />
               <ItemNav to={prog} enabledShowBar={true} capitalizer="uppercase" text="Programación" />
               <ItemNav to={cont} enabledShowBar={true} capitalizer="uppercase" text="Contactos" />
               <ItemNav to={nos} enabledShowBar={true} capitalizer="uppercase" text="Nosotros" />
            </ul>
            <button
               ref={btnModalNavPlay}
               onClick={play}
               className="bg-white w-full mt-10 hover:bg-gray-200 transition-all duration-500 hover:outline hover:outline-2 hover:outline-c_red px-10 py-1 rounded-full text-c_red text-2xl font-bold font-bahiana tracking-widest"
            >
               PLAY
            </button>
         </nav>
      </div>
   );
}

export default Header;
