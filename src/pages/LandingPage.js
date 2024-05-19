import React from "react";
import Header from "../components/Header";
import NewsArea from "../components/NewsArea";
import BannerArea from "../components/BannerArea";
import Hero from "../components/Hero";
const LandingPage = () => {
  return (
    <>
      <Header /> <NewsArea />
      <BannerArea /> <Hero/>
    </>
  );
};

export default LandingPage;
