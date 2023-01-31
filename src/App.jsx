import React from "react";
import Header from "./components/header";
import HomeSection from "./components/HomeSection";
import ProgSection from "./components/ProgSection";
import ContactsSection from "./components/ContactsSection";
import NosotrosSection from "./components/NosotrosSection";
import Footer from "./components/Footer";
import { FaAngleUp } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { MainContext } from "./context/mainContext";

function App() {
  const { home, scrollTosection, btnTop, audio } = useContext(MainContext);

  useEffect(() => {
    AOS.init();
    audio.current.volume = 0;
  }, []);
  
  window.addEventListener("scroll", () => {
    document.documentElement.scrollTop > 10
      ? btnTop.current.classList.add("!opacity-100")
      : btnTop.current.classList.remove("!opacity-100");
  });

  return (
    <>
      <div className="container_all w-full bg-white box-border overflow-hidden">
        <Header />
        <main>
          <HomeSection />
          <ProgSection />
          <ContactsSection />
          <NosotrosSection />
          <button
            ref={btnTop}
            title="Home"
            onClick={() => scrollTosection(home)}
            className="fixed bottom-6 hover:bottom-8 right-3 z-30 bg-c_red text-white shadow-lg text-xl p-3 rounded-xl transition-all duration-200 opacity-0"
          >
            <FaAngleUp />
          </button>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
