import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FirstSection from "../Components/HomePage/FirstSection";
import Navbar from "../Components/Common/Navbar";
import SecondSection from "../Components/HomePage/SecondSection";
import ThirdSection from "../Components/HomePage/ThirdSection";
import CardContainer from "../Components/HomePage/Cards";
import FourthSection from "../Components/HomePage/FourthSection";
import FifthSection from "../Components/HomePage/FifthSection";
import SixthSection from "../Components/HomePage/SixthSection";
import Footer from "../Components/Common/Footer";

function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const section = document.getElementById(location.state.scrollTo);
        if (section && section !== "") {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);
  return (
    <>
      <Navbar></Navbar>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <CardContainer></CardContainer>
      <section id="AboutUs">
        <FourthSection></FourthSection>
        <FifthSection></FifthSection>
      </section>
      <section id="ContactUs">
        <SixthSection></SixthSection>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Home;
