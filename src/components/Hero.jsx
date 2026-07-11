import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Hero.css";

import heroVideo from "../assets/Hero.mp4";
import resumePdf from "../assets/Saurabh_Tiwari_Resume.pdf";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const title = useRef(null);
  const subtitle = useRef(null);
  const buttons = useRef(null);
  const playBtn = useRef(null);
  const videoRef = useRef(null);
  const blurVideoRef = useRef(null);
  const leftRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const hasAnimated = useRef(false);

  // ENSURE VIDEO STARTS PAUSED
  useEffect(() => {
    const video = videoRef.current;
    const blurVideo = blurVideoRef.current;
    if (video) video.pause();
    if (blurVideo) blurVideo.pause();
    setPlaying(false);
  }, []);

  // GSAP ANIMATION
  useEffect(() => { 
    const ctx = gsap.context(() => {

      gsap.from(".left > *", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".social-icons > *", {
        x: -100,
        opacity: 0,

        duration: 2.5,
        ease: "power4.out",
      });
      gsap.from(".right > *", {

        opacity: 0,

        duration: 2,
        scale: 0.5,
        ease: "power4.out",
      });
      gsap.from(videoRef.current, {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
      });

    });

    return () => ctx.revert();
  }, []);
  // PLAY / PAUSE TOGGLE
  const toggleVideo = () => {
    const video = videoRef.current;
    const blurVideo = blurVideoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      if (blurVideo) blurVideo.play();
      setPlaying(true);
    } else {
      video.pause();
      if (blurVideo) blurVideo.pause();
      setPlaying(false);
    }
  };

  return (
    <section id="home" className="hero">

      <div className="social-icons">
        <div>
          <a href="https://github.com/SaurabhTiwari0108" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/saurabh-tiwari8778/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* BACKGROUND VIDEO BLURRED */}
      <video
        ref={blurVideoRef}
        loop
        playsInline
        muted
        className="hero-video-blur"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* FOREGROUND VIDEO CONTAINED */}
      <video
        ref={videoRef}
        loop
        playsInline
        className="hero-video"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* HERO CONTENT */}
      <div className="hero-content">

        <div className="left" ref={leftRef}>
 
          <p className="intro">Hi, I'm</p>

          <h1>
            Saurabh Tiwari
            <span>Full Stack Developer</span>
          </h1>

          <p>
            I build scalable web applications using React and backend technologies, combining them with AI to deliver smart and user-friendly experiences.
          </p>

          <div className="buttons">
            <a href="#projects">
              <button className="primary">View My Work</button>
            </a>
            <a href="#contact">
              <button className="secondary">Contact Me</button>
            </a>

            <a href={resumePdf} download="Saurabh_Tiwari_Resume.pdf">
              <button className="resume">Download Resume</button>
            </a>
          </div>

        </div>

        <div className="right">
          <button
            ref={playBtn}
            className="playButton"
            onClick={toggleVideo}
          >
            {playing ? "❚❚" : "▶"}
          </button>
        </div>

      </div>

      <div className="scroll">Scroll ↓</div>

    </section>
  );
}