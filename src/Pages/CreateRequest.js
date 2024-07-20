import React from "react";
import Navbar from "../Components/Common/Navbar";
import FirstSection from "../Components/SupportPage/FirstSection";
import StartService from "../Components/SupportPage/StartService";
import Footer from "../Components/Common/Footer";
import CreateTicket from "../Components/SupportPage/CreateTicket";

function CreateRequest() {
  return (
    <>
      <Navbar></Navbar>
      <FirstSection></FirstSection>
      <CreateTicket></CreateTicket>
      <StartService></StartService>
      <Footer></Footer>
    </>
  );
}

export default CreateRequest;
