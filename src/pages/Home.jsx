import RevealOnScroll from '../components/RevealOnScroll';
import ProjectSection from '../components/ProjectSection';
import YouTubeEmbed from '../components/YouTubeEmbed';
import ImageGallery from '../components/ImageGallery';
import LazyImage from '../components/LazyImage';
import ResearchSection from '../components/ResearchSection';

const WEEBLY_BASE = 'https://harish-portfolio.weebly.com';

export default function Home() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section
        className="hero"
        style={{
          backgroundImage: `url('${WEEBLY_BASE}/uploads/1/4/8/4/148408434/background-images/1995618105.png')`,
        }}
      >
        <div className="hero-content">
          <h1>HARISH KUMAR</h1>
          <div className="hero-divider"></div>
          <p className="hero-subtitle">SENIOR 3D ENVIRONMENT & GENERALIST ARTIST</p>
          
          <div className="hero-tags">
            <span>XR</span>
            <span>•</span>
            <span>UNITY</span>
            <span>•</span>
            <span>UNREAL ENGINE 5</span>
          </div>

          <div className="hero-actions">
            <a href="#featured-projects" className="hero-btn-primary">
              View Work
            </a>
            <a href="/contact" className="hero-btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <a href="#about-me" className="hero-scroll-indicator" aria-label="Scroll to about me section">
          <span>Scroll</span>
          <div className="scroll-arrow">↓</div>
        </a>
      </section>

      {/* ===== ABOUT ME ===== */}
      <section className="about-me-section" id="about-me">
        <div className="container">
          <RevealOnScroll>
            <h2>ABOUT&nbsp;ME</h2>
            <p className="about-text">
              Senior 3D Environment & Generalist Artist with 4+ years of end-to-end experience in Unity VR/AR/MR, Unreal Engine cinematics, immersive simulations, digital twins, and real-time archviz visualization. Proven ability to architect highly optimized, standalone VR simulations for enterprise clients — including a 5 km real-world traffic replication and behavioral research deployed to pediatric participants with zero critical failures. Published independent researcher (Springer Nature, under peer review). Skilled in Unity XR Toolkit, UE5 Sequencer, Blender, 3ds Max, and Substance Painter, with deep expertise in LOD management, procedural shaders, draw-call mitigation, and performance-driven VR workflows.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== PROJECTS HEADER ===== */}
      <section className="section section-dark" id="featured-projects" style={{ paddingBottom: 0 }}>
        <div className="container">
          <RevealOnScroll>
            <h2 className="project-section-title">
              Featured Projects
            </h2>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== 1. MADURAI 1658 ===== */}
      <ProjectSection
        bgClass="section-alt"
        title="MADURAI - 1658"
        subtitle="Historic Theppakulam Recreation – Marlion Technologies"
        bullets={[
          'Recreated the 17th-century Theppakulam of Madurai in Unreal Engine 5.6, built entirely from scratch using historical and on-site references.',
          'Modeled and textured all architectural and environmental assets manually, using custom shaders for vegetation and water dynamics.',
          'Implemented Blueprints for procedural placement, wind animation, and fish simulation, ensuring both cultural authenticity and technical realism.',
          'Created a Pandiyan warrior character using MetaHuman, designing custom clothing and ornaments, texturing in Substance Painter, and completing skin weighting for integration into the environment.',
        ]}
        image={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/published/screenshot-2025-10-14-235714.png?1760555097`}
        youtubeId="kIIVA94g4rM"
        galleryImages={[
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/img-20251004-130205-881.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/img-20251004-130205-881_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/photo-2025-10-16-01-02-37.jpg`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/photo-2025-10-16-01-02-37_orig.jpg`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-07-23-184017-2.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-07-23-184017-2_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-07-23-184109-2.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-07-23-184109-2_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-07-23-185009-2.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-07-23-185009-2_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/inshot-20251016-011218842.jpg`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/inshot-20251016-011218842_orig.jpg`,
          },
        ]}
      />

      {/* ===== 2. AUTISM VR ===== */}
      <section className="section section-darker project-section">
        <div className="container">
          <RevealOnScroll>
            <div className="project-block">
              <div className="project-info">
                <h3>Autism VR</h3>
                <p className="project-subtitle">Autism VR ADL Simulation — UmayAssist (India, 2026)</p>
                <ul>
                  <li>Utilized Unity's URP, adaptive light probes, and rigorous Level of Detail (LOD) management to maintain stutter-free realism with dynamic crowd simulations.</li>
                  <li>Scripted custom edge-based JSON telemetry to monitor memory allocation and stabilize framerates under heavy computational loads.</li>
                  <li>Modeled and textured custom 3D assets from scratch—including regional FMCG products and transit interfaces—utilizing strict poly-count optimization, efficient UV packing, and custom materials tailored for standalone VR performance.</li>
                </ul>
              </div>
              <div className="project-image">
                <LazyImage src={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/published/d.png?1780599927`} alt="Autism VR" />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="media-row">
              <div>
                <YouTubeEmbed videoId="l_hPLftcF4k" />
              </div>
              <div>
                <ImageGallery images={[
                  { thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2026-06-04-184708.png`, full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2026-06-04-184708_orig.png` },
                  { thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2026-06-04-191537.png`, full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2026-06-04-191537_orig.png` },
                  { thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2026-06-04-184723.png`, full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2026-06-04-184723_orig.png` },
                  { thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2026-06-04-184737.png`, full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2026-06-04-184737_orig.png` },
                ]} cols={2} />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== 3. APOLLO TYRES ===== */}
      <ProjectSection
        bgClass="section-dark"
        title="APOLLO TYRES"
        subtitle="Digital Twin & Logistics Simulation – Apollo Tyres (Ongoing)"
        bullets={[
          "Currently developing a real-time digital twin of Apollo's Chennai factory in Unity, showcasing live machine operations and logistics flow.",
          'Conducted on-site visits to gather measurements and process data for accurate replication.',
          'Focusing on asset optimization, baked lighting, and custom shaders to achieve realistic visuals with stable runtime performance.',
        ]}
        image={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-23-105610-2_orig.png`}
        galleryImages={[
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-24-121118-2.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-24-121118-2_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-24-121715-2.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-24-121715-2_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-24-120729-2.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-24-120729-2_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-23-105610-2.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-23-105610-2_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-23-105703-2.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-23-105703-2_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-23-105456-2.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-09-23-105456-2_orig.png`,
          },
        ]}
      />

      {/* ===== 4. DENSO VEHICLE SIM ===== */}
      <ProjectSection
        bgClass="section-darker"
        title="DENSO: VEHICLE SIM"
        subtitle="Large-Scale Traffic Simulation & Hardware Integration — Cross-Platform Architecture (PCVR & Desktop)"
        bullets={[
          'Led the design of a large-scale (5 km) car and motorcycle traffic simulation with dual cross-platform deployment for PCVR headsets and standard desktop architectures, replicating real-world Bangalore road conditions.',
          'Integrated dual hardware input setups: physical steering wheel controllers for car driving, and custom IoT sensor-rigged actual motorcycle handlebar inputs built with the IoT hardware team.',
          'Implemented cloud-connected employee login and post-session telemetry data transfer pipeline for research analytics.',
          'Co-developed vehicle mechanics and telemetry systems alongside leading all 3D environment design, asset optimization, and custom shaders.',
        ]}
        image="/denso_bike_2.png"
        youtubeId="7clGrV4JmJ8"
        galleryCols={2}
        galleryImages={[
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-120026.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-120026_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-115938.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-115938_orig.png`,
          },
          {
            thumb: '/denso_bike_1.png',
            full: '/denso_bike_1.png',
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-122053.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-122053_orig.png`,
          },
        ]}
      />

      {/* ===== 5. AK RACING ===== */}
      <ProjectSection
        bgClass="section-alt2"
        title="AK RACING"
        subtitle="Racing Car Cinematic – Unreal Engine"
        bullets={[
          "Recreated Ajithkumar's racing car with detailed modeling and PBR texturing in Substance Painter, including realistic surface details and decals.",
          "Produced cinematic sequences with extensive racing animations using Unreal Engine's Sequencer, incorporating dynamic cameras, vehicle motion, and path-traced rendering for high-fidelity visuals.",
          'Enhanced realism through custom shaders, lighting, and post-processing, delivering a polished and immersive cinematic experience.',
        ]}
        image={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-01-27-231718_orig.png`}
        youtubeId="8p6TowUeHWQ"
        galleryCols={2}
        galleryImages={[
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-01-28-230857.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-01-28-230857_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-01-29-202736-orig.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-01-29-202736-orig_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-16-022039.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-16-022039_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-05-29-214543.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-05-29-214543_orig.png`,
          },
        ]}
      />

      {/* ===== 6. KARTHICK COTTAGE ===== */}
      <ProjectSection
        bgClass="section-dark"
        title="KARTHICK COTTAGE"
        subtitle="VR Interior Walkthrough – Karthick Cottage"
        bullets={[
          'Designed and developed a real-time VR interior walkthrough based on 2D architectural plans, optimized for both desktop and mobile platforms.',
          'Modeled the complete interior with efficient light builds and asset optimization for smooth performance.',
          'Collaborated with the XR integration team to implement interactive features and ensure cross-platform stability.',
        ]}
        image={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/published/screenshot-2025-10-16-011902.png?1760557822`}
        youtubeId="io6MFmHkcdg"
        galleryImages={[
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-232222.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-232222_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-232250.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-232250_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-232312.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-232312_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-232341.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-232341_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-232407.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-232407_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-16-011711.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-16-011711_orig.png`,
          },
        ]}
      />

      {/* ===== 7. AK BUILDERS ===== */}
      <ProjectSection
        bgClass="section-alt2"
        title="AK BUILDERS"
        subtitle="G+3 Apartment Visualization – AK Builders (2023)"
        bullets={[
          'Developed complete elevation, interior design, and floor plans for a G+3 apartment using 2D layouts as reference.',
          'Modeled all architectural and interior elements in 3ds Max, creating detailed textures and materials for realistic presentation.',
          'Rendered high-quality visuals for brochures and marketing, ensuring accurate representation of space, lighting, and finishes.',
          'Collaborated closely with the client to refine design aesthetics and layout for maximum visual impact.',
        ]}
        image={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/published/w6-finalimage-0001.jpg?1760558024`}
        galleryImages={[
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/3bhk-3d.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/3bhk-3d_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/2bhk-east-3d.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/2bhk-east-3d_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/2bhk-north-3d.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/2bhk-north-3d_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/2-4.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/2-4_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/mhghgjh.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/mhghgjh_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-234221.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-10-15-234221_orig.png`,
          },
        ]}
      />

      {/* ===== 8. UNITY SHADERS ===== */}
      <ProjectSection
        bgClass="section-dark"
        title="UNITY SHADERS"
        subtitle="Procedural vs Image Textures – Unity Visual Shader"
        bullets={[
          'Built two complete scenes in Unity: one using image textures and the other using a large procedural shader covering concrete, brick, stone, steel, rust, and dust overlays.',
          'Compared image quality while analyzing performance, optimization, and suitability for VR and mobile devices.',
          'Focused on package size, build size, GPU usage, and custom shader parameters to achieve scalable, VR-friendly visuals with stable runtime performance.',
          'Recorded package and build sizes: Procedural – 182 MB package | 386 MB build; Image Texture – 461 MB package | 386 MB build.',
        ]}
        image={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2025-06-07-163624-4_orig.png`}
        galleryImages={[
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/photo-2025-10-17-01-48-37.jpg`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/photo-2025-10-17-01-48-37_orig.jpg`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/photo-2025-10-17-01-48-41.jpg`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/photo-2025-10-17-01-48-41_orig.jpg`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/photo-2025-10-17-01-48-23.jpg`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/photo-2025-10-17-01-48-23_orig.jpg`,
          },
        ]}
      />

      {/* ===== 9. OTHER WORKS (Mathikettan Solai, ISRO, 3D Products) ===== */}
      <ProjectSection
        bgClass="section-alt2"
        title="OTHER WORKS"
        bullets={[
          'Woods – Mathikettan Solai VR Cinematic: Created a cinematic VR experience in Unreal Engine, featuring real-time character animation, environmental storytelling, and immersive VFX.',
          'ISRO Launch Recreation – Unreal Engine 5: Developed a real-time simulation of a rocket launch with accurate sky, lighting, and motion dynamics for cinematic presentation.',
          '3D Product & Weapon Visualizations: Modeled and textured assets including futuristic weapons and product cans, using Blender/Substance Painter for realistic PBR materials.',
        ]}
        image={`${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2024-12-17-182911.png`}
        youtubeId="jPNUL_kHXDM"
        galleryImages={[
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/3-4.jpg`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/3-4_orig.jpg`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/1-6.jpg`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/1-6_orig.jpg`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/cake1.jpg`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/cake1_orig.jpg`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/cake3.jpg`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/cake3_orig.jpg`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2024-12-17-182911.png`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/screenshot-2024-12-17-182911_orig.png`,
          },
          {
            thumb: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/5.jpg`,
            full: `${WEEBLY_BASE}/uploads/1/4/8/4/148408434/5_orig.jpg`,
          },
        ]}
      />

      {/* ===== OTHER WORKS extra video row ===== */}
      <section className="section section-alt2" style={{ paddingTop: 0 }}>
        <div className="container">
          <RevealOnScroll>
            <div className="media-row">
              <div>
                <YouTubeEmbed videoId="qtHk8_H44FA" />
              </div>
              <div></div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== PUBLISHED RESEARCH ===== */}
      <ResearchSection />

      {/* ===== SOFTWARES ===== */}
      <section className="software-section">
        <div className="container">
          <RevealOnScroll>
            <h2>SOFTWARES</h2>
            <p>
              <span className="highlight">UNREAL ENGINE</span> |{' '}
              <span className="highlight">UNITY</span> |{' '}
              <span className="highlight">3DS MAX</span> |{' '}
              <span className="highlight">SUBSTANCE PAINTER</span> |{' '}
              <span className="highlight">BLENDER</span> |{' '}
              AUTOCAD | CHARACTER CREATOR 4 | ICLONE 8 | META TAILOR
            </p>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
