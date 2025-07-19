"use client";

import Image from "next/image";
import About from "@/app/component/About";
import { useState, useEffect } from "react";
import HomeImage1 from "@/public/assets/home1.jpg";
import HomeImage2 from "@/public/assets/home2.jpg";
import HomeImage3 from "@/public/assets/home3.jpg";
import HomeImage4 from "@/public/assets/home4.jpg";
import HomeImage5 from "@/public/assets/home5.jpg";
import styles from "@/app/styles/home.module.css";

import { MdOutlineClose as CloseIcon, MdPause, MdPlayArrow } from "react-icons/md";

const data = [
  {
    id: 1,
    title: "Weaving Dreams, Building Futures",
    description: "Where ancient wisdom meets modern opportunity. We bring together Somali Bantu families to celebrate their rich cultural heritage while creating pathways to success in their new homeland.",
    image: HomeImage1,
    accent: "Together We Rise",
    stats: { number: "1,200+", label: "Families Served" }
  },
  {
    id: 2,
    title: "Cultural Harmony in Motion",
    description: "Through vibrant celebrations, traditional music, and storytelling, we keep our cultural flame burning bright. Every gathering strengthens our community bonds and preserves our legacy.",
    image: HomeImage2,
    accent: "Tradition Lives",
    stats: { number: "50+", label: "Cultural Events" }
  },
  {
    id: 3,
    title: "Empowering Tomorrow's Leaders",
    description: "From coding bootcamps to leadership programs, we're nurturing the next generation of changemakers. Our youth are not just our future—they're our present strength.",
    image: HomeImage3,
    accent: "Future Leaders",
    stats: { number: "300+", label: "Youth Empowered" }
  },
  {
    id: 4,
    title: "Knowledge as Liberation",
    description: "Education opens doors that seemed impossible to unlock. We provide advocacy, resources, and unwavering support to help our community members thrive in every aspect of life.",
    image: HomeImage4,
    accent: "Breaking Barriers",
    stats: { number: "85%", label: "Success Rate" }
  },
  {
    id: 5,
    title: "Unity Through Celebration",
    description: "Football tournaments, cultural festivals, and community gatherings aren't just events—they're the heartbeat of our community. Every celebration strengthens our collective spirit.",
    image: HomeImage5,
    accent: "Joyful Together",
    stats: { number: "25+", label: "Community Events" }
  },
];

export default function Home() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const currentEvent = data[currentEventIndex];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (data.length > 1 && isPlaying) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsAnimating(true);
            setTimeout(() => {
              setCurrentEventIndex((prevIndex) => (prevIndex + 1) % data.length);
              setIsAnimating(false);
            }, 300);
            return 0;
          }
          return prev + 1.25; // 8 seconds total (100 / 1.25 = 80 intervals * 100ms)
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handleIndicatorClick = (index) => {
    if (index !== currentEventIndex) {
      setIsAnimating(true);
      setProgress(0);
      setTimeout(() => {
        setCurrentEventIndex(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className={styles.homeLayout}>
      <div className={styles.heroSection}>
        <Image
          className={`${styles.heroImage} ${isAnimating ? styles.imageTransition : ''}`}
          src={currentEvent.image}
          alt={currentEvent.title}
          fill
          sizes="100vw"
          quality={95}
          priority={true}
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        <div className={styles.heroOverlay}></div>

        <div className={styles.floatingElements}>
          <div className={styles.floatingCircle} style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}></div>
          <div className={styles.floatingCircle2} style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
          }}></div>
        </div>

        <div className={`${styles.heroContent} ${isAnimating ? styles.contentFadeOut : styles.contentFadeIn}`}>
          <div className={styles.heroAccent}>
            <h1>{currentEvent.stats.number}</h1>
            <span>{currentEvent.stats.label}</span>
            <h2>{currentEvent.accent}</h2>
          </div>

          <h1>{currentEvent.title}</h1>
          <p>{currentEvent.description}</p>

          <button className={styles.heroButton} aria-label="Learn more about our mission">
            <span>Join Our Mission</span>
          </button>
        </div>
        {data.length > 1 && (
          <div className={styles.eventIndicators}>
            <button
              className={styles.playPauseButton}
              onClick={togglePlayback}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? <MdPause className={styles.playPauseIcon} aria-label="Pause" /> : <MdPlayArrow className={styles.playPauseIcon} aria-label="Play" />}
            </button>
            {data.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${index === currentEventIndex ? styles.active : ""}`}
                onClick={() => handleIndicatorClick(index)}
                aria-label={`Show slide ${index + 1}`}
              >
                <div className={styles.indicatorBg}></div>
                <div
                  className={styles.indicatorProgress}
                  style={{
                    width: index === currentEventIndex ? `${progress}%` : '0%'
                  }}
                ></div>
              </button>
            ))}

          </div>
        )}

        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
        </div>

      </div>
      <About />
    </section>
  );
}