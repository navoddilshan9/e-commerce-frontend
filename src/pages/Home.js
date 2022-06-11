import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NearbyShops from "../components/NearbyShops";
import Map from "../components/Map";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <NearbyShops/>
      <Map/>
      <Footer/>
    </div>
  );
};

export default Home;