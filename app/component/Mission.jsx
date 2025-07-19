"use client";

import Image from 'next/image';
import { IoArrowForward, IoCheckmarkCircle, IoHeartOutline, IoPeople } from 'react-icons/io5';
import styles from '@/app/styles/mission.module.css';

// Mock images for demonstration
const NavAboutImage = "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=400&fit=crop";
const NavEventImage = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop";
const NavSportImage = "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop";

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
  },
  {
    id: 2,
    category: "Our Mission",
    title: "Empowering Communities Through Action",
    description: "The mission of the Somali Bantu/Jareer-weyne Community of Alberta is to promote the social well-being of the Somali Bantu community and support their successful integration into Canadian society.",
    extendedDescription: "Our vision is a community where youth are empowered, families are supported, and newcomers find guidance and opportunities for growth. We achieve this through education, advocacy, community outreach, and promoting health and well-being.",
    image: NavEventImage,
    stats: [
      { number: "15+", label: "Programs" },
      { number: "300+", label: "Workshops" },
      { number: "24/7", label: "Support" }
    ]
  },
  {
    id: 3,
    category: "Our Impact",
    title: "Making a Difference Every Day",
    description: "Through our comprehensive programs, we've created lasting change in the lives of Somali Bantu families across Alberta. From youth leadership training to family support services, our impact continues to grow.",
    extendedDescription: "We believe in empowering individuals with skills, knowledge, and community support to build a better future. Our programs include youth engagement activities, workshops for self-sufficiency, family support services, and community sports initiatives.",
    image: NavSportImage,
    stats: [
      { number: "85%", label: "Success Rate" },
      { number: "1,200+", label: "Lives Changed" },
      { number: "25+", label: "Partnerships" }
    ]
  }
];

const values = [
  {
    icon: IoHeartOutline,
    title: "Community First",
    description: "Every decision we make puts our community's needs and wellbeing at the center."
  },
  {
    icon: IoPeople,
    title: "Inclusive Growth",
    description: "We believe in creating opportunities that uplift everyone, regardless of background."
  },
  {
    icon: IoCheckmarkCircle,
    title: "Sustainable Impact",
    description: "Our programs are designed to create lasting, meaningful change in people's lives."
  }
];

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.heroContent}>
            <span className={styles.heroTag}>About SOBJAR Canada</span>
            <h1 className={styles.heroTitle}>
              Building Stronger Communities Through 
              <span className={styles.heroAccent}> Unity & Purpose</span>
            </h1>
            <p className={styles.heroDescription}>
              We are a non-profit community organization serving the Somali Bantu community in Alberta and across Canada. Our mission is to support families, youth, and newcomers through education, advocacy, and community programs that promote empowerment and integration.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatNumber}>6+</span>
                <span className={styles.heroStatLabel}>Years of Service</span>
              </div>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatNumber}>1,500+</span>
                <span className={styles.heroStatLabel}>Community Members</span>
              </div>
              <div className={styles.heroStatItem}>
                <span className={styles.heroStatNumber}>50+</span>
                <span className={styles.heroStatLabel}>Active Volunteers</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroPattern}></div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.valuesHeader}>
            <span className={styles.sectionTag}>Our Values</span>
            <h2 className={styles.sectionTitle}>What Drives Us Forward</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <value.icon />
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {/* About Sections */}
          {aboutSections.map((section, index) => (
            <div key={section.id} className={styles.aboutSection}>
              <div className={`${styles.sectionContainer} ${index % 2 === 1 ? styles.reverse : ''}`}>
                <div className={styles.sectionImageContainer}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={section.image}
                      alt={section.title}
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
                  <span className={styles.sectionCategory}>{section.category}</span>
                  <h3 className={styles.sectionContentTitle}>{section.title}</h3>
                  <p className={styles.sectionDescription}>
                    {section.description}
                  </p>
                  <p className={styles.sectionExtended}>
                    {section.extendedDescription}
                  </p>
                  <div className={styles.sectionFeatures}>
                    <div className={styles.featureItem}>
                      <IoCheckmarkCircle className={styles.featureIcon} />
                      <span>Community-driven approach</span>
                    </div>
                    <div className={styles.featureItem}>
                      <IoCheckmarkCircle className={styles.featureIcon} />
                      <span>Culturally responsive programs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.ctaContent}>
            <span className={styles.ctaTag}>Join Our Movement</span>
            <h2 className={styles.ctaTitle}>Take a Stand for Community</h2>
            <p className={styles.ctaDescription}>
              Be part of the change. Join our mission through volunteering, partnerships, or participating in our events. Together, we can make a lasting impact on youth, families, and communities.
            </p>
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
      </section>

      {/* Leadership Preview */}
      <section className={styles.leadershipPreview}>
        <div className={styles.contentWrapper}>
          <div className={styles.leadershipContent}>
            <span className={styles.sectionTag}>Our Team</span>
            <h3 className={styles.leadershipTitle}>Meet Our Leadership</h3>
            <p className={styles.leadershipDescription}>
              Our leadership team brings together dedicated community advocates, educators, and service leaders committed to making a lasting difference in Alberta.
            </p>
            <div className={styles.leadershipGrid}>
              <div className={styles.leadershipCard}>
                <div className={`${styles.leadershipAvatar}`} style={{background: 'linear-gradient(135deg, #009077, #00b894)'}}></div>
                <h4 className={styles.leadershipCardTitle}>Community Leaders</h4>
                <p className={styles.leadershipCardText}>Dedicated advocates working for positive change</p>
              </div>
              <div className={styles.leadershipCard}>
                <div className={`${styles.leadershipAvatar}`} style={{background: 'linear-gradient(135deg, #0984a3, #2ea3cc)'}}></div>
                <h4 className={styles.leadershipCardTitle}>Educational Experts</h4>
                <p className={styles.leadershipCardText}>Experienced educators guiding our programs</p>
              </div>
              <div className={styles.leadershipCard}>
                <div className={`${styles.leadershipAvatar}`} style={{background: 'linear-gradient(135deg, #006d77, #14b8a6)'}}></div>
                <h4 className={styles.leadershipCardTitle}>Youth Mentors</h4>
                <p className={styles.leadershipCardText}>Inspiring the next generation of leaders</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}