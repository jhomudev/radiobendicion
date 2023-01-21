import React from "react";
import Header from "./components/header";
import HomeSection from "./components/HomeSection";
import ProgSection from "./components/ProgSection";
import ContactsSection from "./components/ContactsSection";
import NosotrosSection from "./components/NosotrosSection";
import Footer from "./components/Footer";

function App() {
   return (
      <>
         <div className="container_all w-full bg-white box-border">
            <Header />
            <main>
               <HomeSection />
               <ProgSection />
               <ContactsSection />
               <NosotrosSection />
            </main>
            <Footer />
         </div>
      </>
   );
}

export default App;
