import RevealOnScroll from '../components/RevealOnScroll';
import LazyImage from '../components/LazyImage';

export default function About() {
  const skills = [
    {
      title: 'Engines & Cinematics',
      description: 'Unity (URP/HDRP, XR Toolkit, Timeline), Unreal Engine 5 (Blueprints, Sequencer, Nanite, Lumen, Path-traced Rendering), Cinematic VFX & Motion Dynamics',
    },
    {
      title: '3D Pipeline & Modeling',
      description: '3ds Max, Blender, AutoCAD, Floor Plan Modeling, Archviz, Digital Twins, Real-time Walkthroughs, Interior Design',
    },
    {
      title: 'Texturing & Materials',
      description: 'Substance Painter, Custom PBR Materials, Procedural Shaders, Texture Atlasing, UV Packing, Decals & Surface Detailing',
    },
    {
      title: 'Character Workflow',
      description: 'MetaHuman, Character Creator 4, iClone 8, Meta Tailor, Skin Weighting, Custom Clothing & Ornaments, Character Animation',
    },
    {
      title: 'Performance & Optimization',
      description: 'LOD Management, Draw-call Mitigation, Poly-count Optimization, Baked Lighting, Light Probes, GPU Profiling, Standalone VR Deployment',
    },
    {
      title: 'Tools & Pipeline',
      description: 'OpenXR, XR Interaction Toolkit, Oculus Quest, HTC Vive, Mixed Reality, C# Scripting, Node.js, Cloud Telemetry, Meshy, Git',
    },
  ];

  return (
    <main>
      {/* ===== PAGE HERO ===== */}
      <section
        className="page-hero"
        style={{
          backgroundImage: `url('/autism_vr_demo.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="page-hero-content">
          <p className="breadcrumb">GET TO KNOW ME</p>
          <h1>About</h1>
        </div>
      </section>

      {/* ===== ABOUT CONTENT ===== */}
      <section className="section section-dark about-content-section">
        <div className="container">
          <RevealOnScroll>
            <div className="about-details" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h2>Harish Kumar</h2>
              <p className="role">3D Environment Artist | World Designer</p>
              <p>
                3D Environment Artist & World Designer with 4+ years of experience building immersive real-time environments entirely from scratch — from 17th-century temple recreations to full-scale Bangalore city streets spanning 5 km.
              </p>
              <p>
                Every environment I deliver is hand-crafted: custom-modeled architecture, hand-painted PBR textures in Substance Painter, bespoke procedural shaders, and meticulously optimized scenes for real-time performance. Proven track record delivering production environments for enterprise clients including Denso and Apollo Tyres.
              </p>
              <p>
                Specialized in environment design, archviz, cinematic world-building, and digital twins across Unreal Engine 5 and Unity. Published independent researcher (Springer Nature). Seeking to bring deep environment art expertise, strong design sensibility, and a hands-on craft-driven approach to a 3D Artist or Environment Design role.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="section section-alt skills-section">
        <div className="container">
          <RevealOnScroll>
            <h2 className="section-title" style={{ marginBottom: '48px' }}>
              Skills & Expertise
            </h2>
          </RevealOnScroll>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <RevealOnScroll key={i}>
                <div className="skill-card">
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section className="section section-dark">
        <div className="container">
          <RevealOnScroll>
            <h2 className="section-title" style={{ marginBottom: '48px' }}>
              Professional Experience
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="skill-card" style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
              <h3>Quexi Technologies — Senior 3D Artist / Environment Designer</h3>
              <p style={{ color: 'var(--accent-blue)', marginBottom: '12px', fontWeight: 600 }}>
                April 2026 – Present
              </p>
              <p>
                Designing and building 3D environments and asset pipelines for a VR BIM Inspection Platform on Meta Quest 3. Leading the optimization of complex Revit/BIM architectural models into performant real-time scenes, crafting custom materials and lighting setups for accurate architectural visualization.
              </p>
            </div>

            <div className="skill-card" style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
              <h3>Marlion Technologies — Lead 3D Environment Artist</h3>
              <p style={{ color: 'var(--accent-blue)', marginBottom: '12px', fontWeight: 600 }}>
                April 2023 – March 2026
              </p>
              <p>
                Designed and built all 3D environments, assets, and materials from scratch for enterprise projects. Created a 5 km real-world Bangalore city environment for Denso — hand-modeling every building, road element, and prop. Built digital twin environments for Apollo Tyres' Chennai factory. Developed custom shaders, optimized LOD pipelines, and delivered production-ready scenes across Unreal Engine 5 and Unity.
              </p>
            </div>
            
            <div className="skill-card" style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
              <h3>Harji Lab Systems — Junior Draftsman & 3D Visualizer</h3>
              <p style={{ color: 'var(--accent-blue)', marginBottom: '12px', fontWeight: 600 }}>
                Nov 2021 – Feb 2023
              </p>
              <p>
                Delivered photorealistic renders, 360-degree product views, and interactive walkthroughs for client design validation. Produced 2D site layouts, elevations, and detailed working drawings.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
