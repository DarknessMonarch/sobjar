"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/styles/programs.module.css';
import { 
  IoArrowForward, 
  IoCheckmarkCircle, 
  IoPeople, 
  IoSchool, 
  IoHeart, 
  IoTrophy,
  IoFootball,
  IoBook,
  IoHome,
  IoMedical,
  IoLanguage,
  IoBriefcase,
  IoCalendar,
  IoTime,
  IoLocation,
  IoCall
} from 'react-icons/io5';

// Mock images for demonstration
const HeroImage = "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop";
const YouthProgramImage = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop";
const CommunityOutreachImage = "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop";
const EducationImage = "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop";
const SportsImage = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop";
const MentorshipImage = "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop";

const programCategories = [
  {
    id: 1,
    category: "Youth Development",
    title: "Empowering the Next Generation",
    description: "Our comprehensive youth programs focus on leadership development, cultural identity, and academic success. We provide mentorship, recreational activities, and skill-building opportunities that help young people thrive.",
    extendedDescription: "Through sports teams, leadership workshops, cultural programs, and academic support, we create safe spaces where Somali Bantu youth can develop confidence, build connections, and pursue their dreams while staying connected to their heritage.",
    image: YouthProgramImage,
    href: "/programs/youth",
    stats: [
      { number: "300+", label: "Youth Served" },
      { number: "15+", label: "Programs" },
      { number: "25+", label: "Mentors" }
    ],
    features: [
      "Leadership development workshops",
      "Sports and recreational activities", 
      "Cultural identity programs",
      "Peer mentorship opportunities"
    ],
    color: "#10b981"
  },
  {
    id: 2,
    category: "Community Support",
    title: "Building Stronger Communities",
    description: "We connect families with essential services, provide advocacy support, and create programs that strengthen community bonds. Our outreach initiatives address immediate needs while building long-term resilience.",
    extendedDescription: "From settlement support for newcomers to family counseling and community events, our outreach programs ensure that no one faces challenges alone. We work closely with local agencies to bridge gaps and advocate for our community's needs.",
    image: CommunityOutreachImage,
    href: "/programs/community",
    stats: [
      { number: "500+", label: "Families" },
      { number: "12+", label: "Partnerships" },
      { number: "8+", label: "Services" }
    ],
    features: [
      "Settlement and integration support",
      "Family counseling services",
      "Community advocacy programs",
      "Emergency assistance coordination"
    ],
    color: "#3b82f6"
  },
  {
    id: 3,
    category: "Educational Excellence",
    title: "Learning Without Limits",
    description: "Education is the foundation of empowerment. Our educational initiatives include tutoring programs, language classes, adult education, and scholarship opportunities that open doors to success.",
    extendedDescription: "We believe every person deserves access to quality education. Our programs range from early childhood development to adult literacy, English language learning, and post-secondary support, ensuring lifelong learning opportunities for all community members.",
    image: EducationImage,
    href: "/programs/education",
    stats: [
      { number: "400+", label: "Students" },
      { number: "20+", label: "Tutors" },
      { number: "6+", label: "Languages" }
    ],
    features: [
      "Academic tutoring and homework help",
      "English as a Second Language classes",
      "Adult education and literacy programs",
      "Scholarship and bursary opportunities"
    ],
    color: "#8b5cf6"
  }
];

const featuredPrograms = [
  {
    title: "SOBJAR Sports Academy",
    description: "Building character through sports",
    image: SportsImage,
    category: "Youth Programs",
    duration: "Year-round",
    ages: "Ages 8-18",
    schedule: "Weekends",
    icon: IoFootball
  },
  {
    title: "Mentorship Circle",
    description: "Connecting youth with community leaders",
    image: MentorshipImage,
    category: "Youth Programs", 
    duration: "6 months",
    ages: "Ages 14-24",
    schedule: "Bi-weekly",
    icon: IoPeople
  },
  {
    title: "English Language Circle",
    description: "Language skills for success",
    image: EducationImage,
    category: "Educational Initiatives",
    duration: "Ongoing",
    ages: "All ages",
    schedule: "Evenings",
    icon: IoLanguage
  },
  {
    title: "Family Integration Support",
    description: "Helping families navigate Canadian systems",
    image: CommunityOutreachImage,
    category: "Community Outreach",
    duration: "As needed",
    ages: "All families",
    schedule: "Flexible",
    icon: IoHome
  }
];

const programStats = [
  {
    icon: IoPeople,
    title: "Active Participants",
    description: "Community members engaged in our programs",
    metric: "800+"
  },
  {
    icon: IoTrophy,
    title: "Program Completion Rate",
    description: "Participants who complete their programs",
    metric: "85%"
  },
  {
    icon: IoSchool,
    title: "Educational Success",
    description: "Students showing improved academic performance",
    metric: "92%"
  },
  {
    icon: IoHeart,
    title: "Volunteer Hours",
    description: "Hours contributed by community volunteers",
    metric: "2,000+"
  }
];

const upcomingEvents = [
  {
    title: "Youth Leadership Workshop",
    date: "August 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Community Center",
    category: "Youth Programs"
  },
  {
    title: "Family Fun Day",
    date: "August 22, 2025", 
    time: "12:00 PM - 5:00 PM",
    location: "Central Park",
    category: "Community Outreach"
  },
  {
    title: "English Conversation Circle",
    date: "Every Tuesday",
    time: "6:30 PM - 8:00 PM",
    location: "Library Branch",
    category: "Educational Initiatives"
  }
];

export default function Programs() {
  return (
    <div className={styles.programsContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.heroContent}>
            <div className={styles.heroTextContent}>
              <div className={styles.herobadge}>
                <span className={styles.heroTag}>Our Programs</span>
              </div>
              <h1 className={styles.heroTitle}>
                Empowering Through
                <span className={styles.heroAccent}> Programs</span>
              </h1>
              <p className={styles.heroDescription}>
                From youth development to community outreach and educational initiatives, our comprehensive programs are designed to empower individuals, strengthen families, and build thriving communities across Alberta.
              </p>
              
              <div className={styles.heroStatsGrid}>
                <div className={styles.heroStatCard}>
                  <div className={styles.heroStatIcon}>
                    <IoPeople />
                  </div>
                  <span className={styles.heroStatNumber}>25+</span>
                  <span className={styles.heroStatLabel}>Active Programs</span>
                </div>
                <div className={styles.heroStatCard}>
                  <div className={styles.heroStatIcon}>
                    <IoTrophy />
                  </div>
                  <span className={styles.heroStatNumber}>800+</span>
                  <span className={styles.heroStatLabel}>Participants Served</span>
                </div>
                <div className={styles.heroStatCard}>
                  <div className={styles.heroStatIcon}>
                    <IoHeart />
                  </div>
                  <span className={styles.heroStatNumber}>3</span>
                  <span className={styles.heroStatLabel}>Program Categories</span>
                </div>
              </div>
            </div>

            <div className={styles.heroImageContainer}>
              <Image
                src={HeroImage}
                alt="Community programs"
                width={600}
                height={450}
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Categories Section */}
      <section className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {programCategories.map((program, index) => (
            <div key={program.id} className={styles.programSection}>
              <div className={`${styles.sectionContainer} ${index % 2 === 1 ? styles.reverse : ''}`}>
                <div className={styles.sectionImageContainer}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={600}
                      height={450}
                      className={styles.sectionImage}
                    />
                    <div className={styles.imageOverlay}></div>
                  </div>
                  <div className={styles.sectionStats}>
                    {program.stats.map((stat, statIndex) => (
                      <div key={statIndex} className={styles.statCard}>
                        <span className={styles.statNumber}>{stat.number}</span>
                        <span className={styles.statLabel}>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.sectionContent}>
                  <div className={styles.sectionContentHeader}>
                    <span className={styles.sectionCategory} style={{'--category-color': program.color}}>
                      {program.category}
                    </span>
                    <h3 className={styles.sectionContentTitle}>{program.title}</h3>
                  </div>
                  <div className={styles.sectionText}>
                    <p className={styles.sectionDescription}>
                      {program.description}
                    </p>
                    <p className={styles.sectionExtended}>
                      {program.extendedDescription}
                    </p>
                  </div>
                  <div className={styles.sectionFeatures}>
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={styles.featureItem}>
                        <IoCheckmarkCircle className={styles.featureIcon} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
         
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className={styles.featuredSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.featuredHeader}>
            <span className={styles.sectionTag}>Featured Programs</span>
            <h2 className={styles.sectionTitle}>Popular Programs This Season</h2>
            <p className={styles.sectionSubtitle}>
              Discover our most impactful programs that are making a difference in our community
            </p>
          </div>
          <div className={styles.featuredGrid}>
            {featuredPrograms.map((program, index) => (
              <div key={index} className={styles.featuredCard}>
                <div className={styles.featuredImageWrapper}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={400}
                    height={250}
                    className={styles.featuredImage}
                  />
                  <div className={styles.featuredOverlay}>
                    <div className={styles.featuredIcon}>
                      <program.icon />
                    </div>
                  </div>
                </div>
                <div className={styles.featuredContent}>
                  <div className={styles.featuredCategory}>{program.category}</div>
                  <h4 className={styles.featuredTitle}>{program.title}</h4>
                  <p className={styles.featuredDescription}>{program.description}</p>
                  <div className={styles.featuredDetails}>
                    <div className={styles.featuredDetail}>
                      <IoTime className={styles.detailIcon} />
                      <span>{program.duration}</span>
                    </div>
                    <div className={styles.featuredDetail}>
                      <IoPeople className={styles.detailIcon} />
                      <span>{program.ages}</span>
                    </div>
                    <div className={styles.featuredDetail}>
                      <IoCalendar className={styles.detailIcon} />
                      <span>{program.schedule}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Impact Section */}
      <section className={styles.impactSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.impactHeader}>
            <span className={styles.sectionTag}>Program Impact</span>
            <h2 className={styles.sectionTitle}>Measuring Success Together</h2>
          </div>
          <div className={styles.impactGrid}>
            {programStats.map((stat, index) => (
              <div key={index} className={styles.impactCard}>
                <div className={styles.impactIcon}>
                  <stat.icon />
                </div>
                <div className={styles.impactMetric}>{stat.metric}</div>
                <h4 className={styles.impactTitle}>{stat.title}</h4>
                <p className={styles.impactDescription}>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className={styles.eventsSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.eventsHeader}>
            <span className={styles.sectionTag}>Upcoming Events</span>
            <h2 className={styles.sectionTitle}>Join Us Soon</h2>
            <p className={styles.sectionSubtitle}>
              Don't miss these upcoming program activities and community events
            </p>
          </div>
          <div className={styles.eventsGrid}>
            {upcomingEvents.map((event, index) => (
              <div key={index} className={styles.eventCard}>
                <div className={styles.eventHeader}>
                  <div className={styles.eventCategory}>{event.category}</div>
                  <h4 className={styles.eventTitle}>{event.title}</h4>
                </div>
                <div className={styles.eventDetails}>
                  <div className={styles.eventDetail}>
                    <IoCalendar className={styles.eventIcon} />
                    <span>{event.date}</span>
                  </div>
                  <div className={styles.eventDetail}>
                    <IoTime className={styles.eventIcon} />
                    <span>{event.time}</span>
                  </div>
                  <div className={styles.eventDetail}>
                    <IoLocation className={styles.eventIcon} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaHeader}>
              <span className={styles.ctaTag}>Get Involved</span>
              <h2 className={styles.ctaTitle}>Ready to Join Our Programs?</h2>
              <p className={styles.ctaDescription}>
                Whether you're looking to participate, volunteer, or partner with us, there's a place for you in our programs. Together, we can build stronger communities and brighter futures.
              </p>
            </div>
            <div className={styles.ctaButtons}>
              <Link href="/get-involved" className={styles.ctaPrimary}>
                Join a Program
                <IoArrowForward className={styles.ctaIcon} />
              </Link>
              <Link href="/contact" className={styles.ctaSecondary}>
                Contact Us
                <IoCall className={styles.ctaIcon} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}