"use client";

import React from "react";
import ProductSection from "./ProductSection";

import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      {/* Hero Banner */}
      <div className={styles.heroBanner}>
        <h1>Find Everything You Need at the Best Prices!</h1>
      </div>

      {/* Product Sections */}
      <ProductSection title=" Latest Products" category="latest" />
      <ProductSection title=" Hottest Picks" category="hot" />
      <ProductSection title=" Popular Categories" category="Popular Categories" />
      <ProductSection title=" Technology Recommendations" category="Technology Recommendations" />
      <ProductSection title=" Save Big with Initiative Range" category="Save Big with Initiative Range" />
      <ProductSection title=" Shop By Category" category="Shop By Category" />

      {/* Scrolling Brand Banner */}
    
    </div>
  );
};

export default HomePage;
