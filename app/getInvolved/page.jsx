"use client";

import Link from "next/link";
import Image from "next/image";
import Styles from "@/app/styles/getInvolved.module.css";

// You'll need to add these images to your public/assets folder
// import VolunteerImage from "@/public/assets/volunteer-hero.jpg";
// import PartnershipsImage from "@/public/assets/partnerships-hero.jpg";
// import EventsImage from "@/public/assets/events-hero.jpg";
// import CommunityImpactImage from "@/public/assets/community-impact.jpg";

export default function GetInvolved() {
  const involvementOptions = [
    {
      id: "volunteer",
      title: "Volunteer With Us",
      subtitle: "Make a Direct Impact",
      description: "Join our dedicated team of volunteers and help empower Somali Bantu families through mentorship, educational support, and community events.",
      features: [
        "Youth mentorship programs",
        "Educational tutoring and support",
        "Community event coordination",
        "Translation and interpretation services"
      ],
      buttonText: "Start Volunteering",
      link: "/get-involved/volunteer",
      // image: VolunteerImage,
      color: "primary"
    },
    {
      id: "partnerships",
      title: "Partner With Us",
      subtitle: "Collaborative Growth",
      description: "Form strategic partnerships with Sobjar Canada to expand our reach and create lasting change in the Somali Bantu community.",
      features: [
        "Corporate social responsibility initiatives",
        "Educational institution collaborations",
        "Government and NGO partnerships",
        "Community organization alliances"
      ],
      buttonText: "Explore Partnerships",
      link: "/get-involved/partnerships",
      // image: PartnershipsImage,
      color: "secondary"
    },
    {
      id: "events",
      title: "Join Our Events",
      subtitle: "Community Connection",
      description: "Participate in cultural celebrations, educational workshops, and community gatherings that strengthen our bonds and celebrate our heritage.",
      features: [
        "Cultural festivals and celebrations",
        "Educational workshops and seminars",
        "Youth sports tournaments",
        "Community fundraising events"
      ],
      buttonText: "View Events",
      link: "/get-involved/events",
      // image: EventsImage,
      color: "tertiary"
    }
  ];

  const impactStats = [
    { number: "500+", label: "Families Served" },
    { number: "150+", label: "Active Volunteers" },
    { number: "25+", label: "Community Partners" },
    { number: "50+", label: "Annual Events" }
  ];

  return (
    <section className={Styles.getInvolvedContainer}>
      {/* Hero Section */}
      <div className={Styles.heroSection}>
        <div className={Styles.heroContent}>
          <h1 className={Styles.heroTitle}>Get Involved</h1>
          <p className={Styles.heroSubtitle}>
            Join our mission to empower the Somali Bantu community through meaningful engagement, 
            partnership, and shared commitment to positive change.
          </p>
          <div className={Styles.heroStats}>
            {impactStats.map((stat, index) => (
              <div key={index} className={Styles.statItem}>
                <span className={Styles.statNumber}>{stat.number}</span>
                <span className={Styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={Styles.mainContent}>
        {/* Introduction Section */}
        <div className={Styles.introSection}>
          <h2 className={Styles.sectionTitle}>Ways to Make a Difference</h2>
          <p className={Styles.sectionDescription}>
            Whether you're an individual looking to volunteer, an organization seeking partnership opportunities, 
            or someone wanting to participate in community events, there are many ways to support our cause and 
            make a lasting impact on the lives of Somali Bantu families in Alberta.
          </p>
        </div>

        {/* Involvement Options */}
        <div className={Styles.optionsGrid}>
          {involvementOptions.map((option, index) => (
            <div 
              key={option.id} 
              className={`${Styles.optionCard} ${Styles[option.color]} ${Styles.fadeInSection}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={Styles.cardContent}>
                <div className={Styles.cardHeader}>
                  <h3 className={Styles.cardTitle}>{option.title}</h3>
                  <span className={Styles.cardSubtitle}>{option.subtitle}</span>
                </div>
                
                <p className={Styles.cardDescription}>{option.description}</p>
                
                <ul className={Styles.featureList}>
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={Styles.featureItem}>
                      <span className={Styles.featureIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href={option.link} className={Styles.cardButton}>
                  {option.buttonText}
                </Link>
              </div>
              
              {/* Uncomment when images are available */}
              {/* <div className={Styles.cardImageContainer}>
                <Image 
                  src={option.image} 
                  alt={option.title}
                  className={Styles.cardImage}
                  width={400}
                  height={300}
                />
              </div> */}
            </div>
          ))}
        </div>

        {/* Community Impact Section */}
        <div className={`${Styles.impactSection} ${Styles.fadeInSection}`}>
          <div className={Styles.impactContent}>
            <div className={Styles.impactText}>
              <h2 className={Styles.impactTitle}>Your Impact Matters</h2>
              <p className={Styles.impactDescription}>
                Every volunteer hour, partnership initiative, and community event contributes to building 
                stronger, more resilient Somali Bantu families. Together, we create opportunities for 
                education, cultural preservation, and social integration that benefit the entire community.
              </p>
              
              <div className={Styles.impactHighlights}>
                <div className={Styles.highlight}>
                  <h4>Education First</h4>
                  <p>Supporting academic achievement and lifelong learning opportunities</p>
                </div>
                <div className={Styles.highlight}>
                  <h4>Cultural Pride</h4>
                  <p>Celebrating and preserving Somali Bantu heritage and traditions</p>
                </div>
                <div className={Styles.highlight}>
                  <h4>Community Unity</h4>
                  <p>Fostering connections and mutual support within and beyond our community</p>
                </div>
              </div>
            </div>
            
            {/* Uncomment when image is available */}
            {/* <div className={Styles.impactImageContainer}>
              <Image 
                src={CommunityImpactImage} 
                alt="Community Impact"
                className={Styles.impactImage}
                width={500}
                height={400}
              />
            </div> */}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`${Styles.ctaSection} ${Styles.fadeInSection}`}>
          <div className={Styles.ctaContent}>
            <h2 className={Styles.ctaTitle}>Ready to Get Started?</h2>
            <p className={Styles.ctaDescription}>
              Take the first step towards making a meaningful difference in the Somali Bantu community. 
              Whether you have five minutes or five hours, your contribution matters.
            </p>
            <div className={Styles.ctaButtons}>
              <Link href="/get-involved/volunteer" className={`${Styles.ctaButton} ${Styles.primary}`}>
                Volunteer Today
              </Link>
              <Link href="/contact" className={`${Styles.ctaButton} ${Styles.secondary}`}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}