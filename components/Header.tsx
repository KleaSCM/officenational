"use client";

import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerTop}>
      <div className="text-xs">
        <span className="font-semibold">MACKAY BUSINESS MACHINES (MBM) OFFICE NATIONAL</span> | MACKAY QLD 4740
        <Link href="#" className="ml-2 underline"> (Change) </Link>
      </div>
      <div className={styles.headerLinks}>
        <Link href="#">📞 07 4951 2077</Link>
        <Link href="#">Latest Catalogues</Link>
        <Link href="#">Contact Us</Link>
      </div>
    </div>
  );
};

export default Header;
//changed for vercel