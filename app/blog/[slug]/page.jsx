"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Styles from "@/app/styles/blogpost.module.css";

// Mock data - in real app, this would come from API/database
const blogPosts = {
  "celebrating-somali-bantu-heritage-month": {
    id: 1,
    title: "Celebrating Somali Bantu Heritage Month: Stories of Resilience and Hope",
    content: `
      <p>This July, we celebrate the rich cultural heritage of the Somali Bantu community, honoring the stories of resilience, hope, and cultural preservation that define our community in Alberta. As we reflect on our journey, we share the inspiring narratives of families who have built new lives while maintaining their deep-rooted traditions.</p>

      <h2>A Legacy of Strength</h2>
      <p>The Somali Bantu people have a unique history that spans generations. Originally from the fertile regions along the Jubba and Shabelle rivers in Somalia, our ancestors were skilled farmers and artisans who contributed significantly to the agricultural and cultural landscape of the region. Despite facing numerous challenges throughout history, including displacement and marginalization, the Somali Bantu community has maintained its distinct cultural identity and traditions.</p>

      <blockquote>"Our strength comes from our ability to preserve our culture while embracing new opportunities. We are not just survivors; we are thrivers who contribute to the rich multicultural fabric of Canada." - Elder Amina Hassan</blockquote>

      <h2>Stories from Our Community</h2>
      <p>This heritage month, we spotlight several families who have made remarkable contributions to both preserving their cultural heritage and building strong foundations in Alberta:</p>

      <h3>The Hassan Family: Bridging Generations</h3>
      <p>Mohamed and Fatima Hassan arrived in Calgary in 2008 with their three young children. Today, their eldest daughter is studying medicine at the University of Calgary, while their youngest son leads traditional dance performances at community events. "We wanted our children to know where they come from while pursuing their dreams in Canada," shares Fatima.</p>

      <h3>Traditional Arts Revival</h3>
      <p>Master craftsman Ahmed Osman has been instrumental in teaching traditional woodcarving and metalwork to younger community members. His workshop, held every Saturday at the community center, has trained over 50 young people in these ancient arts. "These skills are not just crafts; they are our connection to our ancestors," Ahmed explains.</p>

      <h2>Cultural Preservation Initiatives</h2>
      <p>Throughout this heritage month, Sobjar Canada has organized various activities to celebrate and preserve our cultural heritage:</p>

      <ul>
        <li><strong>Traditional Music and Dance Performances:</strong> Weekly performances featuring traditional Somali Bantu music and dance</li>
        <li><strong>Storytelling Sessions:</strong> Elders sharing oral histories and traditional folktales with younger generations</li>
        <li><strong>Craft Workshops:</strong> Hands-on sessions teaching traditional weaving, pottery, and metalwork</li>
        <li><strong>Cultural Food Festival:</strong> Showcasing traditional Somali Bantu cuisine and cooking techniques</li>
      </ul>

      <h2>Looking Forward</h2>
      <p>As we celebrate our heritage, we also look toward the future with optimism and determination. Our young people are excelling in schools, universities, and various professions while maintaining strong connections to their cultural roots. This balance between preservation and progress exemplifies the resilience that has always defined the Somali Bantu community.</p>

      <p>The month-long celebration concludes with our annual Heritage Festival on July 28th, where community members will showcase traditional arts, foods, and performances. This event serves as both a celebration of our past and a commitment to preserving our cultural legacy for future generations.</p>

      <h2>Join Us in Celebration</h2>
      <p>We invite all Albertans to join us in celebrating Somali Bantu Heritage Month. By learning about our culture, attending our events, and supporting our community initiatives, you become part of our story of resilience and hope. Together, we continue to build a more inclusive and culturally rich Alberta for everyone.</p>
    `,
    author: "Amina Hassan",
    authorBio: "Amina Hassan is a community leader and cultural preservation advocate who has been working with Somali Bantu families in Alberta for over 15 years.",
    date: "July 15, 2025",
    readTime: "8 min read",
    category: "Community",
    tags: ["Heritage", "Culture", "Community", "Traditions", "Celebration"],
    // image: BlogHeroImage,
  },
  "youth-leadership-program-graduates": {
    id: 2,
    title: "Youth Leadership Program Graduates 25 New Community Leaders",
    content: `
      <p>After an intensive 12-week journey of growth, learning, and community engagement, 25 exceptional young people from our community have successfully completed the Sobjar Canada Youth Leadership Program. This milestone represents not just individual achievements, but a collective step forward in building stronger community leadership for the future.</p>

      <h2>Program Overview</h2>
      <p>The Youth Leadership Program was designed to empower young Somali Bantu individuals aged 16-25 with the skills, knowledge, and confidence needed to become effective community leaders. The comprehensive curriculum covered essential areas including:</p>

      <ul>
        <li>Community advocacy and civic engagement</li>
        <li>Cultural preservation and promotion</li>
        <li>Professional development and career planning</li>
        <li>Public speaking and communication skills</li>
        <li>Project management and organizational leadership</li>
      </ul>

      <blockquote>"This program didn't just teach us skills; it showed us that our voices matter and that we have the power to create positive change in our community." - Sarah Osman, Program Graduate</blockquote>

      <h2>Transformative Learning Experience</h2>
      <p>Each week brought new challenges and opportunities for growth. Participants engaged in interactive workshops, community service projects, and mentorship sessions with established community leaders. The program emphasized practical application of learned skills through real-world projects that directly benefited the community.</p>

      <h3>Key Program Highlights</h3>
      <p>Throughout the 12 weeks, participants accomplished remarkable feats:</p>

      <ul>
        <li><strong>Community Service Hours:</strong> Collectively contributed over 500 hours of community service</li>
        <li><strong>Advocacy Projects:</strong> Developed and presented 8 community improvement proposals to local government</li>
        <li><strong>Cultural Events:</strong> Organized and led 3 major cultural celebration events</li>
        <li><strong>Mentorship:</strong> Each participant was paired with a community mentor for ongoing support</li>
      </ul>

      <h2>Graduate Spotlights</h2>
      <p>Among our graduates, several have already begun making significant impacts:</p>

      <h3>Ahmed Bashir - Community Advocacy</h3>
      <p>Ahmed successfully advocated for improved public transportation routes to better serve the Somali Bantu community. His proposal to the city council resulted in the addition of two new bus stops in key community areas.</p>

      <h3>Halima Jama - Cultural Preservation</h3>
      <p>Halima launched a digital storytelling project, interviewing community elders and creating video documentaries to preserve oral histories for future generations.</p>

      <h3>Omar Hassan - Youth Engagement</h3>
      <p>Omar established a peer mentoring program for newly arrived refugee youth, helping them navigate the Canadian education system and connect with community resources.</p>

      <h2>Community Impact</h2>
      <p>The ripple effects of this program extend far beyond the individual participants. These new leaders are already taking active roles in community organizations, volunteering for local initiatives, and serving as role models for younger community members.</p>

      <p>Program Director Mohamed Ali reflects, "What we've witnessed over these 12 weeks is nothing short of inspiring. These young people have not only developed valuable skills but have also discovered their potential as changemakers in our community."</p>

      <h2>Looking Ahead</h2>
      <p>The success of this inaugural cohort has paved the way for the program's expansion. Plans are already underway for the next cohort, which will begin in September 2025. Additionally, many of this year's graduates will serve as peer mentors for incoming participants, creating a sustainable cycle of leadership development.</p>

      <p>Applications for the Fall 2025 Youth Leadership Program will open on August 1st. We encourage all eligible young people to apply and join this transformative journey of personal growth and community engagement.</p>
    `,
    author: "Mohamed Ali",
    authorBio: "Mohamed Ali is the Program Director for Youth Development at Sobjar Canada and has over 10 years of experience in community leadership development.",
    date: "July 12, 2025",
    readTime: "5 min read",
    category: "Youth Programs",
    tags: ["Youth", "Leadership", "Education", "Community Development", "Mentorship"],
  },
  // Add more blog posts as needed...
};

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  const getCategoryColor = (category) => {
    const colors = {
      "Community": "primary",
      "Youth Programs": "secondary",
      "Education": "tertiary",
      "Culture": "accent",
      "Partnerships": "success",
      "Health & Wellness": "warning"
    };
    return colors[category] || "primary";
  };

  return (
    <article className={Styles.blogPostContainer}>
      {/* Back Navigation */}
      <div className={Styles.backNavigation}>
        <Link href="/blog" className={Styles.backLink}>
          ← Back to Stories
        </Link>
      </div>

      {/* Article Header */}
      <header className={Styles.articleHeader}>
        <div className={Styles.articleMeta}>
          <span className={`${Styles.category} ${Styles[getCategoryColor(post.category)]}`}>
            {post.category}
          </span>
          <span className={Styles.readTime}>{post.readTime}</span>
        </div>

        <h1 className={Styles.articleTitle}>{post.title}</h1>

        <div className={Styles.authorSection}>
          <div className={Styles.authorInfo}>
            <div className={Styles.authorDetails}>
              <span className={Styles.authorName}>By {post.author}</span>
              <span className={Styles.publishDate}>{post.date}</span>
            </div>
          </div>
        </div>

        {/* Featured Image Container - Uncomment when image is available */}
        {/* {post.image && (
          <div className={Styles.heroImageContainer}>
            <Image 
              src={post.image} 
              alt={post.title}
              className={Styles.heroImage}
              width={1200}
              height={600}
              priority
            />
          </div>
        )} */}
      </header>

      {/* Article Content */}
      <div className={Styles.articleContent}>
        <div 
          className={Styles.contentBody}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* Article Footer */}
      <footer className={Styles.articleFooter}>
        {/* Tags */}
        {post.tags && (
          <div className={Styles.tagsSection}>
            <h3 className={Styles.tagsTitle}>Tags:</h3>
            <div className={Styles.tagsList}>
              {post.tags.map((tag, index) => (
                <span key={index} className={Styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        {post.authorBio && (
          <div className={Styles.authorBio}>
            <h3 className={Styles.authorBioTitle}>About the Author</h3>
            <div className={Styles.authorBioContent}>
              <p><strong>{post.author}:</strong> {post.authorBio}</p>
            </div>
          </div>
        )}

        {/* Share Section */}
        <div className={Styles.shareSection}>
          <h3 className={Styles.shareTitle}>Share this story</h3>
          <div className={Styles.shareButtons}>
            <button className={Styles.shareButton}>
              Share on Facebook
            </button>
            <button className={Styles.shareButton}>
              Share on Twitter
            </button>
            <button className={Styles.shareButton}>
              Copy Link
            </button>
          </div>
        </div>

        {/* Navigation to other posts */}
        <div className={Styles.postNavigation}>
          <Link href="/blog" className={Styles.backToBlog}>
            ← Back to all stories
          </Link>
        </div>
      </footer>
    </article>
  );
}