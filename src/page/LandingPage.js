import React from "react";
import Header from "../component/header/Header";
import Banner from "../component/banner/Banner";
import About from "../component/about/About";
import UpcomingEvents from "../component/upcomingEvents/UpcomingEvents";
import Footer from "../component/footer/Footer";

const Landing = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <UpcomingEvents />
      <Footer />
    </>
  );
};

export default Landing;
