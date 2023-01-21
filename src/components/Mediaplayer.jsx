import React from "react";
import imgdisco from "../assets/imgdisco.jpg";
import logo from "../assets/logotipo.svg";
import { useContext, useState } from "react";
import { MainContext } from "../context/mainContext";

function Mediaplayer() {
   const { play, btnVolume, disc, audio, btnPlay, volume } =
      useContext(MainContext);
   const [isMuted, changeStateVolume] = useState(false);

   function mutedAudio() {
      !isMuted
         ? (audio.current.volume = 0)
         : (audio.current.volume = volume.current.value);
      isMuted ? changeStateVolume(false) : changeStateVolume(true);
      if (!isMuted)
         btnVolume.current.classList.add("ph-speaker-simple-slash-fill");
      else btnVolume.current.classList.remove("ph-speaker-simple-slash-fill");
   }
   function changeVolume() {
      audio.current.volume = volume.current.value;
      if (audio.current.volume == 0)
         btnVolume.current.classList.add("ph-speaker-simple-slash-fill");
      else btnVolume.current.classList.remove("ph-speaker-simple-slash-fill");
   }

   return (
      <div className="relative w-full max-w-3xl flex flex-col items-center z-20 font-advent">
         <div className="bg-gray-200 w-[85%] max-w-xs overflow-hidden flex rounded-lg">
            <div className="hidden sm:block logo bg-slate-700 flex-1 px-1">
               <img src={logo} alt="logo radio bendición" className="w-[70%] h-min sm:w-[90%] mx-auto" />
            </div>
            <div className="info self-end flex-1 px-4 py-2 flex sm:flex-col items-center gap-3 sm:gap-1 text-center sm:text-left">
               <strong className="font-bold text-2xl concert text-c_red">Radio bendición</strong>
               <span className="text-sm text-slate-500 leading-tight">
                  Palmapampa - Samugari
               </span>
            </div>
         </div>
         <div className="bg-white w-[90%] max-w-sm flex flex-col justify-center items-center gap-3 rounded-lg px-5 py-4 -mt-2 shadow-xl">
            <div
               ref={disc}
               className="disc relative w-56 h-56 sm:w-64 sm:h-64 border-2 border-white shadow-xl rounded-full overflow-hidden grid place-items-center transition-all duration-500"
            >
               <img
                  src={imgdisco}
                  className="absolute w-full h-full object-cover"
                  alt="gospel"
               />
               <span className="bg-white p-4 rounded-full z-10"></span>
            </div>
            <div className="mediaplayer bg-gray-100 px-3 py-1 rounded-md flex items-center gap-4">
               <i
                  ref={btnPlay}
                  onClick={play}
                  className="ph-play-fill text-gray-300 text-4xl hover:text-c_red transition-all duration-100"
               ></i>
               <div className="volume w-20 flex items-center gap-1">
                  <i
                     ref={btnVolume}
                     onClick={mutedAudio}
                     className="ph-speaker-simple-high-fill text-gray-300 hover:text-black transition-all duration-100"
                  ></i>
                  <input
                     type="range"
                     className="range w-full h-1 rounded-full bg-blue-100 appearance-none "
                     name="volume"
                     ref={volume}
                     max="1"
                     min="0"
                     step={0.01}
                     onChange={changeVolume}
                  />
               </div>
            </div>
         </div>
         <audio
            ref={audio}
            src="https://sp.dattavolt.com/8074/stream"
            controls
            className="hidden"
         ></audio>
      </div>
   );
}

export default Mediaplayer;
