"use client";
import Navbar from "../components/navbar/page";
import "./shop.css";
import { useState } from "react";

export default function Shop() {
  const [currentSection, setCurrentSection] = useState(null);

  const motherboard = [
    {
      title: "ASUS ROG STRIX B650-E Board",
      description: "Premium AMD AM5 motherboard with PCIe 5.0 and DDR5 memory support.",
      price: "$449.99",
      image: "/motherboard.png",
      rating: 4.6,
      link: "https://computechstore.in/product/asus-rog-strix-b550-f-gaming/",
    },
    {
      title: "MSI B450 TOMAHAWK MAX",
      description: "Reliable AMD motherboard with excellent VRM cooling and RGB lighting.",
      price: "$129.99",
      image: "/motherboard2.png",
      rating: 4.4,
      link: "#",
    },
    {
      title: "GIGABYTE Z790 AORUS ELITE",
      description: "Intel Z790 chipset with DDR5 support and premium connectivity options.",
      price: "$349.99",
      image: "/motherboard3.png",
      rating: 4.5,
      link: "#",
    },
    {
      title: "ASRock B550M PRO4",
      description: "Micro-ATX AMD motherboard perfect for compact builds with solid features.",
      price: "$89.99",
      image: "/motherboard4.png",
      rating: 4.3,
      link: "#",
    },
    {
      title: "ASUS PRIME X570-P",
      description: "Feature-rich X570 motherboard with PCIe 4.0 and robust power delivery.",
      price: "$199.99",
      image: "/motherboard5.png",
      rating: 4.4,
      link: "#",
    },
  ];

  const graphics = [
    {
      title: "NVIDIA RTX 4090 Gaming GPU",
      description: "Ultimate 4K gaming performance with ray tracing and DLSS 3.0 support.",
      price: "$1,599.99",
      image: "/rtx4090.png",
      rating: 4.8,
      link: "https://www.tradeindia.com/products/asus-rog-strix-geforce-rtx-4090-gaming-graphics-card-9588765.html",
    },
    {
      title: "RTX 4070 Ti SUPER",
      description: "High-performance 1440p gaming with excellent ray tracing capabilities.",
      price: "$799.99",
      image: "/rtx4070ti.png",
      rating: 4.7,
      link: "#",
    },
    {
      title: "AMD RX 7800 XT",
      description: "Powerful RDNA 3 architecture with 16GB VRAM for smooth 1440p gaming.",
      price: "$649.99",
      image: "/rx7800xt.png",
      rating: 4.6,
      link: "#",
    },
    {
      title: "RTX 4060 Ti",
      description: "Great 1080p and entry-level 1440p gaming with DLSS 3.0 support.",
      price: "$449.99",
      image: "/rtx4060ti.png",
      rating: 4.5,
      link: "#",
    },
    {
      title: "RX 7600",
      description: "Budget-friendly option for solid 1080p gaming performance.",
      price: "$299.99",
      image: "/rx7600.png",
      rating: 4.3,
      link: "#",
    },
  ];

  const ram = [
    {
      title: "Corsair Vengeance LPX 32GB",
      description: "DDR4-3200 dual channel kit with low profile design and reliable performance.",
      price: "$129.99",
      image: "/ram1.png",
      rating: 4.7,
      link: "#",
    },
    {
      title: "G.Skill Trident Z5 RGB 32GB",
      description: "DDR5-6000 with stunning RGB lighting and premium aluminum heat spreaders.",
      price: "$249.99",
      image: "/ram2.png",
      rating: 4.8,
      link: "#",
    },
    {
      title: "Kingston Fury Beast 16GB",
      description: "DDR4-3200 gaming memory with aggressive styling and solid overclocking.",
      price: "$79.99",
      image: "/ram3.png",
      rating: 4.5,
      link: "#",
    },
    {
      title: "Crucial Ballistix 64GB",
      description: "High-capacity DDR4-3600 kit perfect for content creation and heavy multitasking.",
      price: "$299.99",
      image: "/ram4.png",
      rating: 4.6,
      link: "#",
    },
    {
      title: "TeamGroup T-Force Delta RGB",
      description: "DDR4-3200 16GB with vibrant RGB lighting and unique triangular design.",
      price: "$89.99",
      image: "/ram5.png",
      rating: 4.4,
      link: "#",
    },
  ];

  const storage = [
    {
      title: "Samsung 980 PRO 2TB NVMe",
      description: "Ultra-fast PCIe 4.0 SSD with read speeds up to 7,000 MB/s for gaming and productivity.",
      price: "$199.99",
      image: "/ssd1.png",
      rating: 4.8,
      link: "#",
    },
    {
      title: "WD Black SN850X 1TB",
      description: "High-performance gaming SSD with heatsink and Game Mode technology.",
      price: "$129.99",
      image: "/ssd2.png",
      rating: 4.7,
      link: "#",
    },
    {
      title: "Seagate Barracuda 4TB HDD",
      description: "Reliable 7200 RPM hard drive with massive storage capacity for data archiving.",
      price: "$89.99",
      image: "/hdd1.png",
      rating: 4.5,
      link: "#",
    },
    {
      title: "Crucial MX4 1TB SATA SSD",
      description: "Affordable SATA SSD with excellent endurance and consistent performance.",
      price: "$79.99",
      image: "/ssd3.png",
      rating: 4.6,
      link: "#",
    },
    {
      title: "WD Blue 2TB HDD",
      description: "Energy-efficient 5400 RPM drive perfect for everyday computing and storage.",
      price: "$59.99",
      image: "/hdd2.png",
      rating: 4.4,
      link: "#",
    },
  ];

  const monitors = [
    {
      title: "ASUS ROG Swift PG279QM",
      description: "27-inch 1440p 240Hz IPS gaming monitor with G-SYNC and HDR support.",
      price: "$649.99",
      image: "/monitor1.png",
      rating: 4.8,
      link: "#",
    },
    {
      title: "LG 27GN950-B UltraGear",
      description: "4K 144Hz Nano IPS monitor with VESA DisplayHDR 600 and USB-C connectivity.",
      price: "$799.99",
      image: "/monitor2.png",
      rating: 4.7,
      link: "#",
    },
    {
      title: "Samsung Odyssey G7 32\"",
      description: "Curved 1440p 240Hz VA panel with 1000R curvature and QLED technology.",
      price: "$599.99",
      image: "/monitor3.png",
      rating: 4.6,
      link: "#",
    },
    {
      title: "Dell S2721DGF",
      description: "27-inch 1440p 165Hz IPS monitor with excellent color accuracy and thin bezels.",
      price: "$349.99",
      image: "/monitor4.png",
      rating: 4.5,
      link: "#",
    },
    {
      title: "BenQ ZOWIE XL2546K",
      description: "24.5-inch 1080p 240Hz TN monitor designed for competitive esports gaming.",
      price: "$449.99",
      image: "/monitor5.png",
      rating: 4.4,
      link: "#",
    },
  ];

  const cabinets = [
    {
      title: "NZXT H710i Mid Tower",
      description: "Premium mid-tower case with tempered glass panel and smart lighting control.",
      price: "$179.99",
      image: "/cabinet1.png",
      rating: 4.7,
      link: "#",
    },
    {
      title: "Corsair iCUE 4000X RGB",
      description: "Mid-tower case with three SP120 RGB fans and crystal-clear tempered glass.",
      price: "$149.99",
      image: "/cabinet2.png",
      rating: 4.6,
      link: "#",
    },
    {
      title: "Fractal Design Define 7",
      description: "Silent mid-tower case with modular interior and excellent cable management.",
      price: "$169.99",
      image: "/cabinet3.png",
      rating: 4.8,
      link: "#",
    },
    {
      title: "Cooler Master MasterBox TD500",
      description: "Mesh front panel case with three ARGB fans and optimized airflow design.",
      price: "$99.99",
      image: "/cabinet4.png",
      rating: 4.5,
      link: "#",
    },
    {
      title: "Lian Li PC-O11 Dynamic",
      description: "Popular dual-chamber case perfect for custom water cooling builds.",
      price: "$139.99",
      image: "/cabinet5.png",
      rating: 4.7,
      link: "#",
    },
  ];

  const processors = [
    {
      title: "AMD Ryzen 9 7950X",
      description: "16-core flagship processor with incredible multi-threading performance for content creation.",
      price: "$599.99",
      image: "/cpu1.png",
      rating: 4.8,
      link: "#",
    },
    {
      title: "Intel Core i9-13900K",
      description: "24-core hybrid architecture processor with leading gaming and productivity performance.",
      price: "$549.99",
      image: "/cpu2.png",
      rating: 4.7,
      link: "#",
    },
    {
      title: "AMD Ryzen 7 7700X",
      description: "8-core gaming powerhouse with excellent single-thread performance and efficiency.",
      price: "$349.99",
      image: "/cpu3.png",
      rating: 4.7,
      link: "#",
    },
    {
      title: "Intel Core i5-13600K",
      description: "14-core processor offering great gaming performance and multitasking capabilities.",
      price: "$299.99",
      image: "/cpu4.png",
      rating: 4.6,
      link: "#",
    },
    {
      title: "AMD Ryzen 5 7600X",
      description: "6-core gaming processor with impressive performance per dollar value.",
      price: "$249.99",
      image: "/cpu5.png",
      rating: 4.5,
      link: "#",
    },
  ];

  const categories = [
    { name: "Mother Board", data: motherboard, icon: "🔧", id: "motherboard" },
    { name: "Graphics Card", data: graphics, icon: "🎮", id: "graphics" },
    { name: "RAM", data: ram, icon: "💾", id: "ram" },
    { name: "SSD-HDD", data: storage, icon: "💽", id: "storage" },
    { name: "Monitor", data: monitors, icon: "🖥️", id: "monitor" },
    { name: "Cabinet", data: cabinets, icon: "🏠", id: "cabinet" },
    { name: "Processors", data: processors, icon: "⚡", id: "processors" },
  ];

  const scrollLeft = (containerId) => {
    const container = document.getElementById(containerId);
    container.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = (containerId) => {
    const container = document.getElementById(containerId);
    container.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const renderProductCard = (product, index) => (
    <div key={index} className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
        <div className="product-rating">⭐ {product.rating}</div>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">{product.price}</span>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );

  const renderCategorySection = (category) => (
    <div key={category.id} className="category-section">
      <div className="category-header">
        <div className="category-title">
          <span className="category-icon">{category.icon}</span>
          <h2>{category.name}</h2>
          <span className="product-count">({category.data.length} items)</span>
        </div>
        <div className="scroll-controls">
          <button 
            className="scroll-btn scroll-left" 
            onClick={() => scrollLeft(category.id)}
          >
            &#8249;
          </button>
          <button 
            className="scroll-btn scroll-right" 
            onClick={() => scrollRight(category.id)}
          >
            &#8250;
          </button>
        </div>
      </div>
      <div className="products-container" id={category.id}>
        {category.data.map((product, index) => renderProductCard(product, index))}
      </div>
    </div>
  );

  return (
    <div className="shop-main">
      <Navbar />
      <div className="shop-container">
        <div className="shop-header">
          <h1>PC Components Store</h1>
          <p>Build your dream PC with premium components</p>
        </div>
        
        {categories.map(category => renderCategorySection(category))}
      </div>
    </div>
  );
}