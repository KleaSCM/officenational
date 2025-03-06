"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHeart, FaShoppingCart, FaBars, FaTimes, FaUser, FaChevronDown } from "react-icons/fa";
import styles from "./Navbar.module.css";

const categories = [
  {
    name: "Office Supplies",
    links: [
      { name: "Pens & Pencils", path: "/products/office-supplies/pens" },
      { name: "Notebooks", path: "/products/office-supplies/notebooks" },
      { name: "Sticky Notes", path: "/products/office-supplies/sticky-notes" },
      { name: "Tape & Adhesives", path: "/products/office-supplies/tape" },
    ],
  },
  {
    name: "Inks & Toners",
    links: [
      { name: "Printer Ink", path: "/products/inks-toners/ink" },
      { name: "Toner Cartridges", path: "/products/inks-toners/toners" },
      { name: "Laser Printers", path: "/products/inks-toners/laser" },
      { name: "Ink Refills", path: "/products/inks-toners/refills" },
    ],
  },
  {
    name: "Paper Supplies",
    links: [
      { name: "A4 Paper", path: "/products/paper-supplies/a4" },
      { name: "A3 Paper", path: "/products/paper-supplies/a3" },
      { name: "Photo Paper", path: "/products/paper-supplies/photo" },
      { name: "Cardstock", path: "/products/paper-supplies/cardstock" },
    ],
  },
  {
    name: "Technology",
    links: [
      { name: "Laptops", path: "/products/technology/laptops" },
      { name: "Keyboards & Mice", path: "/products/technology/keyboards" },
      { name: "Printers", path: "/products/technology/printers" },
      { name: "Monitors", path: "/products/technology/monitors" },
    ],
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null); :::: gives a typeissue
const [activeDropdown, setActiveDropdown] = useState<number | null>(null);


  return (
    <>
      {/* Navbar */}
      <nav className={styles.navbar}>
        {/* Left: Hamburger + Logo */}
        <div className={styles.leftSection}>
          <button className={styles.menuButton} onClick={() => setMenuOpen(true)}>
            <FaBars />
          </button>
          <Link href="/">
            <Image src="/placehold.webp" alt="Office National Logo" width={150} height={50} />
          </Link>
        </div>

        {/* Middle: Search Bar */}
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search for Products" className={styles.searchBar} />
        </div>

        {/* Right: Icons */}
        <div className={styles.icons}>
          <Link href="/account"><FaUser className={styles.icon} /></Link>
          <Link href="/wishlist"><FaHeart className={styles.icon} /></Link>
          <Link href="/cart"><FaShoppingCart className={styles.icon} /></Link>
        </div>
      </nav>

      {/* Category Links */}
      <div className={styles.categoryBar}>
        {categories.map((category, index) => (
          <div
            key={index}
            className={styles.dropdown}
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={styles.dropdownButton} onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}>
              {category.name} <FaChevronDown />
            </button>
            {activeDropdown === index && (
              <div className={styles.dropdownMenu}>
                {category.links.map((link, idx) => (
                  <Link key={idx} href={link.path} className={styles.dropdownItem}>
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Popout Sidebar */}
      <div className={`${styles.sidebar} ${menuOpen ? styles.show : ""}`}>
        <div className={styles.sidebarHeader}>
          <button className={styles.closeButton} onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
          <h2>Categories</h2>
        </div>
        <ul className={styles.categoryList}>
          {categories.map((category, index) => (
            <li key={index}>
              <Link href={category.links[0].path}>{category.name}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.extraLinks}>
          <Link href="/catalogues">Latest Catalogues</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
