"use client";

import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import AboutImage from "@/public/assets/about.jpg";
import styles from "@/app/styles/about.module.css";
import LeaderImage from "@/public/assets/leader.jpg";
import CommunityImage from "@/public/assets/community.jpg";
import {
  IoArrowForward,
  IoCheckmarkCircle,
  IoHeartOutline,
  IoPeople,
  IoTrophy,
  IoGlobe,
  IoSchool,
} from "react-icons/io5";

const aboutSections = [
  {
    id: 1,
    category: "Our Story",
    title: "Founded on Community, Driven by Purpose",
    description:
      "Founded to meet the growing needs of the Somali Bantu (Jareer-weyne) community in Alberta, SOBJAR Canada was established with a clear mission: to empower our community and foster successful integration into Canadian society.",
    extendedDescription:
      "Recognizing challenges like access to services, educational gaps, and social isolation, we focused on advocacy, education, and direct support. Today, we stand as a voice for our community — investing in youth, supporting families, and helping newcomers build new lives in Canada.",
    image: AboutImage,
    stats: [
      { number: "2018", label: "Founded" },
      { number: "500+", label: "Youth Served" },
      { number: "50+", label: "Volunteers" },
    ],
  },
];

const values = [
  {
    icon: IoHeartOutline,
    title: "Community First",
    description:
      "Every decision we make puts our community's needs and wellbeing at the center.",
  },
  {
    icon: IoPeople,
    title: "Inclusive Growth",
    description:
      "We believe in creating opportunities that uplift everyone, regardless of background.",
  },
  {
    icon: IoCheckmarkCircle,
    title: "Sustainable Impact",
    description:
      "Our programs are designed to create lasting, meaningful change in people's lives.",
  },
];

const achievements = [
  {
    icon: IoTrophy,
    title: "Excellence Awards",
    description: "Recognized for outstanding community service",
    metric: "5+",
  },
  {
    icon: IoGlobe,
    title: "Community Reach",
    description: "Serving communities across Alberta",
    metric: "12 Cities",
  },
  {
    icon: IoSchool,
    title: "Educational Impact",
    description: "Students supported in their academic journey",
    metric: "800+",
  },
];

const teamMembers = [
  {
    name: "Ahmed",
    role: "Executive Director",
    image: LeaderImage,
    description: "Leading community development initiatives",
  },
  {
    name: "Coming Soon",
    role: "Youth Coordinator",
    image: CommunityImage,
    description: "Empowering the next generation",
  },
  {
    name: "Coming Soon",
    role: "Family Support Specialist",
    image: AboutImage,
    description: "Supporting families in transition",
  },
];

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroTextContent}>
            <div className={styles.herobadge}>
              <span>Help support us</span>
            </div>
            <h1>
              Take a stand for
              <span> Canada</span>
            </h1>
            <p>
              We are a non-profit community organization serving the Somali
              Bantu community in Alberta and across Canada. Our mission is to
              support families, youth, and newcomers through education,
              advocacy, and community programs that promote empowerment and
              integration.
            </p>

            <div className={styles.heroStatsContainer}>
              <div className={styles.heroStatCard}>
                <div className={styles.heroStatIconWrapper}>
                  <IoTrophy
                    className={styles.heroStatIcon}
                    aria-label="Service"
                  />
                </div>
                <h2>6+</h2>
                <span>Years of Service</span>
              </div>
              <div className={styles.heroStatCard}>
                <div className={styles.heroStatIconWrapper}>
                  <IoPeople
                    className={styles.heroStatIcon}
                    aria-label="Community"
                  />
                </div>
                <h2>1,500+</h2>
                <span>Community Members</span>
              </div>
              <div className={styles.heroStatCard}>
                <div className={styles.heroStatIconWrapper}>
                  <IoHeartOutline
                    className={styles.heroStatIcon}
                    aria-label="Volunteers"
                  />
                </div>
                <h2>50+</h2>
                <span>Active Volunteers</span>
              </div>
            </div>
          </div>

          <div className={styles.heroImageContainer}>
            <Image
              src={CommunityImage}
              alt="Community activism"
              fill
              sizes="100vw"
              quality={100}
              priority={true}
              style={{ objectFit: "cover" }}
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {aboutSections.map((section, index) => (
            <div key={index} className={styles.sectionContainer}>
              <div className={styles.sectionImageContainer}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    sizes="100vw"
                    quality={100}
                    priority={true}
                    style={{ objectFit: "cover" }}
                    className={styles.sectionImage}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>
                <div className={styles.sectionStats}>
                  {section.stats.map((stat, statIndex) => (
                    <div key={statIndex} className={styles.statCard}>
                      <span>{stat.number}</span>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.sectionContent}>
                <span>{section.category}</span>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <p>{section.extendedDescription}</p>
                <div className={styles.sectionFeatures}>
                  <div className={styles.featureItem}>
                    <IoCheckmarkCircle className={styles.featureIcon} />
                    <span>Community-driven approach</span>
                  </div>
                  <div className={styles.featureItem}>
                    <IoCheckmarkCircle className={styles.featureIcon} />
                    <span>Culturally responsive programs</span>
                  </div>
                  <div className={styles.featureItem}>
                    <IoCheckmarkCircle className={styles.featureIcon} />
                    <span>Evidence-based solutions</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.valuesHeader}>
          <span className={styles.sectionTag}>Our Values</span>
          <h2>What Drives Us Forward</h2>
          <p>
            Our core values guide every decision and shape our approach to
            community service
          </p>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueCardHeader}>
                <value.icon className={styles.valueIcon} aria-label="Value" />
              </div>
              <div className={styles.valueCardContent}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.achievementsSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.achievementsHeader}>
            <h2>Our Achievements</h2>
          </div>
          <div className={styles.achievements}>
            {achievements.map((achievement, index) => (
              <div key={index} className={styles.achievementCard}>
                <div className={styles.achievementIconWrapper}>
                  <achievement.icon
                    className={styles.achievementIcon}
                    aria-label="Achievement"
                  />
                </div>
                <h3>{achievement.metric}</h3>
                <div className={styles.achievementContent}>
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Leadership Section */}
      <section className={styles.leadershipSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.leadershipHeader}>
            <span className={styles.sectionTag}>Our Team</span>
            <h2 className={styles.leadershipTitle}>Meet Our Leadership</h2>
            <p className={styles.leadershipDescription}>
              Our leadership team brings together dedicated community advocates,
              educators, and service leaders committed to making a lasting
              difference in Alberta.
            </p>
          </div>
          <div className={styles.leadershipGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.leadershipCard}>
                <div className={styles.leadershipImageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className={styles.leadershipImage}
                  />
                  <div className={styles.leadershipImageOverlay}></div>
                </div>
                <div className={styles.leadershipInfo}>
                  <h4 className={styles.leadershipName}>{member.name}</h4>
                  <p className={styles.leadershipRole}>{member.role}</p>
                  <p className={styles.leadershipDescription}>
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaHeader}>
              <span className={styles.ctaTag}>Join Our Movement</span>
              <h2 className={styles.ctaTitle}>Take a Stand for Community</h2>
              <p className={styles.ctaDescription}>
                Be part of the change. Join our mission through volunteering,
                partnerships, or participating in our events. Together, we can
                make a lasting impact on youth, families, and communities.
              </p>
            </div>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaPrimary}>
                Get Involved
                <IoArrowForward className={styles.ctaIcon} />
              </button>
              <button className={styles.ctaSecondary}>Learn More</button>
            </div>
          </div>
        </div>
        <div className={styles.ctaPattern}></div>
        <div className={styles.ctaFloatingElements}>
          <div className={styles.ctaFloatingElement}></div>
          <div className={styles.ctaFloatingElement}></div>
        </div>
      </section>
    </div>
  );
}
