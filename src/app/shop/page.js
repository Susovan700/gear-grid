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
    price: "₹37,499",
    image: "/motherboard.png",
    rating: 4.6,
    link: "https://computechstore.in/product/asus-rog-strix-b550-f-gaming/",
  },
  {
    title: "MSI B450 TOMAHAWK MAX",
    description: "Reliable AMD motherboard with excellent VRM cooling and RGB lighting.",
    price: "₹10,999",
    image: "/motherboard2.png",
    rating: 4.4,
    link: "#",
  },
  {
    title: "GIGABYTE Z790 AORUS ELITE",
    description: "Intel Z790 chipset with DDR5 support and premium connectivity options.",
    price: "₹29,999",
    image: "/motherboard3.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "ASRock B550M PRO4",
    description: "Micro-ATX AMD motherboard perfect for compact builds with solid features.",
    price: "₹7,999",
    image: "/motherboard4.png",
    rating: 4.3,
    link: "#",
  },
  {
    title: "ASUS PRIME X570-P",
    description: "Feature-rich X570 motherboard with PCIe 4.0 and robust power delivery.",
    price: "₹16,999",
    image: "/motherboard5.png",
    rating: 4.4,
    link: "#",
  },
  {
    title: "MSI MAG B550 TOMAHAWK",
    description: "AMD B550 gaming motherboard with extended heatsink and 2.5G LAN.",
    price: "₹15,499",
    image: "/motherboard6.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "GIGABYTE B660M DS3H AX",
    description: "Intel B660 mATX motherboard with WiFi 6 and DDR4 support.",
    price: "₹12,999",
    image: "/motherboard7.png",
    rating: 4.3,
    link: "#",
  },
  {
    title: "ASUS TUF GAMING Z690-PLUS",
    description: "Durable Intel Z690 motherboard with military-grade components.",
    price: "₹24,999",
    image: "/motherboard8.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "ASRock X570 Steel Legend",
    description: "AMD X570 motherboard with Polychrome RGB and high-quality power design.",
    price: "₹18,499",
    image: "/motherboard9.png",
    rating: 4.4,
    link: "#",
  },
  {
    title: "MSI MPG Z590 GAMING EDGE WiFi",
    description: "Intel Z590 motherboard with PCIe 4.0 and WiFi 6E support.",
    price: "₹21,999",
    image: "/motherboard10.png",
    rating: 4.6,
    link: "#",
  },
];

const graphics = [
  {
    title: "NVIDIA RTX 4090 Gaming GPU",
    description: "Ultimate 4K gaming performance with ray tracing and DLSS 3.0 support.",
    price: "₹1,65,999",
    image: "/rtx4090.png",
    rating: 4.8,
    link: "https://www.tradeindia.com/products/asus-rog-strix-geforce-rtx-4090-gaming-graphics-card-9588765.html",
  },
  {
    title: "RTX 4070 Ti SUPER",
    description: "High-performance 1440p gaming with excellent ray tracing capabilities.",
    price: "₹82,999",
    image: "/rtx4070ti.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "AMD RX 7800 XT",
    description: "Powerful RDNA 3 architecture with 16GB VRAM for smooth 1440p gaming.",
    price: "₹67,999",
    image: "/rx7800xt.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "RTX 4060 Ti",
    description: "Great 1080p and entry-level 1440p gaming with DLSS 3.0 support.",
    price: "₹46,999",
    image: "/rtx4060ti.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "RX 7600",
    description: "Budget-friendly option for solid 1080p gaming performance.",
    price: "₹31,499",
    image: "/rx7600.png",
    rating: 4.3,
    link: "#",
  },
  {
    title: "NVIDIA RTX 4080 SUPER",
    description: "4K gaming powerhouse with 16GB GDDR6X memory and AV1 encoding.",
    price: "₹1,19,999",
    image: "/rtx4080.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "AMD RX 7900 XTX",
    description: "Flagship RDNA 3 GPU with 24GB GDDR6 and advanced cooling solution.",
    price: "₹99,999",
    image: "/rx7900xtx.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "RTX 3060 Ti",
    description: "Popular 1080p/1440p GPU with excellent performance-to-price ratio.",
    price: "₹38,999",
    image: "/rtx3060ti.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "Intel Arc A770",
    description: "Intel's flagship GPU with 16GB GDDR6 and XeSS upscaling technology.",
    price: "₹34,999",
    image: "/arca770.png",
    rating: 4.2,
    link: "#",
  },
  {
    title: "RTX 3050",
    description: "Entry-level ray tracing capable GPU for 1080p gaming.",
    price: "₹27,999",
    image: "/rtx3050.png",
    rating: 4.3,
    link: "#",
  },
];

const ram = [
  {
    title: "Corsair Vengeance LPX 32GB",
    description: "DDR4-3200 dual channel kit with low profile design and reliable performance.",
    price: "₹10,999",
    image: "/ram1.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "G.Skill Trident Z5 RGB 32GB",
    description: "DDR5-6000 with stunning RGB lighting and premium aluminum heat spreaders.",
    price: "₹20,999",
    image: "/ram2.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "Kingston Fury Beast 16GB",
    description: "DDR4-3200 gaming memory with aggressive styling and solid overclocking.",
    price: "₹6,799",
    image: "/ram3.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "Crucial Ballistix 64GB",
    description: "High-capacity DDR4-3600 kit perfect for content creation and heavy multitasking.",
    price: "₹24,999",
    image: "/ram4.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "TeamGroup T-Force Delta RGB",
    description: "DDR4-3200 16GB with vibrant RGB lighting and unique triangular design.",
    price: "₹7,499",
    image: "/ram5.png",
    rating: 4.4,
    link: "#",
  },
  {
    title: "ADATA XPG Spectrix D50",
    description: "DDR4-3600 32GB RGB memory with stylish heat spreader design.",
    price: "₹14,999",
    image: "/ram6.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "Corsair Dominator Platinum RGB",
    description: "Premium DDR5-5600 32GB kit with DHX cooling and 12-LED light bar.",
    price: "₹28,999",
    image: "/ram7.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "G.Skill Ripjaws V 64GB",
    description: "High-capacity DDR4-3200 kit optimized for AMD Ryzen platforms.",
    price: "₹22,999",
    image: "/ram8.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "HyperX Predator RGB 16GB",
    description: "DDR4-3200 memory with infrared sync technology for uniform RGB lighting.",
    price: "₹8,999",
    image: "/ram9.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "Patriot Viper Steel DDR4 32GB",
    description: "Performance memory with aluminum heat spreader and XMP 2.0 support.",
    price: "₹12,499",
    image: "/ram10.png",
    rating: 4.4,
    link: "#",
  },
];

const storage = [
  {
    title: "Samsung 980 PRO 2TB NVMe",
    description: "Ultra-fast PCIe 4.0 SSD with read speeds up to 7,000 MB/s for gaming and productivity.",
    price: "₹16,999",
    image: "/ssd1.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "WD Black SN850X 1TB",
    description: "High-performance gaming SSD with heatsink and Game Mode technology.",
    price: "₹10,999",
    image: "/ssd2.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "Seagate Barracuda 4TB HDD",
    description: "Reliable 7200 RPM hard drive with massive storage capacity for data archiving.",
    price: "₹7,499",
    image: "/hdd1.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "Crucial MX4 1TB SATA SSD",
    description: "Affordable SATA SSD with excellent endurance and consistent performance.",
    price: "₹6,799",
    image: "/ssd3.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "WD Blue 2TB HDD",
    description: "Energy-efficient 5400 RPM drive perfect for everyday computing and storage.",
    price: "₹4,999",
    image: "/hdd2.png",
    rating: 4.4,
    link: "#",
  },
  {
    title: "Kingston KC3000 1TB NVMe",
    description: "PCIe 4.0 SSD with read speeds up to 7,000MB/s and low-profile design.",
    price: "₹9,999",
    image: "/ssd4.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "Seagate FireCuda 530 2TB",
    description: "High-endurance PCIe 4.0 SSD with optional heatsink and 3D TLC NAND.",
    price: "₹18,999",
    image: "/ssd5.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "Samsung 870 QVO 4TB",
    description: "QLC-based SATA SSD with massive capacity and 560MB/s read speeds.",
    price: "₹22,999",
    image: "/ssd6.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "Toshiba X300 6TB",
    description: "Performance HDD with 7200 RPM speed and 128MB cache for creative professionals.",
    price: "₹14,999",
    image: "/hdd3.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "Sabrent Rocket Q 4TB NVMe",
    description: "High-capacity PCIe 3.0 SSD with QLC NAND and excellent price-to-performance ratio.",
    price: "₹24,999",
    image: "/ssd7.png",
    rating: 4.4,
    link: "#",
  },
];

const monitors = [
  {
    title: "ASUS ROG Swift PG279QM",
    description: "27-inch 1440p 240Hz IPS gaming monitor with G-SYNC and HDR support.",
    price: "₹54,999",
    image: "/monitor1.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "LG 27GN950-B UltraGear",
    description: "4K 144Hz Nano IPS monitor with VESA DisplayHDR 600 and USB-C connectivity.",
    price: "₹66,999",
    image: "/monitor2.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: 'Samsung Odyssey G7 32"',
    description: "Curved 1440p 240Hz VA panel with 1000R curvature and QLED technology.",
    price: "₹49,999",
    image: "/monitor3.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "Dell S2721DGF",
    description: "27-inch 1440p 165Hz IPS monitor with excellent color accuracy and thin bezels.",
    price: "₹29,999",
    image: "/monitor4.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "BenQ ZOWIE XL2546K",
    description: "24.5-inch 1080p 240Hz TN monitor designed for competitive esports gaming.",
    price: "₹37,999",
    image: "/monitor5.png",
    rating: 4.4,
    link: "#",
  },
  {
    title: "MSI Optix MAG274QRF-QD",
    description: "27-inch 1440p 165Hz monitor with quantum dot technology and wide color gamut.",
    price: "₹34,999",
    image: "/monitor6.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "Acer Predator XB323U",
    description: "32-inch 4K 144Hz IPS monitor with G-SYNC compatibility and 99% Adobe RGB.",
    price: "₹79,999",
    image: "/monitor7.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "LG UltraFine 32UN880-B",
    description: "32-inch 4K USB-C monitor with ergonomic stand and HDR10 support.",
    price: "₹59,999",
    image: "/monitor8.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "ViewSonic Elite XG270QG",
    description: "27-inch 1440p 165Hz Nano-IPS monitor with G-SYNC and customizable RGB lighting.",
    price: "₹42,999",
    image: "/monitor9.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "Philips 275M1RZ",
    description: "27-inch 1440p 170Hz monitor with Ambiglow lighting and HDR400 support.",
    price: "₹31,999",
    image: "/monitor10.png",
    rating: 4.4,
    link: "#",
  },
];

const cabinets = [
  {
    title: "NZXT H710i Mid Tower",
    description: "Premium mid-tower case with tempered glass panel and smart lighting control.",
    price: "₹14,999",
    image: "/cabinet1.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "Corsair iCUE 4000X RGB",
    description: "Mid-tower case with three SP120 RGB fans and crystal-clear tempered glass.",
    price: "₹12,499",
    image: "/cabinet2.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "Fractal Design Define 7",
    description: "Silent mid-tower case with modular interior and excellent cable management.",
    price: "₹14,199",
    image: "/cabinet3.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "Cooler Master MasterBox TD500",
    description: "Mesh front panel case with three ARGB fans and optimized airflow design.",
    price: "₹8,499",
    image: "/cabinet4.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "Lian Li PC-O11 Dynamic",
    description: "Popular dual-chamber case perfect for custom water cooling builds.",
    price: "₹11,699",
    image: "/cabinet5.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "Phanteks Eclipse P500A",
    description: "High-airflow case with mesh front panel and RGB lighting support.",
    price: "₹13,999",
    image: "/cabinet6.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "be quiet! Pure Base 500DX",
    description: "Silent case with tempered glass and three pre-installed Pure Wings 2 fans.",
    price: "₹10,999",
    image: "/cabinet7.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "ASUS TUF Gaming GT501",
    description: "E-ATX case with military-inspired design and three tempered glass panels.",
    price: "₹15,999",
    image: "/cabinet8.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "Corsair 5000D AIRFLOW",
    description: "Premium airflow-focused case with two included fans and spacious interior.",
    price: "₹16,499",
    image: "/cabinet9.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "NZXT H510 Flow",
    description: "Improved airflow version of the popular H510 with perforated front panel.",
    price: "₹9,999",
    image: "/cabinet10.png",
    rating: 4.5,
    link: "#",
  },
];

const processors = [
  {
    title: "AMD Ryzen 9 7950X",
    description: "16-core flagship processor with incredible multi-threading performance for content creation.",
    price: "₹49,999",
    image: "/cpu1.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "Intel Core i9-13900K",
    description: "24-core hybrid architecture processor with leading gaming and productivity performance.",
    price: "₹45,999",
    image: "/cpu2.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "AMD Ryzen 7 7700X",
    description: "8-core gaming powerhouse with excellent single-thread performance and efficiency.",
    price: "₹29,999",
    image: "/cpu3.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "Intel Core i5-13600K",
    description: "14-core processor offering great gaming performance and multitasking capabilities.",
    price: "₹24,999",
    image: "/cpu4.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "AMD Ryzen 5 7600X",
    description: "6-core gaming processor with impressive performance per dollar value.",
    price: "₹20,999",
    image: "/cpu5.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "Intel Core i7-13700K",
    description: "16-core processor with hybrid architecture for gaming and content creation.",
    price: "₹37,999",
    image: "/cpu6.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "AMD Ryzen 9 7900X",
    description: "12-core processor with Zen 4 architecture and 76MB total cache.",
    price: "₹39,999",
    image: "/cpu7.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "Intel Core i3-13100F",
    description: "Budget quad-core processor with excellent single-thread performance.",
    price: "₹12,999",
    image: "/cpu8.png",
    rating: 4.4,
    link: "#",
  },
  {
    title: "AMD Ryzen 7 5800X3D",
    description: "8-core processor with 3D V-Cache technology for gaming performance.",
    price: "₹32,999",
    image: "/cpu9.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "Intel Core i5-12400F",
    description: "6-core budget processor with excellent gaming performance.",
    price: "₹16,999",
    image: "/cpu10.png",
    rating: 4.5,
    link: "#",
  },
];

const smps = [
  {
    title: "Corsair RM850x (2021)",
    description: "Fully modular 80 PLUS Gold certified PSU with low-noise fan and premium Japanese capacitors.",
    price: "₹12,499",
    image: "/smps1.png",
    rating: 4.9,
    link: "#",
  },
  {
    title: "Seasonic Prime TX-1000",
    description: "1000W 80 PLUS Titanium PSU with fanless mode and ultra-low ripple noise.",
    price: "₹23,999",
    image: "/smps2.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "EVGA SuperNOVA 750 G5",
    description: "750W fully modular 80 PLUS Gold power supply with ECO mode and compact design.",
    price: "₹10,799",
    image: "/smps3.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "Cooler Master V850 SFX Gold",
    description: "850W SFX fully modular PSU with 80 PLUS Gold efficiency and silent 92mm fan.",
    price: "₹14,999",
    image: "/smps4.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "NZXT C650",
    description: "650W semi-modular PSU with 80 PLUS Gold certification and a quiet fluid dynamic bearing fan.",
    price: "₹8,299",
    image: "/smps5.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "ASUS ROG Thor 1200W Platinum",
    description: "1200W fully modular PSU with OLED power display and addressable RGB lighting.",
    price: "₹29,999",
    image: "/smps6.png",
    rating: 4.9,
    link: "#",
  },
  {
    title: "be quiet! Straight Power 11 1000W",
    description: "1000W Platinum PSU with silent operation and high-quality components.",
    price: "₹18,999",
    image: "/smps7.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "Antec HCG 750 Gold",
    description: "750W fully modular PSU with 80 PLUS Gold efficiency and 135mm FDB fan.",
    price: "₹9,999",
    image: "/smps8.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "Deepcool PQ750M",
    description: "750W fully modular PSU with 80 PLUS Gold certification and Japanese capacitors.",
    price: "₹8,999",
    image: "/smps9.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "Thermaltake Toughpower GF1 850W",
    description: "850W fully modular PSU with 80 PLUS Gold efficiency and smart zero fan.",
    price: "₹11,499",
    image: "/smps10.png",
    rating: 4.7,
    link: "#",
  },
];

const coolers = [
  {
    title: "Noctua NH-D15",
    description: "Premium dual-tower air cooler with excellent thermal performance and ultra-quiet operation.",
    price: "₹8,299",
    image: "/cooler1.png",
    rating: 4.9,
    link: "#",
  },
  {
    title: "Corsair iCUE H150i Elite Capellix",
    description: "360mm AIO liquid CPU cooler with RGB lighting and powerful cooling for overclocked CPUs.",
    price: "₹15,799",
    image: "/cooler2.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "be quiet! Dark Rock Pro 4",
    description: "High-end air cooler with near-silent fans and premium cooling for high-performance CPUs.",
    price: "₹7,499",
    image: "/cooler3.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "NZXT Kraken X63 RGB",
    description: "280mm AIO liquid cooler with RGB pump and reinforced extended tubing for durability.",
    price: "₹12,999",
    image: "/cooler4.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "Arctic MX-6 Thermal Compound",
    description: "High-performance thermal paste with excellent conductivity and long-lasting stability.",
    price: "₹899",
    image: "/cooler5.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "Cooler Master Hyper 212 RGB",
    description: "Popular budget air cooler with direct contact heat pipes and RGB lighting.",
    price: "₹3,499",
    image: "/cooler6.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "Deepcool AK620",
    description: "Dual-tower air cooler with six heat pipes and two 120mm PWM fans.",
    price: "₹5,999",
    image: "/cooler7.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "Lian Li GALAHAD AIO 240",
    description: "240mm AIO cooler with RGB lighting and high-performance pump design.",
    price: "₹13,499",
    image: "/cooler8.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "Thermalright Peerless Assassin 120",
    description: "Dual-tower air cooler with six heat pipes and two TL-C12C fans.",
    price: "₹6,499",
    image: "/cooler9.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "Antec A40 Pro",
    description: "Budget air cooler with four heat pipes and blue LED fan.",
    price: "₹2,199",
    image: "/cooler10.png",
    rating: 4.3,
    link: "#",
  },
];

const mice = [
  {
    title: "Logitech G Pro X Superlight",
    description: "Ultra-lightweight wireless gaming mouse with HERO 25K sensor and up to 70 hours battery life.",
    price: "₹12,499",
    image: "/mouse1.png",
    rating: 4.9,
    link: "#",
  },
  {
    title: "Razer DeathAdder V3 Pro",
    description: "Ergonomic wireless gaming mouse with 30K optical sensor and Razer HyperSpeed wireless technology.",
    price: "₹12,499",
    image: "/mouse2.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "Glorious Model O",
    description: "Honeycomb lightweight wired gaming mouse with Ascended cable and G-Skates feet.",
    price: "₹6,699",
    image: "/mouse3.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "SteelSeries Aerox 5 Wireless",
    description: "Ultra-lightweight multi-genre gaming mouse with AquaBarrier protection and 180-hour battery life.",
    price: "₹11,699",
    image: "/mouse4.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "Corsair M65 RGB Ultra",
    description: "Adjustable-weight FPS gaming mouse with 26K DPI sensor and tilt gesture controls.",
    price: "₹8,299",
    image: "/mouse5.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "Razer Viper Mini",
    description: "Ultra-lightweight wired gaming mouse with 8500 DPI optical sensor and RGB lighting.",
    price: "₹3,999",
    image: "/mouse6.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "Logitech G502 HERO",
    description: "Popular wired gaming mouse with adjustable weights and HERO 25K sensor.",
    price: "₹5,499",
    image: "/mouse7.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "ASUS ROG Keris Wireless",
    description: "Lightweight wireless gaming mouse with push-fit switch sockets and 79g weight.",
    price: "₹9,999",
    image: "/mouse8.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "HyperX Pulsefire Haste",
    description: "Ultra-lightweight wired mouse with honeycomb shell and TTC Golden switches.",
    price: "₹4,999",
    image: "/mouse9.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "Cooler Master MM720",
    description: "Ultra-lightweight wired mouse with honeycomb shell and ergonomic design.",
    price: "₹3,499",
    image: "/mouse10.png",
    rating: 4.4,
    link: "#",
  },
];

const keyboards = [
  {
    title: "Keychron K8 Pro",
    description: "Wireless mechanical keyboard with hot-swappable switches and QMK/VIA support.",
    price: "₹8,299",
    image: "/keyboard1.png",
    rating: 4.9,
    link: "#",
  },
  {
    title: "Razer Huntsman V2",
    description: "Optical mechanical gaming keyboard with near-zero input latency and Doubleshot PBT keycaps.",
    price: "₹16,699",
    image: "/keyboard2.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "Logitech G915 TKL",
    description: "Wireless low-profile mechanical keyboard with LIGHTSPEED connectivity and RGB lighting.",
    price: "₹19,199",
    image: "/keyboard3.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "SteelSeries Apex Pro",
    description: "Adjustable mechanical switches with OLED smart display and premium aluminum frame.",
    price: "₹16,699",
    image: "/keyboard4.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "Corsair K70 RGB MK.2",
    description: "Mechanical keyboard with per-key RGB lighting and Cherry MX switches.",
    price: "₹13,299",
    image: "/keyboard5.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "Royal Kludge RK84",
    description: "Compact 75% wireless mechanical keyboard with hot-swappable switches and RGB backlight.",
    price: "₹7,999",
    image: "/keyboard6.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "Ducky One 3 Mini",
    description: "60% mechanical keyboard with PBT keycaps and customizable RGB lighting.",
    price: "₹10,499",
    image: "/keyboard7.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "HyperX Alloy Origins Core",
    description: "Tenkeyless mechanical keyboard with HyperX switches and aircraft-grade aluminum frame.",
    price: "₹9,999",
    image: "/keyboard8.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "ASUS ROG Strix Scope RX",
    description: "Full-size mechanical keyboard with RX optical switches and ergonomic design.",
    price: "₹12,999",
    image: "/keyboard9.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "Razer BlackWidow V3",
    description: "Mechanical gaming keyboard with Razer Green switches and doubleshot ABS keycaps.",
    price: "₹11,999",
    image: "/keyboard10.png",
    rating: 4.5,
    link: "#",
  },
];

const ups = [
  {
    title: "APC Back-UPS Pro 1500VA",
    description: "Line-interactive UPS with LCD display, 10 outlets, and AVR for stable power supply.",
    price: "₹20,999",
    image: "/ups1.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "CyberPower CP1500PFCLCD",
    description: "1500VA/1000W pure sine wave UPS with LCD display and automatic voltage regulation.",
    price: "₹18,299",
    image: "/ups2.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "APC Back-UPS 600VA",
    description: "Compact UPS with battery backup and surge protection for small electronics and PCs.",
    price: "₹6,699",
    image: "/ups3.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "Eaton 5SC1500",
    description: "1500VA line-interactive UPS with LCD interface and high energy efficiency.",
    price: "₹24,999",
    image: "/ups4.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "Vertiv Liebert PSA5 1000VA",
    description: "Energy-efficient UPS with AVR, USB connectivity, and surge protection.",
    price: "₹13,299",
    image: "/ups5.png",
    rating: 4.4,
    link: "#",
  },
  {
    title: "Microtek Legend 1100",
    description: "1100VA line-interactive UPS with pure sine wave output and LCD display.",
    price: "₹9,999",
    image: "/ups6.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "Zebronics Zeb-U725",
    description: "725VA UPS with simulated sine wave and 6 output sockets.",
    price: "₹4,999",
    image: "/ups7.png",
    rating: 4.3,
    link: "#",
  },
  {
    title: "Luminous Eco Volt+ 1050",
    description: "1050VA UPS with pure sine wave output and intelligent battery management.",
    price: "₹11,499",
    image: "/ups8.png",
    rating: 4.4,
    link: "#",
  },
  {
    title: "V-Guard UPS 600",
    description: "600VA UPS with automatic voltage regulation and surge protection.",
    price: "₹5,499",
    image: "/ups9.png",
    rating: 4.2,
    link: "#",
  },
  {
    title: "HP Power Pro 1000VA",
    description: "1000VA line-interactive UPS with LCD display and pure sine wave output.",
    price: "₹14,999",
    image: "/ups10.png",
    rating: 4.5,
    link: "#",
  },
];

const portableStorage = [
  {
    title: "SanDisk Ultra Dual Drive Luxe 128GB",
    description: "USB 3.1 Type-C & Type-A dual interface with metal design for fast file transfers.",
    price: "₹2,099",
    image: "/storage1.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "Samsung BAR Plus 64GB",
    description: "Metal USB 3.1 flash drive with up to 300MB/s read speed and rugged durability.",
    price: "₹1,299",
    image: "/storage2.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "Kingston DataTraveler Exodia 256GB",
    description: "High-capacity USB 3.2 flash drive with protective cap and keyring loop.",
    price: "₹3,299",
    image: "/storage3.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "SanDisk Extreme PRO 128GB SDXC",
    description: "UHS-I U3 Class 10 SD card with up to 170MB/s read and 90MB/s write speeds.",
    price: "₹2,899",
    image: "/storage4.png",
    rating: 4.9,
    link: "#",
  },
  {
    title: "Lexar Professional 256GB SDXC",
    description: "UHS-II V90 high-speed SD card ideal for 4K/8K video recording.",
    price: "₹12,499",
    image: "/storage5.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "WD My Passport 2TB",
    description: "Portable HDD with password protection and automatic backup software.",
    price: "₹6,999",
    image: "/storage6.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "Samsung T7 Shield 1TB",
    description: "Rugged portable SSD with IP65 rating and up to 1050MB/s transfer speeds.",
    price: "₹8,999",
    image: "/storage7.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "SanDisk Extreme Portable 500GB",
    description: "Portable SSD with up to 1050MB/s speeds and IP55 water/dust resistance.",
    price: "₹5,499",
    image: "/storage8.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "Seagate Backup Plus Slim 1TB",
    description: "Slim portable HDD with automatic backup and password protection.",
    price: "₹4,299",
    image: "/storage9.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "Kingston XS2000 1TB",
    description: "Pocket-sized portable SSD with USB 3.2 Gen 2x2 interface (2000MB/s).",
    price: "₹9,999",
    image: "/storage10.png",
    rating: 4.7,
    link: "#",
  },
];

const cablesAdapters = [
  {
    title: "AmazonBasics High-Speed HDMI Cable 6ft",
    description: "Supports 4K Ultra HD, 3D, and Ethernet with durable build quality.",
    price: "₹899",
    image: "/cable1.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "Cable Matters DisplayPort 1.4 Cable 6ft",
    description: "Supports 8K @ 60Hz, HDR, and high refresh rates for gaming monitors.",
    price: "₹1,299",
    image: "/cable2.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "StarTech SATA III Cable 18-inch",
    description: "High-speed SATA 6Gbps cable with locking latch for secure connections.",
    price: "₹499",
    image: "/cable3.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "Anker USB-C to USB-A 3.1 Cable 3ft",
    description: "Supports fast charging and up to 5Gbps data transfer speeds.",
    price: "₹999",
    image: "/cable4.png",
    rating: 4.8,
    link: "#",
  },
  {
    title: "UGREEN USB-C to HDMI Adapter",
    description: "Connects USB-C devices to HDMI displays with 4K @ 60Hz output.",
    price: "₹1,599",
    image: "/cable5.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "Belkin Thunderbolt 4 Cable 2m",
    description: "40Gbps Thunderbolt 4 cable with 100W power delivery and 8K video support.",
    price: "₹3,999",
    image: "/cable6.png",
    rating: 4.9,
    link: "#",
  },
  {
    title: "CableCreation USB 3.0 Extension Cable",
    description: "3m extension cable with gold-plated connectors for reliable signal transfer.",
    price: "₹699",
    image: "/cable7.png",
    rating: 4.5,
    link: "#",
  },
  {
    title: "Anker PowerLine+ USB-C to USB-C 100W",
    description: "6ft USB-C cable supporting 100W power delivery and 10Gbps data transfer.",
    price: "₹1,299",
    image: "/cable8.png",
    rating: 4.7,
    link: "#",
  },
  {
    title: "JSAUX 8K HDMI Cable 10ft",
    description: "Ultra high-speed HDMI cable supporting 8K@60Hz and 48Gbps bandwidth.",
    price: "₹1,899",
    image: "/cable9.png",
    rating: 4.6,
    link: "#",
  },
  {
    title: "StarTech USB-C to Dual HDMI Adapter",
    description: "Connect USB-C laptop to dual HDMI monitors (up to 4K@30Hz each).",
    price: "₹4,999",
    image: "/cable10.png",
    rating: 4.5,
    link: "#",
  },
];




  const categories = [
    { name: "Processors", data: processors, icon: "⚡", id: "processors" },
    { name: "Mother Board", data: motherboard, icon: "🔧", id: "motherboard" },
    { name: "Graphics Card", data: graphics, icon: "🎮", id: "graphics" },
    { name: "RAM", data: ram, icon: "💾", id: "ram" },
    { name: "SSD-HDD", data: storage, icon: "💽", id: "storage" },
    { name: "Monitor", data: monitors, icon: "🖥️", id: "monitor" },
    { name: "Cabinet", data: cabinets, icon: "🏠", id: "cabinet" },
    { name: "SMPS", data: smps, icon: "🔌", id: "smps" },
    { name: "Coolers", data: coolers, icon: "❄️", id: "coolers" },
    { name: "Mouse", data: mice, icon: "🖱️", id: "mouse" },
    { name: "Keyboard", data: keyboards, icon: "⌨️", id: "keyboard" },
    { name: "UPS", data: ups, icon: "🔋", id: "ups" },
    { name: "USB & SD Card", data: portableStorage, icon: "💾", id: "portable-storage" },
    { name: "Cables & Adapters", data: cablesAdapters, icon: "🔌", id: "cables-adapters" },

  ];

  const scrollLeft = (containerId) => {
    const container = document.getElementById(containerId);
    container.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = (containerId) => {
    const container = document.getElementById(containerId);
    container.scrollBy({ left: 300, behavior: "smooth" });
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
        {category.data.map((product, index) =>
          renderProductCard(product, index)
        )}
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

        {categories.map((category) => renderCategorySection(category))}
      </div>
    </div>
  );
}
