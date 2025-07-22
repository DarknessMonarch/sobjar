"use client";

import Link from "next/link";
import Image from "next/image";
import Styles from "@/app/styles/blog.module.css";

// You'll need to add these images to your public/assets folder
// import BlogHeroImage from "@/public/assets/blog-hero.jpg";
// import AuthorAvatar from "@/public/assets/author-avatar.jpg";

export default function Blog() {
  const featuredPost = {
    id: 1,
    title:
      "Celebrating Somali Bantu Heritage Month: Stories of Resilience and Hope",
    excerpt:
      "Join us as we honor the rich cultural heritage of the Somali Bantu community and share inspiring stories of families who have built new lives in Alberta while preserving their traditions.",
    author: "Amina Hassan",
    date: "July 15, 2025",
    readTime: "8 min read",
    category: "Community",
    slug: "celebrating-somali-bantu-heritage-month",
    // image: BlogHeroImage,
    featured: true,
  };

  const blogPosts = [
    {
      id: 2,
      title: "Youth Leadership Program Graduates 25 New Community Leaders",
      excerpt:
        "Our latest cohort of young leaders completed an intensive 12-week program focused on community advocacy, cultural preservation, and professional development.",
      author: "Mohamed Ali",
      date: "July 12, 2025",
      readTime: "5 min read",
      category: "Youth Programs",
      slug: "youth-leadership-program-graduates",
      // image: YouthProgramImage,
    },
    {
      id: 3,
      title: "Building Bridges: Partnership with Calgary Public Library System",
      excerpt:
        "Learn about our new collaboration that brings multilingual resources and cultural programming to Somali Bantu families across the city.",
      author: "Fatima Omar",
      date: "July 8, 2025",
      readTime: "6 min read",
      category: "Partnerships",
      slug: "building-bridges-library-partnership",
      // image: PartnershipImage,
    },
    {
      id: 4,
      title: "Traditional Crafts Workshop: Preserving Ancient Arts",
      excerpt:
        "Discover how our community elders are teaching traditional Somali Bantu crafts to younger generations, ensuring these valuable skills survive and thrive.",
      author: "Halima Jama",
      date: "July 5, 2025",
      readTime: "4 min read",
      category: "Culture",
      slug: "traditional-crafts-workshop",
      // image: CraftsImage,
    },
    {
      id: 5,
      title: "Educational Support Program Shows Remarkable Results",
      excerpt:
        "After one year of implementation, our tutoring and mentorship program has helped 89% of participating students improve their academic performance.",
      author: "Ahmed Bashir",
      date: "July 2, 2025",
      readTime: "7 min read",
      category: "Education",
      slug: "educational-support-program-results",
      // image: EducationImage,
    },
    {
      id: 6,
      title: "Community Garden Project Brings Families Together",
      excerpt:
        "Our urban farming initiative not only provides fresh produce but creates a space for intergenerational knowledge sharing and community bonding.",
      author: "Sahra Ibrahim",
      date: "June 28, 2025",
      readTime: "5 min read",
      category: "Community",
      slug: "community-garden-project",
      // image: GardenImage,
    },
    {
      id: 7,
      title: "Mental Health Support: Breaking Stigma, Building Resilience",
      excerpt:
        "Addressing mental health challenges in our community through culturally sensitive approaches and peer support networks.",
      author: "Dr. Hassan Osman",
      date: "June 25, 2025",
      readTime: "9 min read",
      category: "Health & Wellness",
      slug: "mental-health-support-breaking-stigma",
      // image: HealthImage,
    },
  ];

  const categories = [
    "All Posts",
    "Community",
    "Youth Programs",
    "Education",
    "Culture",
    "Partnerships",
    "Health & Wellness",
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Community: "primary",
      "Youth Programs": "secondary",
      Education: "tertiary",
      Culture: "accent",
      Partnerships: "success",
      "Health & Wellness": "warning",
    };
    return colors[category] || "primary";
  };

  return (
    <section className={Styles.blogContainer}>
      {/* Hero Section */}
      <div className={Styles.heroSection}>
        <div className={Styles.heroContent}>
          <h1 className={Styles.heroTitle}>Our Stories</h1>
          <p className={Styles.heroSubtitle}>
            Discover the latest news, stories, and insights from the Sobjar
            Canada community. From success stories to program updates, stay
            connected with our mission to empower and uplift the Somali Bantu
            community in Alberta.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className={Styles.mainContent}>
        {/* Category Filter */}
        <div className={`${Styles.categoryFilter} ${Styles.fadeInSection}`}>
          <div className={Styles.categoryList}>
            {categories.map((category, index) => (
              <button
                key={category}
                className={`${Styles.categoryButton} ${
                  index === 0 ? Styles.active : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div className={`${Styles.featuredSection} ${Styles.fadeInSection}`}>
          <h2 className={Styles.sectionTitle}>Featured Story</h2>
          <article className={Styles.featuredPost}>
            {/* Uncomment when image is available */}
            {/* <div className={Styles.featuredImageContainer}>
              <Image 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className={Styles.featuredImage}
                width={800}
                height={450}
              />
            </div> */}

            <div className={Styles.featuredContent}>
              <div className={Styles.postMeta}>
                <span
                  className={`${Styles.category} ${
                    Styles[getCategoryColor(featuredPost.category)]
                  }`}
                >
                  {featuredPost.category}
                </span>
                <span className={Styles.readTime}>{featuredPost.readTime}</span>
              </div>

              <h3 className={Styles.featuredTitle}>
                <Link href={`/blog/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </h3>

              <p className={Styles.featuredExcerpt}>{featuredPost.excerpt}</p>

              <div className={Styles.authorInfo}>
                {/* Uncomment when author image is available */}
                {/* <Image 
                  src={AuthorAvatar} 
                  alt={featuredPost.author}
                  className={Styles.authorAvatar}
                  width={40}
                  height={40}
                /> */}
                <div className={Styles.authorDetails}>
                  <span className={Styles.authorName}>
                    {featuredPost.author}
                  </span>
                  <span className={Styles.postDate}>{featuredPost.date}</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Recent Posts */}
        <div className={`${Styles.postsSection} ${Styles.fadeInSection}`}>
          <h2 className={Styles.sectionTitle}>Recent Posts</h2>
          <div className={Styles.postsGrid}>
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className={`${Styles.postCard} ${Styles.fadeInSection}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Uncomment when images are available */}
                {/* <div className={Styles.postImageContainer}>
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    className={Styles.postImage}
                    width={400}
                    height={250}
                  />
                </div> */}

                <div className={Styles.postContent}>
                  <div className={Styles.postMeta}>
                    <span
                      className={`${Styles.category} ${
                        Styles[getCategoryColor(post.category)]
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className={Styles.readTime}>{post.readTime}</span>
                  </div>

                  <h3 className={Styles.postTitle}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className={Styles.postExcerpt}>{post.excerpt}</p>

                  <div className={Styles.postFooter}>
                    <div className={Styles.authorInfo}>
                      <span className={Styles.authorName}>{post.author}</span>
                      <span className={Styles.postDate}>{post.date}</span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className={Styles.readMore}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className={`${Styles.newsletterSection} ${Styles.fadeInSection}`}>
          <div className={Styles.newsletterContent}>
            <h2 className={Styles.newsletterTitle}>Stay Connected</h2>
            <p className={Styles.newsletterDescription}>
              Subscribe to our newsletter to receive the latest updates,
              stories, and news from the Sobjar Canada community directly in
              your inbox.
            </p>

            <form className={Styles.newsletterForm}>
              <div className={Styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={Styles.emailInput}
                  required
                />
                <button type="submit" className={Styles.subscribeButton}>
                  Subscribe
                </button>
              </div>
              <p className={Styles.privacyNote}>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
