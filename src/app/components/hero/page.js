"use client";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";

export default function Hero() {
  const router = useRouter();

  const slides = [
    {
      title: "Unleash the Beast – RTX 4090 in Action",
      subtitle: "Get 40% Off – Limited Time Power Deal",
      image: "/rtx4090.png",
      primaryText: "Buy Graphics Card",
      secondaryText: "View Details",
      link: "https://www.tradeindia.com/products/asus-rog-strix-geforce-rtx-4090-gaming-graphics-card-9588765.html",
    },
    {
      title: "Next-Level Gaming – PlayStation 5 Slim",
      subtitle: "Feel the Power of 4K Gaming – Save Big Now!",
      image: "/ps5.png",
      primaryText: "Get Your PS5",
      secondaryText: "See Specs",
      link: "https://www.flipkart.com/sony-playstation5-digital-edition-slim-cfi-2008b01x-1-tb/p/itm801c70f02f720",
    },
    {
      title: "Built for Champions – ROG STRIX B550-F Motherboard",
      subtitle: "40% Off for the Ultimate PC Build",
      image: "/motherboard.png",
      primaryText: "Shop Motherboard",
      secondaryText: "More Info",
      link: "https://computechstore.in/product/asus-rog-strix-b550-f-gaming/",
    },
  ];

  const products = [
 {
    title: "NVIDIA RTX 4090 Gaming GPU",
    description: "Ultimate 4K gaming performance with ray tracing and DLSS 3.0 support for enthusiasts.",
    price: "₹75000", 
    image: "/rtx4090.png",
    rating: 4.8,
    link: "https://www.tradeindia.com/products/asus-rog-strix-geforce-rtx-4090-gaming-graphics-card-9588765.html",
  },
  {
    title: "Intel Core i9-13900K CPU",
    description: "High-performance 24-core processor designed for gaming and content creation.",
    price: "₹45,990", 
    image: "/intel-i9.png",
    rating: 4.7,
    link: "https://www.flipkart.com/intel-i9-13900k-2-2-ghz-lga1700-socket-8-cores-desktop-processor/p/itme9e395e7c809c",
  },
  {
    title: "ASUS ROG STRIX B650-E Board",
    description: "Premium AMD AM5 motherboard with PCIe 5.0 and DDR5 memory support.",
    price: "₹29,000", 
    image: "/motherboard.png",
    rating: 4.6,
    link: "https://computechstore.in/product/asus-rog-strix-b550-f-gaming/",
  },
  {
    title: "Corsair Vengeance DDR5 32GB",
    description: "High-speed 32GB DDR5 memory kit optimized for maximum gaming performance.",
    price: "₹11,249", 
    image: "/corsair-ram.png",
    rating: 4.5,
    link: "https://www.amazon.in/CORSAIR-Vengeance-1x32GB-5200MHz-CMK32GX5M1B5200C40/dp/B0B9S32J4G",
  },
  {
    title: "Samsung 980 PRO 2TB SSD",
    description: "Lightning-fast PCIe 4.0 NVMe SSD delivering 7,000MB/s read speeds.",
    price: "₹13,990",
    image: "/980pro.png",
    rating: 4.9,
    link: "https://computechstore.in/product/asus-rog-strix-b550-f-gaming/",
  },
  {
    title: "Corsair RM850x 850W PSU",
    description: "80+ Gold certified fully modular power supply with comprehensive 10-year warranty.",
    price: "₹11,100",
    image: "/CORSAIR-RM850x.png",
    rating: 4.7,
    link: "https://www.amazon.in/CORSAIR-RM850x-Certified-Modular-Supply/dp/B079H5WNXN?th=1",
  },
  {
    title: "NZXT Kraken X63 280mm AIO",
    description: "Advanced liquid cooling solution with customizable RGB lighting and CAM software.",
    price: "₹12,150", 
    image: "/NZXT.png",
    rating: 4.4,
    link: "https://www.amazon.in/Kraken-Liquid-Cooler-Socket-2011-3/dp/B08PDX5NM3?th=1",
  },
  {
    title: "Fractal Define 7 Mid-Tower",
    description: "Premium mid-tower case featuring excellent airflow and superior noise dampening.",
    price: "₹13,999", 
    image: "/Fractal.png",
    rating: 4.6,
    link: "https://www.fractal-design.com/products/cases/define/define-7/black-tg-dark-tint/",
  },
  {
    title: "MSI GeForce RTX 4070 Ti",
    description: "Powerful mid-range GPU engineered for exceptional 1440p gaming with ray tracing.",
    price: "₹96,999",
    image: "/4070ti.png",
    rating: 4.5,
    link: "https://smarttechno.in/graphics-card/nvidia-gpu/nvidia-rtx-40-series/msi-geforce-rtx-4070-gaming-x-trio-12g",
  },
  {
    title: "AMD Ryzen 7 7700X CPU",
    description: "8-core Zen 4 processor delivering outstanding gaming and multitasking performance.",
    price: "₹31,138", 
    image: "/ryzen7.png",
    rating: 4.8,
    link: "https://www.flipkart.com/amd-ryzen-7-7700x-4-5-ghz-upto-5-4-am5-socket-8-cores-16-threads-desktop-processor/p/itm36ad58d4959ef",
  },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
    fade: false,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    lazyLoad: "progressive",
    swipeToSlide: true,
    touchThreshold: 10,
  };

  const handleSlideClick = (link, e) => {
    if (e.target.closest(".hero-btn")) return;
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleButtonClick = (link, e) => {
    e.stopPropagation();
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleProductClick = (product) => {
    if (product.link) {
      window.open(product.link, '_blank', 'noopener,noreferrer');
    } else {
      console.warn("No link found for:", product.title);
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="stars">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="filled">
            ★
          </span>
        ))}
        {hasHalfStar && <span className="half">★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
    );
  };

  return (
    <div className="hero-main">
      <div className="hero-container">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="hero-slide-wrapper">
              <div
                className="hero-slide"
                onClick={(e) => handleSlideClick(slide.link, e)}
              >
                <div className="hero-content">
                  <div className="hero-text">
                    <p className="hero-subtitle">{slide.subtitle}</p>
                    <h2 className="hero-title">{slide.title}</h2>
                    <div className="hero-buttons">
                      <button
                        className="hero-btn primary"
                        onClick={(e) => handleButtonClick(slide.link, e)}
                      >
                        {slide.primaryText}
                      </button>
                      <button
                        className="hero-btn secondary"
                        onClick={(e) => handleButtonClick(slide.link, e)}
                      >
                        {slide.secondaryText} <span>&rarr;</span>
                      </button>
                    </div>
                  </div>
                  <div className="hero-image">
                    <img src={slide.image} alt={slide.title} loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="hero-bottom">
        <h2>Popular Computer Parts</h2>
        <div className="hero-product-grid">
          {products.map((product, index) => (
            <div
              className="hero-product-card"
              key={index}
              onClick={() => handleProductClick(product)}
            >
              <div className="hero-product-image">
                <img src={product.image} alt={product.title} loading="lazy" />
              </div>
              <div className="hero-product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className="hero-product-rating">
                  <div className="hero-rating-number">{product.rating}</div>
                  {renderStars(product.rating)}
                </div>
                <div className="hero-product-price-row">
                  <div className="hero-product-price">{product.price}</div>
                  <button
                    className="hero-product-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(product);
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}