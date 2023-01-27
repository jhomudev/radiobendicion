import React from "react";
import { createContext, useState, useRef } from "react";

export const MainContext = createContext();
export function MainContextProvider(props) {
   const [isPlaying, changeStateMedia] = useState(false);
   const [isMuted, changeStateVolume] = useState(false);

   const btnTop = useRef();
   const btnVolume = useRef();
   const audio = useRef();
   const disc = useRef();
   const btnPlay = useRef();
   const volume = useRef();
   const btnNavPlay = useRef();
   const btnModalNavPlay = useRef();
   // SECCIONES SCROLL ANIMADO ENTRE SECCIONES
   const home = useRef();
   const prog = useRef();
   const cont = useRef();
   const nos = useRef();

   function scrollTosection(ref) {
      window.scrollTo({
         top: ref.current.offsetTop,
         behavior: "smooth",
      });
   }

   function playMedia() {
      // !isPlaying ? audio.current.play() : audio.current.pause();
      audio.current.play();
      if (!isPlaying) {
         audio.current.volume = isMuted ? 0 : volume.current.value;
      } else {
         audio.current.volume = 0;
      }

      isPlaying ? changeStateMedia(false) : changeStateMedia(true);
      if (!isPlaying) {
         btnPlay.current.classList.add("ph-pause-fill");
         btnPlay.current.classList.remove("ph-play-fill");
         disc.current.classList.add("animate-discRotate");
         btnNavPlay.current.innerHTML = "PAUSE";
         btnModalNavPlay.current.innerHTML = "PAUSE";
      } else {
         btnPlay.current.classList.add("ph-play-fill");
         btnPlay.current.classList.remove("ph-pause-fill");
         disc.current.classList.remove("animate-discRotate");
         btnNavPlay.current.innerHTML = "PLAY";
         btnModalNavPlay.current.innerHTML = "PLAY";
      }
   }

   return (
      <MainContext.Provider
         value={{
            playMedia,
            btnTop,
            btnVolume,
            disc,
            audio,
            btnPlay,
            volume,
            btnNavPlay,
            btnModalNavPlay,
            home,
            prog,
            cont,
            nos,
            scrollTosection,
            isPlaying,
            isMuted,
            changeStateVolume,
         }}
      >
         {props.children}
      </MainContext.Provider>
   );
}
