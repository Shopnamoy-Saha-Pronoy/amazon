import React from "react";
import "./Home.css";
import Product from "./Product";
import image1 from "./Image/Headphone.jpg";
import image2 from "./Image/air_buds.jpg";
import image3 from "./Image/battery.jpg";
import image4 from "./Image/Printer.jpg";
import image5 from "./Image/YejaQuDyoPHYmsCPV7k57e-970-80.jpeg.webp";
import image6 from "./Image/Monitor.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="10001"
            title="Logitech G733 Lightspeed Wireless Gaming Headset with Suspension Headband, Lightsync RGB, Blue VO!CE mic technology and PRO-G audio drivers - White"
            price={55}
            image={image1}
            rating={4}
          />
          <Product
            id="10002"
            title="Apple AirPods (3rd Generation) Wireless Earbuds with Lightning Charging Case. Spatial Audio, Sweat and Water Resistant, Up to 30 Hours of Battery Life. Bluetooth Headphones for iPhone"
            price={127.2}
            image={image2}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="10003"
            title="Amazon Basics 48-Pack AA Alkaline High-Performance Batteries, 1.5 Volt, 10-Year Shelf Life"
            price={55.75}
            image={image3}
            rating={4}
          />
          <Product
            id="10004"
            title="HP DeskJet 3755 Compact All-in-One Wireless Printer, HP Instant Ink, Works with Alexa - Stone Accent (J9V91A)"
            price={330.25}
            image={image4}
            rating={3}
          />
          <Product
            id="10005"
            title="Apple iPhone 15 Pro Max will come with exclusive features, higher price"
            price={1200}
            image={image5}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="10006"
            title="Sceptre Curved 30' 21:9 Gaming LED Monitor 2560x1080p UltraWide Ultra Slim HDMI DisplayPort Up to 85Hz MPRT 1ms FPS-RTS Build-in Speakers, Machine Blue (C305W-2560UN)"
            price={650}
            image={image6}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
