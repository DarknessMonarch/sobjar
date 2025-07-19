"use client";

import Image from 'next/image';
import styles from '@/app/styles/about.module.css';
import { IoArrowForward, IoCheckmarkCircle, IoHeartOutline, IoPeople, IoTrophy, IoGlobe, IoSchool } from 'react-icons/io5';

// Mock images for demonstration
const HeroImage = "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=400&fit=crop";
const NavAboutImage = "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=400&fit=crop";
const TeamImage1 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop";
const TeamImage2 = "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop";
const TeamImage3 = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop";

const aboutSections = [
  {
    id: 1,
    category: "Our Story",
    title: "Founded on Community, Driven by Purpose",
    description: "Founded to meet the growing needs of the Somali Bantu (Jareer-weyne) community in Alberta, SOBJAR Canada was established with a clear mission: to empower our community and foster successful integration into Canadian society.",
    extendedDescription: "Recognizing challenges like access to services, educational gaps, and social isolation, we focused on advocacy, education, and direct support. Today, we stand as a voice for our community — investing in youth, supporting families, and helping newcomers build new lives in Canada.",
    image: NavAboutImage,
    stats: [
      { number: "2018", label: "Founded" },
      { number: "500+", label: "Youth Served" },
      { number: "50+", label: "Volunteers" }
    ]
  }
];

const values = [
  {
    icon: IoHeartOutline,
    title: "Community First",
    description: "Every decision we make puts our community's needs and wellbeing at the center.",
    color: "#10b981"
  },
  {
    icon: IoPeople,
    title: "Inclusive Growth",
    description: "We believe in creating opportunities that uplift everyone, regardless of background.",
    color: "#3b82f6"
  },
  {
    icon: IoCheckmarkCircle,
    title: "Sustainable Impact",
    description: "Our programs are designed to create lasting, meaningful change in people's lives.",
    color: "#8b5cf6"
  }
];

const achievements = [
  {
    icon: IoTrophy,
    title: "Excellence Awards",
    description: "Recognized for outstanding community service",
    metric: "5+"
  },
  {
    icon: IoGlobe,
    title: "Community Reach",
    description: "Serving communities across Alberta",
    metric: "12 Cities"
  },
  {
    icon: IoSchool,
    title: "Educational Impact",
    description: "Students supported in their academic journey",
    metric: "800+"
  }
];

const teamMembers = [
  {
    name: "Sarah Ahmed",
    role: "Executive Director",
    image: TeamImage1,
    description: "Leading community development initiatives"
  },
  {
    name: "Mohamed Hassan",
    role: "Youth Coordinator",
    image: TeamImage2,
    description: "Empowering the next generation"
  },
  {
    name: "Amina Osman",
    role: "Family Services",
    image: TeamImage3,
    description: "Supporting families in transition"
  }
];

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      {/* Enhanced Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.heroContent}>
            <div className={styles.heroTextContent}>
              <div className={styles.herobadge}>
                <span className={styles.heroTag}>Join Activism Now</span>
              </div>
              <h1 className={styles.heroTitle}>
                Take a stand for
                <span className={styles.heroAccent}> Country</span>
              </h1>
              <p className={styles.heroDescription}>
                We are a non-profit community organization serving the Somali Bantu community in Alberta and across Canada. Our mission is to support families, youth, and newcomers through education, advocacy, and community programs that promote empowerment and integration.
              </p>
              
              {/* Enhanced Stats Grid */}
              <div className={styles.heroStatsGrid}>
                <div className={styles.heroStatCard}>
                  <div className={styles.heroStatIcon}>
                    <IoTrophy />
                  </div>
                  <span className={styles.heroStatNumber}>6+</span>
                  <span className={styles.heroStatLabel}>Years of Service</span>
                </div>
                <div className={styles.heroStatCard}>
                  <div className={styles.heroStatIcon}>
                    <IoPeople />
                  </div>
                  <span className={styles.heroStatNumber}>1,500+</span>
                  <span className={styles.heroStatLabel}>Community Members</span>
                </div>
                <div className={styles.heroStatCard}>
                  <div className={styles.heroStatIcon}>
                    <IoHeartOutline />
                  </div>
                  <span className={styles.heroStatNumber}>50+</span>
                  <span className={styles.heroStatLabel}>Active Volunteers</span>
                </div>
              </div>
            </div>

            <div className={styles.heroImageContainer}>
              <Image
                src={HeroImage}
                alt="Community activism"
                width={600}
                height={450}
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.valuesHeader}>
            <span className={styles.sectionTag}>Our Values</span>
            <h2 className={styles.sectionTitle}>What Drives Us Forward</h2>
            <p className={styles.sectionSubtitle}>
              Our core values guide every decision and shape our approach to community service
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueCardHeader}>
                  <div className={styles.valueIcon} style={{'--value-color': value.color}}>
                    <value.icon />
                  </div>
                </div>
                <div className={styles.valueCardContent}>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Sections */}
      <section className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {aboutSections.map((section, index) => (
            <div key={section.id} className={styles.aboutSection}>
              <div className={`${styles.sectionContainer} ${index % 2 === 1 ? styles.reverse : ''}`}>
                <div className={styles.sectionImageContainer}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={600}
                      height={450}
                      className={styles.sectionImage}
                    />
                    <div className={styles.imageOverlay}></div>
                  </div>
                  <div className={styles.sectionStats}>
                    {section.stats.map((stat, statIndex) => (
                      <div key={statIndex} className={styles.statCard}>
                        <span className={styles.statNumber}>{stat.number}</span>
                        <span className={styles.statLabel}>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.sectionContent}>
                  <div className={styles.sectionContentHeader}>
                    <span className={styles.sectionCategory}>{section.category}</span>
                    <h3 className={styles.sectionContentTitle}>{section.title}</h3>
                  </div>
                  <div className={styles.sectionText}>
                    <p className={styles.sectionDescription}>
                      {section.description}
                    </p>
                    <p className={styles.sectionExtended}>
                      {section.extendedDescription}
                    </p>
                  </div>
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
            </div>
          ))}
        </div>
      </section>

      {/* New Achievements Section */}
      <section className={styles.achievementsSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.achievementsHeader}>
            <span className={styles.sectionTag}>Our Achievements</span>
            <h2 className={styles.sectionTitle}>Milestones That Matter</h2>
          </div>
          <div className={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <div key={index} className={styles.achievementCard}>
                <div className={styles.achievementIcon}>
                  <achievement.icon />
                </div>
                <div className={styles.achievementMetric}>{achievement.metric}</div>
                <h4 className={styles.achievementTitle}>{achievement.title}</h4>
                <p className={styles.achievementDescription}>{achievement.description}</p>
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
              Our leadership team brings together dedicated community advocates, educators, and service leaders committed to making a lasting difference in Alberta.
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
                  <p className={styles.leadershipDescription}>{member.description}</p>
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
                Be part of the change. Join our mission through volunteering, partnerships, or participating in our events. Together, we can make a lasting impact on youth, families, and communities.
              </p>
            </div>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaPrimary}>
                Get Involved
                <IoArrowForward className={styles.ctaIcon} />
              </button>
              <button className={styles.ctaSecondary}>
                Learn More
              </button>
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