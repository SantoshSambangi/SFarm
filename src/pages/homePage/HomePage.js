import React from "react";
import Banner from "../bannerpage/Banner";
//import BackGround from "../gallerypage/Gallery";
import Contact from "../contactpage/Contact";
import FormValidation from "../formpage/FormValidation";
import Gallery from "../gallerypage/Gallery";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Gallery/>
      <Contact />
      <FormValidation/>
    </div>
  );
};

export default HomePage;
