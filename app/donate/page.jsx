"use client";

import { useState, useEffect } from "react";
import styles from "@/app/styles/donation.module.css";
import { IoHeartOutline, IoTrophy, IoPeople, IoGlobe, IoCheckmarkCircle, IoArrowForward, IoShield, IoCard, IoTime } from 'react-icons/io5';

export default function DonationPage() {
  const [amount, setAmount] = useState(50);
  const [isMonthly, setIsMonthly] = useState(false);
  const [donorEmail, setDonorEmail] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorMessage, setDonorMessage] = useState("");
  const [selectedCause, setSelectedCause] = useState("general");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!document.getElementById("paystack-script")) {
      const script = document.createElement("script");
      script.id = "paystack-script";
      script.src = "https://js.paystack.co/v1/inline.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleDonate = () => {
    if (!donorEmail || !donorName) {
      alert("Please enter your name and email.");
      return;
    }

    setIsLoading(true);

    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
      email: donorEmail,
      amount: amount * 100,
      currency: "USD",
      label: isMonthly ? "Monthly Donation" : "One-time Donation",
      metadata: {
        custom_fields: [
          {
            display_name: "Donor Name",
            variable_name: "donor_name",
            value: donorName,
          },
          {
            display_name: "Selected Cause",
            variable_name: "selected_cause",
            value: selectedCause,
          },
          {
            display_name: "Donor Message",
            variable_name: "donor_message",
            value: donorMessage,
          },
        ],
      },
      callback: function (response) {
        setIsLoading(false);
        alert(`Thank you ${donorName}! Your donation ref is ${response.reference}`);
      },
      onClose: function () {
        setIsLoading(false);
        alert("Donation window closed.");
      },
    });

    handler.openIframe();
  };

  const presetAmounts = [25, 50, 100, 250, 500, 1000];
  
  const impactAreas = [
    {
      id: "youth",
      title: "Youth Development",
      description: "Educational support, mentorship, and leadership programs",
      impact: "$50 sponsors a youth for one month",
      icon: IoPeople,
      color: "#10b981"
    },
    {
      id: "families",
      title: "Family Support",
      description: "Settlement services, housing assistance, and family counseling",
      impact: "$100 supports a family's monthly needs",
      icon: IoHeartOutline,
      color: "#3b82f6"
    },
    {
      id: "education",
      title: "Educational Programs",
      description: "Language classes, skills training, and academic support",
      impact: "$25 funds educational materials",
      icon: IoTrophy,
      color: "#8b5cf6"
    },
    {
      id: "general",
      title: "General Support",
      description: "Where needed most - flexible support across all programs",
      impact: "Every dollar makes a difference",
      icon: IoGlobe,
      color: "#f59e0b"
    }
  ];

  const donorBenefits = [
    {
      icon: IoShield,
      title: "100% Secure",
      description: "Your donation is protected with bank-level security"
    },
    {
      icon: IoCard,
      title: "Tax Deductible",
      description: "Receive official tax receipts for all donations"
    },
    {
      icon: IoTime,
      title: "Immediate Impact",
      description: "Your support goes directly to community programs"
    }
  ];

  const communityStats = [
    { number: "1,500+", label: "Community Members Served", icon: IoPeople },
    { number: "500+", label: "Youth Supported", icon: IoTrophy },
    { number: "12", label: "Cities Reached", icon: IoGlobe },
    { number: "6+", label: "Years of Service", icon: IoHeartOutline }
  ];

  return (
    <div className={styles.donationContainer}>
      {/* Enhanced Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.heroContent}>
            <div className={styles.heroTextContent}>
              <div className={styles.heroBadge}>
                <span className={styles.heroTag}>Make a Difference</span>
              </div>
              <h1 className={styles.heroTitle}>
                Empower Our
                <span className={styles.heroAccent}> Community</span>
              </h1>
              <p className={styles.heroDescription}>
                Your generous donation helps us provide vital support to the Somali Bantu community in Alberta. 
                Together, we're building stronger families, empowering youth, and creating lasting change through 
                education, advocacy, and community programs.
              </p>
              
              {/* Community Impact Stats */}
              <div className={styles.heroStatsGrid}>
                {communityStats.map((stat, index) => (
                  <div key={index} className={styles.heroStatCard}>
                    <div className={styles.heroStatIcon}>
                      <stat.icon />
                    </div>
                    <span className={styles.heroStatNumber}>{stat.number}</span>
                    <span className={styles.heroStatLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.heroImageContainer}>
              <div className={styles.donationVisual}>
                <div className={styles.donationCircle}>
                  <IoHeartOutline className={styles.donationIcon} />
                </div>
                <div className={styles.rippleEffect}></div>
                <div className={styles.rippleEffect}></div>
                <div className={styles.rippleEffect}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className={styles.heroFloatingElements}>
          <div className={styles.heroFloatingElement}></div>
          <div className={styles.heroFloatingElement}></div>
          <div className={styles.heroFloatingElement}></div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className={styles.impactSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Your Impact</span>
            <h2 className={styles.sectionTitle}>Choose Where Your Donation Goes</h2>
            <p className={styles.sectionSubtitle}>
              Select the cause closest to your heart, or choose general support for maximum flexibility
            </p>
          </div>
          
          <div className={styles.impactGrid}>
            {impactAreas.map((area) => (
              <div 
                key={area.id} 
                className={`${styles.impactCard} ${selectedCause === area.id ? styles.selected : ''}`}
                onClick={() => setSelectedCause(area.id)}
              >
                <div className={styles.impactCardHeader}>
                  <div className={styles.impactIcon} style={{'--impact-color': area.color}}>
                    <area.icon />
                  </div>
                  <h3 className={styles.impactTitle}>{area.title}</h3>
                </div>
                <div className={styles.impactCardContent}>
                  <p className={styles.impactDescription}>{area.description}</p>
                  <div className={styles.impactMetric}>
                    <IoCheckmarkCircle className={styles.impactCheckIcon} />
                    <span>{area.impact}</span>
                  </div>
                </div>
                <div className={styles.impactCardOverlay}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Donation Form */}
      <section className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.donationFormContainer}>
            <div className={styles.donationBox}>
              <div className={styles.donationBoxHeader}>
                <h3 className={styles.donationBoxTitle}>Complete Your Donation</h3>
                <p className={styles.donationBoxSubtitle}>Every contribution makes a meaningful difference</p>
              </div>

              {/* Donation Type Toggle */}
              <div className={styles.toggleSection}>
                <label className={styles.toggleLabel}>Donation Frequency</label>
                <div className={styles.toggleGroup}>
                  <button
                    onClick={() => setIsMonthly(false)}
                    className={`${styles.toggleBtn} ${!isMonthly ? styles.active : ""}`}
                  >
                    One-Time
                  </button>
                  <button
                    onClick={() => setIsMonthly(true)}
                    className={`${styles.toggleBtn} ${isMonthly ? styles.active : ""}`}
                  >
                    Monthly
                    <span className={styles.toggleBadge}>More Impact</span>
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className={styles.amountSection}>
                <label className={styles.sectionLabel}>Select Amount (USD)</label>
                <div className={styles.amountGrid}>
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setAmount(amt)}
                      className={`${styles.amountBtn} ${amount === amt ? styles.active : ""}`}
                    >
                      <span className={styles.amountValue}>${amt}</span>
                      {isMonthly && <span className={styles.amountFreq}>/month</span>}
                    </button>
                  ))}
                </div>
                
                <div className={styles.customAmountWrapper}>
                  <label className={styles.inputLabel}>Or enter custom amount</label>
                  <div className={styles.customAmountInput}>
                    <span className={styles.currencySymbol}>$</span>
                    <input
                      type="number"
                      min="1"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className={styles.amountInput}
                      placeholder="Enter amount"
                    />
                    {isMonthly && <span className={styles.monthlyIndicator}>/month</span>}
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className={styles.personalInfoSection}>
                <label className={styles.sectionLabel}>Your Information</label>
                <div className={styles.inputGroup}>
                  <div className={styles.inputWrapper}>
                    <input
                      type="text"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className={styles.formInput}
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className={styles.inputWrapper}>
                    <input
                      type="email"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      className={styles.formInput}
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
                
                <div className={styles.inputWrapper}>
                  <textarea
                    value={donorMessage}
                    onChange={(e) => setDonorMessage(e.target.value)}
                    className={styles.messageInput}
                    placeholder="Leave an optional message or dedication (optional)"
                    rows={3}
                  />
                </div>
              </div>

              {/* Donation Summary */}
              <div className={styles.donationSummary}>
                <div className={styles.summaryHeader}>
                  <h4 className={styles.summaryTitle}>Donation Summary</h4>
                </div>
                <div className={styles.summaryContent}>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Donation Type:</span>
                    <span className={styles.summaryValue}>
                      {isMonthly ? "Monthly Recurring" : "One-Time"}
                    </span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Cause:</span>
                    <span className={styles.summaryValue}>
                      {impactAreas.find(area => area.id === selectedCause)?.title}
                    </span>
                  </div>
                  <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                    <span className={styles.summaryLabel}>Total:</span>
                    <span className={styles.summaryAmount}>
                      ${amount}{isMonthly ? "/month" : ""}
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`} 
                onClick={handleDonate}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className={styles.loadingSpinner}></div>
                    Processing...
                  </>
                ) : (
                  <>
                    Donate ${amount} {isMonthly ? "Monthly" : "Now"}
                    <IoArrowForward className={styles.submitIcon} />
                  </>
                )}
              </button>

              {/* Security & Benefits */}
              <div className={styles.donorBenefits}>
                {donorBenefits.map((benefit, index) => (
                  <div key={index} className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>
                      <benefit.icon />
                    </div>
                    <div className={styles.benefitContent}>
                      <span className={styles.benefitTitle}>{benefit.title}</span>
                      <span className={styles.benefitDescription}>{benefit.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={styles.ctaSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaHeader}>
              <span className={styles.ctaTag}>Join Our Mission</span>
              <h2 className={styles.ctaTitle}>Every Donation Creates Lasting Change</h2>
              <p className={styles.ctaDescription}>
                Your support helps us continue providing essential services to the Somali Bantu community. 
                From youth programs to family support, your donation directly impacts lives and builds stronger communities.
              </p>
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