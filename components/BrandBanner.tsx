"use client";

import React from "react";
import Image from "next/image";
import styles from "./BrandBanner.module.css";

const brands = [
  "/brands/placehold1.webp",
  "/brands/placehold3.webp",
  "/brands/placehold2.webp",
  "/brands/placehold1.webp",
  "/brands/placehold.webp",
  "/brands/placehold4.webp",
  "/brands/placehold.webp",
  "/brands/placehold3.webp",
];

const BrandBanner = () => {
  return (
    <div className={styles.brandBanner}>
      <h2 className={styles.bannerTitle}>✨ Trusted Brands, Best Prices ✨</h2>
      
      {/* Brand Container with Two Moving Rows */}
      <div className={styles.brandContainer}>
        {/* First Row */}
        <div className={`${styles.brandTrack} ${styles.row1}`}>
          {brands.concat(brands).map((src, index) => (
            <div key={`row1-${index}`} className={styles.brandItem}>
              <Image src={src} alt="Brand Logo" width={100} height={50} priority />
            </div>
          ))}
        </div>

        {/* Second Row (Reversed Direction) */}
        <div className={`${styles.brandTrack} ${styles.row2}`}>
          {brands.concat(brands).map((src, index) => (
            <div key={`row2-${index}`} className={styles.brandItem}>
              <Image src={src} alt="Brand Logo" width={100} height={50} priority />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandBanner;

