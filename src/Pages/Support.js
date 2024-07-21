import React, { useEffect } from "react";
import Navbar from "../Components/Common/Navbar";
import FirstSection from "../Components/SupportPage/FirstSection";
import Tickets from "../Components/SupportPage/Tickets";
import TnC from "../Components/SupportPage/TnC";
import StartService from "../Components/SupportPage/StartService";
import Footer from "../Components/Common/Footer";

function Service() {
  useEffect(() => {
    document.title = "Techstitch | Support";
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <FirstSection></FirstSection>
      <Tickets></Tickets>
      <TnC></TnC>
      <StartService></StartService>
      <Footer></Footer>
    </>
  );
}

export default Service;
