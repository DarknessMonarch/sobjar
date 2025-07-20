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



export default function Mission() {
  return (
    <div className={styles.aboutContainer}>
     
      
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
            <h2 className={styles.ctaTitle}>Take a Stand for your Community</h2>
            <p className={styles.ctaDescription}>
              Be part of the change. Join our mission through volunteering, partnerships, or participating in our events. Together, we can make a lasting impact on youth, families, and communities.
            </p>
           
          </div>
        </div>
        <div className={styles.ctaPattern}></div>
      </section>

    </div>
  );
}