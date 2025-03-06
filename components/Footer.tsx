"use client";

import React from "react";
import styles from "./Footer.module.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* 🔹 Horizontal Icon Section */}
        <div className={styles.footerIcons}>
          <a href="https://goo.gl/maps/DqTq4yQz6Z2AXzUMA" target="_blank" rel="noopener noreferrer">
            <FaMapMarkerAlt />
          </a>
          <a href="tel:0749512077">
            <FaPhone />
          </a>
          <a href="mailto:mbm@mbmofficenational.com.au">
            <FaEnvelope />
          </a>
        </div>

        {/* 🔹 Horizontal Contact Links */}
        <div className={styles.footerLinks}>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
          <a href="#">Enquire Now</a>
          <a href="#">Competitions</a>
          <a href="#">Delivery</a>
          <a href="#">Return Policy</a>
          <a href="#">Request a Catalogue</a>
        </div>
      </div>

      {/* 🔹 Footer Bottom */}
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Mackay Business Machines (MBM) Office National. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
