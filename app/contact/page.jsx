"use client";

import { useState } from "react";
import { MdEmail as EmailIcon } from "react-icons/md";
import { IoCall as PhoneIcon } from "react-icons/io5";
import { IoLocationOutline as LocationIcon } from "react-icons/io5";
import { FaClock as ClockIcon } from "react-icons/fa";
import { FaFacebookF as FacebookIcon } from "react-icons/fa";
import { BsInstagram as InstagramIcon } from "react-icons/bs";
import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";
import { FaYoutube as YoutubeIcon } from "react-icons/fa";
import styles from "@/app/styles/contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "general"
    });
  };

  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.contactContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Get in Touch</h1>
          <p className={styles.heroSubtitle}>
            We're here to help and answer any questions you might have. 
            Reach out to us and we'll respond as soon as we can.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Contact Info Section */}
        <section className={`${styles.contactInfoSection} ${styles.fadeInSection}`}>
          <h2 className={styles.sectionTitle}>Contact Information</h2>
          <div className={styles.contactInfoGrid}>
            <div className={styles.contactInfoCard}>
              <div className={styles.contactIconWrapper}>
                <LocationIcon className={styles.contactIcon} />
              </div>
              <div className={styles.contactDetails}>
                <h3>Our Location</h3>
                <p>Alberta, Canada</p>
                <p className={styles.contactNote}>Serving communities across Alberta</p>
              </div>
            </div>

            <div className={styles.contactInfoCard}>
              <div className={styles.contactIconWrapper}>
                <PhoneIcon className={styles.contactIcon} />
              </div>
              <div className={styles.contactDetails}>
                <h3>Phone Number</h3>
                <p>(+1) 780-200-6752</p>
                <p className={styles.contactNote}>Available Monday to Friday</p>
              </div>
            </div>

            <div className={styles.contactInfoCard}>
              <div className={styles.contactIconWrapper}>
                <EmailIcon className={styles.contactIcon} />
              </div>
              <div className={styles.contactDetails}>
                <h3>Email Address</h3>
                <p>sobjar12@gmail.com</p>
                <p className={styles.contactNote}>We respond within 24 hours</p>
              </div>
            </div>

            <div className={styles.contactInfoCard}>
              <div className={styles.contactIconWrapper}>
                <ClockIcon className={styles.contactIcon} />
              </div>
              <div className={styles.contactDetails}>
                <h3>Office Hours</h3>
                <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
                <p className={styles.contactNote}>Mountain Standard Time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className={`${styles.contactFormSection} ${styles.fadeInSection}`}>
          <div className={styles.contactFormContainer}>
            <div className={styles.formIntro}>
              <h2 className={styles.sectionTitle}>Send Us a Message</h2>
              <p className={styles.formDescription}>
                Have a question or want to learn more about our programs? 
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name" className={styles.inputLabel}>Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.inputLabel}>Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="phone" className={styles.inputLabel}>Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="inquiryType" className={styles.inputLabel}>Inquiry Type</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className={styles.formSelect}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="partnership">Partnership</option>
                    <option value="programs">Programs & Services</option>
                    <option value="donation">Donation Information</option>
                    <option value="events">Events</option>
                  </select>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="subject" className={styles.inputLabel}>Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                  placeholder="Enter the subject of your message"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.inputLabel}>Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.formTextarea}
                  required
                  rows="6"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>

              <p className={styles.privacyNote}>
                By submitting this form, you agree to our privacy policy. 
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </section>

        {/* Social Media Section */}
        <section className={`${styles.socialMediaSection} ${styles.fadeInSection}`}>
          <h2 className={styles.sectionTitle}>Connect With Us</h2>
          <p className={styles.socialDescription}>
            Follow us on social media to stay updated on our latest programs, 
            events, and community initiatives.
          </p>
          
          <div className={styles.socialGrid}>
            <div className={styles.socialCard} onClick={() => handleSocialClick("https://m.facebook.com/SobjarCanada/")}>
              <div className={`${styles.socialIconWrapper} ${styles.facebook}`}>
                <FacebookIcon className={styles.socialIcon} />
              </div>
              <div className={styles.socialContent}>
                <h3>Facebook</h3>
                <p>Follow us for community updates and event announcements</p>
                <span className={styles.socialLink}>@SobjarCanada</span>
              </div>
            </div>

            <div className={styles.socialCard} onClick={() => handleSocialClick("https://www.instagram.com/sobjarstar/")}>
              <div className={`${styles.socialIconWrapper} ${styles.instagram}`}>
                <InstagramIcon className={styles.socialIcon} />
              </div>
              <div className={styles.socialContent}>
                <h3>Instagram</h3>
                <p>See photos from our programs and community activities</p>
                <span className={styles.socialLink}>@sobjarstar</span>
              </div>
            </div>

            <div className={styles.socialCard} onClick={() => handleSocialClick("https://chat.whatsapp.com/CnjBdL4RvVT7raFaJHml88")}>
              <div className={`${styles.socialIconWrapper} ${styles.whatsapp}`}>
                <WhatsappIcon className={styles.socialIcon} />
              </div>
              <div className={styles.socialContent}>
                <h3>WhatsApp</h3>
                <p>Join our community group for quick updates and support</p>
                <span className={styles.socialLink}>Join Group Chat</span>
              </div>
            </div>

            <div className={styles.socialCard} onClick={() => handleSocialClick("https://www.youtube.com/channel/UCquX1JwHrF0_ijoCIZGuwhA")}>
              <div className={`${styles.socialIconWrapper} ${styles.youtube}`}>
                <YoutubeIcon className={styles.socialIcon} />
              </div>
              <div className={styles.socialContent}>
                <h3>YouTube</h3>
                <p>Watch videos about our programs and community stories</p>
                <span className={styles.socialLink}>Subscribe to Channel</span>
              </div>
            </div>
          </div>
        </section>

        {/* Visit Us Section */}
        <section className={`${styles.visitSection} ${styles.fadeInSection}`}>
          <div className={styles.visitContent}>
            <div className={styles.visitInfo}>
              <h2 className={styles.sectionTitle}>Visit Our Office</h2>
              <p className={styles.visitDescription}>
                We welcome visitors to our office in Alberta. Whether you're interested 
                in volunteering, learning about our programs, or just want to meet our team, 
                we'd love to see you.
              </p>
              
              <div className={styles.visitDetails}>
                <div className={styles.visitItem}>
                  <LocationIcon className={styles.visitIcon} />
                  <div>
                    <h4>Address</h4>
                    <p>Alberta, Canada</p>
                  </div>
                </div>
                
                <div className={styles.visitItem}>
                  <ClockIcon className={styles.visitIcon} />
                  <div>
                    <h4>Office Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Weekend visits by appointment</p>
                  </div>
                </div>
                
                <div className={styles.visitItem}>
                  <PhoneIcon className={styles.visitIcon} />
                  <div>
                    <h4>Schedule a Visit</h4>
                    <p>Call us at (+1) 780-200-6752</p>
                    <p>or email sobjar12@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.visitImagePlaceholder}>
              <div className={styles.placeholderContent}>
                <LocationIcon className={styles.placeholderIcon} />
                <p>Office Location</p>
                <small>Alberta, Canada</small>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}