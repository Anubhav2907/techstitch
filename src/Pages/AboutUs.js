import React, { useEffect } from "react";
import Navbar from "../Components/Common/Navbar";
import FirstSection from "../Components/AboutUs/FirstSection";
import Content from "../Components/AboutUs/Content";
import Footer from "../Components/Common/Footer";

function AboutUs() {
  useEffect(() => {
    document.title = "Techstitch | About Us";
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <FirstSection></FirstSection>
      <Content></Content>
      <Footer></Footer>
    </>
  );
}

export default AboutUs;
