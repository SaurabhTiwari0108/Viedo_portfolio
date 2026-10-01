import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Hero.css";

import profileImg from "../assets/Profile.png";
import resumePdf from "../assets/Saurabh_Tiwari_Resume.pdf";
import { 
  FaGithub, 
  FaLinkedin, 
  FaReact, 
  FaArrowRight, 
  FaDownload, 
  FaRocket 
} from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

export default function Hero() {
  const heroRef = useRef(null);
  const photoCardRef = useRef(null);

  // GSAP ENTRANCE ANIMATIONS
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left side text stagger
      gsap.from(".hero-badge, .intro-salute, .hero-name, .hero-role-row, .hero-bio, .hero-stats-row, .hero-actions", {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 1.1,
        ease: "power3.out",
      });

      // Social icons fly in
      gsap.from(".social-icons > *", {
        x: -50,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
      });

      // Right photo showcase reveal
      gsap.from(".photo-card-container", {
        scale: 0.85,
        opacity: 0,
        duration: 1.3,
        ease: "power3.out",
        delay: 0.2,
      });

      // Floating badges pop in
      gsap.from(".floating-badge", {
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.8)",
        delay: 0.7,
      });

      // Ambient background glow pulse
      gsap.from(".hero-glow", {
        opacity: 0,
        scale: 0.8,
        duration: 2,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Subtle interactive 3D tilt effect on mouse move over photo
  const handleMouseMove = (e) => {
    const card = photoCardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 12;
    const rotateY = (x / rect.width) * 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = photoCardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      {/* AMBIENT BACKGROUND GLOWS & GRID */}
      <div className="hero-bg-grid" />
      <div className="hero-glow hero-glow-red" />
      <div className="hero-glow hero-glow-purple" />
      <div className="hero-glow hero-glow-photo" />

      {/* FLOATING SOCIAL ICONS (LEFT DOCK) */}
      <aside className="social-icons" aria-label="Social links">
        <div>
          <a
            href="https://github.com/SaurabhTiwari0108"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
          >
            <FaGithub />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/saurabh-tiwari8778/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
        </div>
      </aside>

      {/* HERO MAIN CONTAINER */}
      <div className="hero-container">
        {/* LEFT COLUMN: INTRODUCTION & ACTIONS */}
        <div className="hero-left">
          {/* Status Badge */}
          <div className="hero-badge">
            <span className="pulse-indicator">
              <span className="pulse-core" />
              <span className="pulse-ring" />
            </span>
            <span>Available for New Opportunities</span>
          </div>

          <p className="intro-salute">Hi, I'm</p>

          <h1 className="hero-name">
            Saurabh <span className="highlight-text">Tiwari</span>
          </h1>

          <div className="hero-role-row">
            <span className="role-primary">Full Stack Developer</span>
            <span className="role-dot">•</span>
            <span className="role-secondary">Creative Engineer</span>
          </div>

          <p className="hero-bio">
            I design and build fast, responsive, and scalable web applications using
            <strong> React</strong>, <strong>Spring Boot</strong>, and modern cloud technologies—bringing
            together clean architecture, smooth micro-interactions, and smart AI capabilities.
          </p>

          {/* Quick Highlight Stats / Tags */}
          <div className="hero-stats-row">
            <div className="stat-pill">
              <span className="stat-value">10+</span>
              <span className="stat-tag">Projects Built</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-pill">
              <span className="stat-value">Full Stack</span>
              <span className="stat-tag">React & Spring Boot</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-pill">
              <span className="stat-value">Clean Code</span>
              <span className="stat-tag">Modern Architecture</span>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn-primary-action">
              <span>View My Work</span>
              <FaArrowRight className="action-icon" />
            </a>

            <a href="#contact" className="btn-secondary-action">
              <span>Contact Me</span>
            </a>

            <a
              href={resumePdf}
              download="Saurabh_Tiwari_Resume.pdf"
              className="btn-resume-action"
            >
              <FaDownload className="action-icon" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: USER PHOTO SHOWCASE */}
        <div className="hero-right">
          <div
            className="photo-card-container"
            ref={photoCardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Ambient Lighting Ring Behind Card */}
            <div className="photo-backdrop-aura" />
            <div className="photo-backdrop-ring" />

            {/* Main Photo Card */}
            <div className="photo-glass-card">
              <div className="photo-inner-wrapper">
                <img
                  src={profileImg}
                  alt="Saurabh Tiwari - Full Stack Developer"
                  className="hero-portrait"
                  loading="eager"
                />
                <div className="photo-bottom-gradient" />
                <div className="photo-footer-tag">
                  <span className="tag-symbol">&lt;/&gt;</span>
                  <span>Saurabh Tiwari • Full Stack Dev</span>
                </div>
              </div>
            </div>

            {/* Floating Tech Badge 1: React / Frontend */}
            <div className="floating-badge badge-top-right">
              <div className="badge-icon-wrap react-theme">
                <FaReact />
              </div>
              <div className="badge-details">
                <span className="badge-heading">React & Next.js</span>
                <span className="badge-subheading">Frontend Specialist</span>
              </div>
            </div>

            {/* Floating Tech Badge 2: Spring Boot / Backend */}
            <div className="floating-badge badge-bottom-left">
              <div className="badge-icon-wrap spring-theme">
                <SiSpringboot />
              </div>
              <div className="badge-details">
                <span className="badge-heading">Spring Boot</span>
                <span className="badge-subheading">Scalable REST APIs</span>
              </div>
            </div>

            {/* Floating Badge 3: Fast & High Quality */}
            <div className="floating-badge badge-side-highlight">
              <div className="badge-icon-wrap rocket-theme">
                <FaRocket />
              </div>
              <div className="badge-details">
                <span className="badge-heading">High Performance</span>
                <span className="badge-subheading">Clean & Optimized</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL DOWN INDICATOR */}
      <a href="#about" className="hero-scroll-cue" aria-label="Scroll down to About section">
        <span className="cue-label">Scroll Down</span>
        <span className="cue-arrow">↓</span>
      </a>
    </section>
  );
}