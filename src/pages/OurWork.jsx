import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';

const WEEBLY_BASE = 'https://harish-portfolio.weebly.com';

export default function OurWork() {
  return (
    <main>
      {/* ===== PAGE HERO ===== */}
      <section
        className="page-hero"
        style={{
          backgroundImage: `url('${WEEBLY_BASE}/uploads/1/4/8/4/148408434/background-images/117697527.jpg')`,
          backgroundPosition: '0% 68.73%',
          backgroundSize: '110%',
        }}
      >
        <div className="page-hero-content">
          <p className="breadcrumb">WHAT WE DO</p>
          <h1>Our Work</h1>
        </div>
      </section>

      {/* ===== IMAGE GALLERY GRID ===== */}
      <section className="work-gallery-section">
        <div className="container">
          <RevealOnScroll>
            <div className="work-gallery-grid">
              {/* Row 1: large left + 2x2 grid right */}
              <div className="work-gallery-row two-cols">
                <div className="work-gallery-item">
                  <img
                    src={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/img-5-full_2_orig.jpg`}
                    alt="Portfolio work 1"
                    loading="lazy"
                  />
                </div>
                <div className="work-inner-grid work-inner-2col">
                  <div className="work-gallery-item">
                    <img
                      src={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/img-1-full_4.jpg`}
                      alt="Portfolio work 2"
                      loading="lazy"
                    />
                  </div>
                  <div className="work-gallery-item">
                    <img
                      src={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/img-3-full_3_orig.jpg`}
                      alt="Portfolio work 3"
                      loading="lazy"
                    />
                  </div>
                  <div className="work-gallery-item">
                    <img
                      src={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/oikos_2.jpg`}
                      alt="Portfolio work 4"
                      loading="lazy"
                    />
                  </div>
                  <div className="work-gallery-item">
                    <img
                      src={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/img-4-full_3_orig.jpg`}
                      alt="Portfolio work 5"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: small left + large right */}
              <div className="work-gallery-row three-cols">
                <div className="work-gallery-item">
                  <img
                    src={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/img-6-full_3_orig.jpg`}
                    alt="Portfolio work 6"
                    loading="lazy"
                  />
                </div>
                <div className="work-gallery-item">
                  <img
                    src={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/img-7-full_1_orig.jpg`}
                    alt="Portfolio work 7"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SOLUTIONS SECTION ===== */}
      <section className="solutions-section">
        <div className="container">
          <RevealOnScroll>
            <div className="solutions-grid">
              <div className="solutions-content">
                <h2>Unique and elegant solutions</h2>
                <div className="divider"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco.
                </p>
                <button className="btn-highlight">Get Started</button>
              </div>
              <div className="work-gallery-item" style={{ borderRadius: '12px' }}>
                <img
                  src={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/img-8-full_3_orig.png`}
                  alt="Elegant solutions"
                  loading="lazy"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== FOOTER NAVIGATION ===== */}
      <section className="footer-nav-section">
        <div className="container">
          <div className="footer-nav-links">
            <Link to="/">HOME</Link>
            <Link to="/our-work">PORTFOLIO</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
