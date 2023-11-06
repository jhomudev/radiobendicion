import React from "react";
import imgdisco from "../assets/imgdisco.jpg";
import imgLogoPlayer from "./../assets/logo-radio-adp.jpeg";
import logo from "../assets/logotipo.svg";
import { useContext, useState } from "react";
import { MainContext } from "../context/mainContext";

function Mediaplayer() {
  const {
    playMedia,
    isMuted,
    isPlaying,
    changeStateVolume,
    btnVolume,
    disc,
    audio,
    btnPlay,
    volume,
  } = useContext(MainContext);

  function mutedAudio() {
    if (!isMuted) {
      audio.current.volume = 0;
      btnVolume.current.classList.add("ph-speaker-simple-slash-fill");
    } else {
      isPlaying
        ? (audio.current.volume = volume.current.value)
        : (audio.current.volume = 0);
      btnVolume.current.classList.remove("ph-speaker-simple-slash-fill");
    }
    isMuted ? changeStateVolume(false) : changeStateVolume(true);
  }
  function changeVolume() {
    if (isPlaying) {
      audio.current.volume = volume.current.value;
      if (audio.current.volume === 0)
        btnVolume.current.classList.add("ph-speaker-simple-slash-fill");
      else btnVolume.current.classList.remove("ph-speaker-simple-slash-fill");
    } else {
      audio.current.volume = 0;
    }
  }

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease"
      className="relative w-full max-w-3xl flex flex-col items-center z-20 font-advent"
    >
      <div className="bg-gray-200 w-[85%] max-w-xs overflow-hidden flex items-center rounded-lg">
        <div className="hidden sm:block logo bg-slate-700 flex-1 px-1">
          <img
            src={logo}
            alt="logo radio bendición"
            className="w-[70%] h-min sm:w-[90%] mx-auto"
          />
        </div>
        <div className="flex-1 px-4 py-2 flex sm:flex-col items-center gap-3 sm:gap-1 text-center sm:text-left">
          <strong className="font-bold text-2xl concert text-c_red">
            Radio bendición
          </strong>
          <span className="text-sm text-slate-500 leading-tight">
            Palmapampa - Samugari
          </span>
        </div>
      </div>
      <div className="bg-white w-[90%] max-w-sm flex flex-col justify-center items-center gap-3 rounded-lg px-5 py-4 -mt-2 shadow-xl">
        <div
          ref={disc}
          className="disc relative w-56 h-56 sm:w-64 sm:h-64 border-4 border-slate-500 shadow-xl rounded-full overflow-hidden grid place-items-center transition-all duration-500"
        >
          <img
            src={imgLogoPlayer}
            className="absolute w-full h-full object-fill"
            alt="gospel"
          />
          <span className="bg-white p-4 rounded-full z-10"></span>
        </div>
        <div className="mediaplayer bg-gray-100 px-3 py-1 rounded-md flex items-center gap-4">
          <i
            ref={btnPlay}
            onClick={playMedia}
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
              title="Volumen"
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
        src="https://stream-153.zeno.fm/p1als7syrtmuv?zs=w_lp7EJeRy2r6a6gI2Vtgw"
        controls
        className="hidden"
      ></audio>
    </div>
  );
}

export default Mediaplayer;
