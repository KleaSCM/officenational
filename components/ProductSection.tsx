"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./ProductSection.module.css";

type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
};

type ProductSectionProps = {
  title: string;
  category: string; 
};

const ProductSection: React.FC<ProductSectionProps> = ({ title, category }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch("/data/products.json");
        if (!response.ok) throw new Error("Failed to fetch JSON");

        const data = await response.json();
        console.log("Loaded JSON Data:", data);
        if (!(category in data)) throw new Error(`Invalid category: ${category}`);

        setProducts(data[category]);
      } catch (err: any) {
        console.error("Failed to load products:", err);
        setError(err.message);
      }
    };

    loadProducts();
  }, [category]);

  const endIndex = startIndex + itemsPerPage;
  const visibleProducts = products.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < products.length) setStartIndex(startIndex + itemsPerPage);
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - itemsPerPage);
  };

  if (error) return <div className={styles.error}>⚠️ {error}</div>;

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.carouselContainer}>
        <button onClick={handlePrev} disabled={startIndex === 0} className={styles.navButton}>
          ◀
        </button>

        <div className={styles.productGrid}>
          {visibleProducts.length > 0 ? (
            visibleProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <Image src={product.image} alt={product.name} width={150} height={150} priority />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button className={styles.buyButton}>Buy Now</button>
              </div>
            ))
          ) : (
            <p className={styles.noProducts}>No products available.</p>
          )}
        </div>

        <button onClick={handleNext} disabled={endIndex >= products.length} className={styles.navButton}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
