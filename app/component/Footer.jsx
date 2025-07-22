"use client";

import Link from "next/link";
import styles from "@/app/styles/footer.module.css";

import { MdEmail as EmailIcon } from "react-icons/md";
import { IoCall as PhoneIcon } from "react-icons/io5";
import { FaFacebookF as FacebookIcon } from "react-icons/fa";
import { BsInstagram as InstagramIcon } from "react-icons/bs";
import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";
import { FaYoutube as YoutubeIcon } from "react-icons/fa";
import { FaTiktok as TiktokIcon } from "react-icons/fa";
import { IoLocationOutline as LocationIcon } from "react-icons/io5";

export default function Footer() {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/sobjarstar/", "_blank");
  };

  const handleWhatsappClick = () => {
    window.open("https://chat.whatsapp.com/CnjBdL4RvVT7raFaJHml88", "_blank");
  };

  const handleYoutubeClick = () => {
    window.open("https://www.youtube.com/channel/UCquX1JwHrF0_ijoCIZGuwhA", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://m.facebook.com/SobjarCanada/", "_blank");
  };

  const handleTiktokClick = () => {
    window.open("https://www.tiktok.com/search?lang=en&q=sobjarstar&t=1753184904436", "_blank");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          {/* Organization Info */}
          <div className={styles.footerSection}>
            <h4>Sobjar Canada</h4>
            <p className={styles.organizationDescription}>
              We are a non-profit community organization supporting Somali Bantu families, 
              youth, and newcomers in Alberta. Through education, advocacy, and community 
              services, we help foster integration, empowerment, and social well-being for all.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <LocationIcon className={styles.contactIcon} />
                <p>Alberta, Canada</p>
              </div>
              <div className={styles.contactItem}>
                <PhoneIcon className={styles.contactIcon} />
                <p>(+1) 780-200-6752</p>
              </div>
              <div className={styles.contactItem}>
                <EmailIcon className={styles.contactIcon} />
                <p>sobjar12@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <div className={styles.footerLinksContainer}>
              <Link href="/about" className={styles.footerLink}>About Us</Link>
              <Link href="/mission" className={styles.footerLink}>Mission</Link>
              <Link href="/programs" className={styles.footerLink}>Programs</Link>
              <Link href="/blog" className={styles.footerLink}>Blog</Link>
              <Link href="/contact" className={styles.footerLink}>Contact</Link>
            </div>
          </div>

          {/* Get Involved */}
          <div className={styles.footerSection}>
            <h4>Get Involved</h4>
            <div className={styles.footerLinksContainer}>
              <Link href="/getInvolved#volunteer" className={styles.footerLink}>Volunteer</Link>
              <Link href="/getInvolved#partnerships" className={styles.footerLink}>Partnerships</Link>
              <Link href="/getInvolved#events" className={styles.footerLink}>Events</Link>
              <Link href="/donate" className={styles.footerLink}>Donate</Link>
            </div>
          </div>

          {/* Programs */}
          <div className={styles.footerSection}>
            <h4>Programs</h4>
            <div className={styles.footerLinksContainer}>
              <Link href="/programs#youth" className={styles.footerLink}>Youth Programs</Link>
              <Link href="/programs#community" className={styles.footerLink}>Community Outreach</Link>
              <Link href="/programs#education" className={styles.footerLink}>Educational Initiatives</Link>
              <Link href="/about#leadership" className={styles.footerLink}>Leadership</Link>
            </div>
          </div>

          {/* Follow Us */}
          <div className={styles.footerSection}>
            <h4>Follow Us</h4>
            <p className={styles.socialDescription}>
              Stay connected with our community and get updates on our latest programs and events.
            </p>
            <div className={styles.socialIcons}>
              <button
                onClick={handleFacebookClick}
                className={styles.socialIcon}
                aria-label="Follow us on Facebook"
              >
                <FacebookIcon />
              </button>
              <button
                onClick={handleInstagramClick}
                className={styles.socialIcon}
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon />
              </button>
              <button 
                onClick={handleWhatsappClick} 
                className={styles.socialIcon}
                aria-label="Join our WhatsApp group"
              >
                <WhatsappIcon />
              </button>
              <button 
                onClick={handleYoutubeClick} 
                className={styles.socialIcon}
                aria-label="Subscribe to our YouTube channel"
              >
                <YoutubeIcon />
              </button>
              <button 
                onClick={handleTiktokClick} 
                className={styles.socialIcon}
                aria-label="Follow us on TikTok"
              >
                <TiktokIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <p>&copy; {new Date().getFullYear()} Sobjar Canada. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="/terms" className={styles.legalLink}>Terms of Use</Link>
            <Link href="/refund" className={styles.legalLink}>Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}