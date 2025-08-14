import Navbar from "../components/navbar/page";
import './about.css';

export default function AboutUs() {
  return (
    <div className="about-container">
      <Navbar />
      
      <main className="about-main">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <h1 className="about-hero-title">
            <span>About</span><span className="g"> G</span>earGrid</h1>
            <p className="about-hero-subtitle"> <b>
              Your trusted partner for high-performance computer parts and gaming hardware </b>
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="about-section">
          <div className="about-content-wrapper">
            <div className="about-grid">
              <div className="about-text">
                <h2 className="about-section-title">Our Story</h2>
                <p className="about-paragraph"><b>
                  Founded with a passion for technology and gaming, GearGrid has been serving 
                  enthusiasts and professionals alike with top-quality computer components. 
                  We understand that every build matters, whether you're a casual gamer, 
                  content creator, or professional developer.</b>
                </p>
                <p className="about-paragraph">
                  <b> Our mission is simple: provide the latest and greatest hardware at 
                  competitive prices, backed by exceptional customer service. From high-end 
                  graphics cards to lightning-fast SSDs, we curate only the best components 
                  for your perfect build.</b>
                </p>
              </div>
              <div className="about-image">
                <div className="about-image-placeholder">
                  <span className="about-image-icon">🖥️</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values-section">
          <div className="about-content-wrapper">
            <h2 className="about-section-title">Why Choose GearGrid?</h2>
            <div className="about-values-grid">
              <div className="about-value-card">
                <div className="about-value-icon">⚡</div>
                <h3 className="about-value-title">Performance First</h3>
                <p className="about-value-description"><b>
                  We stock only the highest performing components from trusted brands 
                  to ensure your system runs at peak efficiency.</b>
                </p>
              </div>
              <div className="about-value-card">
                <div className="about-value-icon">🛡️</div>
                <h3 className="about-value-title">Quality Assurance</h3>
                <p className="about-value-description"><b>
                  Every product undergoes rigorous testing and comes with manufacturer 
                  warranties for your peace of mind.</b>
                </p>
              </div>
              <div className="about-value-card">
                <div className="about-value-icon">🚀</div>
                <h3 className="about-value-title">Fast Delivery</h3>
                <p className="about-value-description"><b>
                  Get your components quickly with our expedited shipping options 
                  and reliable logistics partners.</b>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="about-description-section">
          <div className="about-content-wrapper">
            <h2 className="about-section-title">About GearGrid</h2>
            <p className="about-description"><b>
              GearGrid is your premier destination for high-quality computer components 
              and gaming hardware. We specialize in providing cutting-edge technology 
              solutions for gamers, content creators, and PC enthusiasts. From powerful 
              graphics cards like the RTX 4090 to lightning-fast SSDs and high-performance 
              processors, we offer a comprehensive selection of components to build your 
              dream PC. Our commitment to quality ensures that every product meets the 
              highest standards, backed by manufacturer warranties and our dedicated 
              customer support team.</b>
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta-section">
          <div className="about-content-wrapper">
            <h2 className="about-cta-title">Ready to Build Your Dream PC?</h2>
            <p className="about-cta-description">
              Explore our extensive catalog of premium computer components and 
              start building your perfect system today.
            </p>
            <a href="/shop" className="about-cta-button">Shop Now</a>
          </div>
        </section>
      </main>

      <footer className="about-footer">
        <div className="about-content-wrapper">
          <p>&copy; 2025 GearGrid. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}