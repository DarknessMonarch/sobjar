"use client";

import Image from "next/image";
import MissionImage from "@/public/assets/mission.jpg";
import EventMission from "@/public/assets/eventMission.jpg";
import {
  IoCheckmarkCircle,
  IoHeartOutline,
  IoPeople,
  IoSchool,
  IoHome,
  IoShield,
  IoPeopleOutline,
  IoTrophy,
  IoLogoWhatsapp,
} from "react-icons/io5";
import styles from "@/app/styles/mission.module.css";

const aboutSections = [
  {
    id: 1,
    category: "Article II - Section 1",
    title: "Our Mission Statement",
    description:
      "The mission of the Somali Bantu/Jareer-weyne Community of Alberta is to promote and advance the social well-being of the Somali Bantu Society in Alberta and successfully integrate the community into Canadian Society. The service of this organization provides is open to all Canadians.",
    extendedDescription:
      "It is all about supporting the young generation including the youth and families in Alberta in their time of need, and work towards a greater way. We understand the importance of educating the families and the youth of our future. Our goal is to help them obtain an education and better living in Alberta which will give them the knowledge and skills necessary for improving their lives and their communities. We also provide health treatment in the whole of Canada.",
    image: MissionImage,
    stats: [
      { number: "All", label: "Canadians Welcome" },
      { number: "Alberta", label: "Primary Focus" },
      { number: "Canada", label: "Health Services" },
    ],
  },
  {
    id: 2,
    category: "Article II - Section 2",
    title: "Our Organizational Purposes",
    description:
      "The general purpose of this corporation shall be any purpose, which may be lawfully undertaken by a non-profit corporation organized pursuant to Alberta or the whole Canada Law.",
    extendedDescription:
      "Our specific purposes are comprehensive and community-focused, designed to address the multifaceted needs of our community members through education, advocacy, support services, and empowerment programs that strengthen both individuals and families.",
    image: EventMission,
    stats: [
      { number: "8+", label: "Core Purposes" },
      { number: "Non-Profit", label: "Legal Status" },
      { number: "Alberta", label: "Incorporated" },
    ],
  },
];

const purposes = [
  {
    icon: IoSchool,
    title: "Education and Advocacy",
    description:
      "Providing educational opportunities and advocating for community rights and needs.",
  },
  {
    icon: IoHome,
    title: "Newcomer Assistance",
    description:
      "Assist newcomers to Alberta by showing the way to access government services.",
  },
  {
    icon: IoShield,
    title: "Violence Prevention",
    description:
      "Fight violence and delinquency by investing in children, youth and families.",
  },
  {
    icon: IoPeople,
    title: "Youth Support",
    description: "Help youth with their homework and educational development.",
  },
  {
    icon: IoCheckmarkCircle,
    title: "Self-Sufficiency",
    description:
      "Promote self-sufficiency through workshops and educational seminars.",
  },
  {
    icon: IoHeartOutline,
    title: "Community Support",
    description:
      "Provide any form of support to members with the view to lessening the burdens of government.",
  },
  {
    icon: IoTrophy,
    title: "Youth Sports",
    description:
      "Sponsor, host and/or participate in events and activities that promote the sport of youth.",
  },
  {
    icon: IoPeopleOutline,
    title: "Effective Voice",
    description:
      "Assist the Somali Bantu in Alberta Province to have an effective voice in organizations, institutions and issues that affect their lives.",
  },
];

export default function Mission() {
  const handleWhatsappClick = () => {
    window.open("https://chat.whatsapp.com/CnjBdL4RvVT7raFaJHml88", "_blank");
  };

  return (
    <div className={styles.aboutContainer}>
      <section className={styles.contentWrapper}>
        {aboutSections.map((section, index) => (
            <div
              className={`${styles.sectionContainer} ${
                index % 2 === 1 ? styles.reverse : ""
              }`}
               key={section.id}
            >
              <div className={styles.sectionImageContainer}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={100}
                    className={styles.sectionImage}
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>
                <div className={styles.sectionStats}>
                  {section.stats.map((stat, statIndex) => (
                    <div key={statIndex} className={styles.statCard}>
                      <span >{stat.number}</span>
                      <span >{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.sectionContent}>
                <span className={styles.sectionCategory}>
                  {section.category}
                </span>
                <h3 className={styles.sectionContentTitle}>
                  {section.title}
                </h3>
                <p>
                  {section.description}
                </p>
                <p >
                  {section.extendedDescription}
                </p>
                <div className={styles.sectionFeatures}>
                  <div className={styles.featureItem}>
                    <IoCheckmarkCircle className={styles.featureIcon} />
                    <span>Open to all Canadians</span>
                  </div>
                  <div className={styles.featureItem}>
                    <IoCheckmarkCircle className={styles.featureIcon} />
                    <span>Community-centered approach</span>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.valuesHeader}>
          <span className={styles.sectionTag}>Our Specific Purposes</span>
          <h2>Comprehensive Community Services</h2>
          <p>
            Our organization is structured to address the diverse needs of our
            community through these specific purposes and services
          </p>
        </div>
        <div className={styles.purposesGrid}>
          {purposes.map((purpose, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueCardHeader}>
                <purpose.icon
                  className={styles.valueIcon}
                  aria-label="Purpose"
                />
              </div>
              <div className={styles.valueCardContent}>
                <h3>{purpose.title}</h3>
                <p>{purpose.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.ctaContent}>
            <h2 >
              Join Our Mission for Community Empowerment
            </h2>
            <p >
              Be part of our comprehensive mission to promote social well-being,
              support successful integration, and empower the Somali
              Bantu/Jareer-weyne community in Alberta. Together, we can build
              stronger families, educate our youth, and create lasting positive
              change.
            </p>
              <button 
                onClick={handleWhatsappClick}
                className={styles.ctaButton}
                aria-label="Join our WhatsApp community"
              >
                <IoLogoWhatsapp className={styles.ctaIcon} />
                Join Our WhatsApp Community
              </button>
          </div>
        </div>
        <div className={styles.ctaPattern}></div>
      </section>
    </div>
  );
}