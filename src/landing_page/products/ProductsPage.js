import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection.js";
import RightSection from "./RightSection.js";
import Universe from "./Universe.js";

function PricingPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media\images\photos\kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data,
        advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your
        Android and iOS devices."
        leranMore=""
        tryDemo=""
        googlePlay=""
        appStore=""
      />
      <RightSection 
        imageURL="media\images\photos\console.png"
        productName="Cosole"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        leranMore=""
        />
      <LeftSection
        imageURL="media\images\photos\coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        leranMore=""
        tryDemo=""
        googlePlay=""
        appStore=""
      />
      <RightSection 
        imageURL="media\images\photos\kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        leranMore=""
      />
      <LeftSection
        imageURL="media\images\photos\varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        leranMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5">
        Want to know more about our Technology stack? Check out the Zerodha. tech blog.
      </p>
      <Universe />
    </>
  );
}

export default PricingPage;
