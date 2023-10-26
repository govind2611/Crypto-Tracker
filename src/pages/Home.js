import React from "react";
import MainComponent from "../components/LandingPage/MainComponent";
import Header from "../components/Common/Header/index"
import Footer from "../components/Common/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <MainComponent />
      <Footer/>
    </div>
  );
};

export default HomePage;
