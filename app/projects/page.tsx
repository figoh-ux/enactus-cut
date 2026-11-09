"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="projects-page">
      {/* NAVIGATION BAR */}
      <header className="navbar">
        <div className="nav-container">
          <Link href="/" className="cut-logo">
            <img src="/cut-logo.png" alt="CUT Logo" />
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="/#focus" onClick={() => setMenuOpen(false)}>
              Our Focus
            </Link>
            <Link href="/projects" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
            <Link href="/#join" onClick={() => setMenuOpen(false)}>
              Our Team
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </nav>

          <Link href="/" className="enactus-logo">
            <img src="/enactus-logo.png" alt="Enactus Logo" />
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="projects-hero">
        <div className="projects-hero-content">
          <span className="projects-tag">ENACTUS CUT ZIMBABWE</span>

          <h1>
            Turning Ideas Into
            <span> Meaningful Impact.</span>
          </h1>

          <p>
            Discover how Enactus CUT students use entrepreneurship, innovation
            and teamwork to develop solutions that create positive change in
            communities.
          </p>

          <Link href="#featured-projects" className="projects-button">
            Explore Our Projects
          </Link>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="projects-intro">
        <div className="projects-intro-content">
          <span className="projects-section-tag">WHAT WE DO</span>

          <h2>
            Ideas That Make
            <span> A Difference.</span>
          </h2>

          <p>
            At Enactus Chinhoyi University of Technology, we believe students
            can become drivers of positive change. Through entrepreneurial
            thinking, innovation and collaboration, we work towards addressing
            challenges affecting communities and creating opportunities for
            sustainable development.
          </p>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="featured-projects" id="featured-projects">
        <div className="projects-heading">
          <span className="projects-section-tag">OUR WORK</span>

          <h2>Explore Our Projects</h2>

          <p>
            Discover initiatives that demonstrate the power of student-led
            entrepreneurship and community action.
          </p>
        </div>

        <div className="projects-grid">
          {/* PROJECT 1 - REPLACE WITH A REAL ENACTUS PROJECT */}
          <article className="project-card">
            <div className="project-image-placeholder">
              {/* Add an authentic project photograph here */}
              {/* Example: public/project-one.jpg */}
              <span>Project Photograph 01</span>
            </div>

            <div className="project-card-content">
              <span className="project-category">COMMUNITY DEVELOPMENT</span>

              <h3>Community Project</h3>

              <p>
                Add a description of an Enactus CUT initiative, explaining the
                community challenge it addresses and the solution being
                developed.
              </p>

              <span className="project-status">Project Information</span>
            </div>
          </article>

          {/* PROJECT 2 - REPLACE WITH A REAL ENACTUS PROJECT */}
          <article className="project-card">
            <div className="project-image-placeholder">
              {/* Add an authentic project photograph here */}
              {/* Example: public/project-two.jpg */}
              <span>Project Photograph 02</span>
            </div>

            <div className="project-card-content">
              <span className="project-category">
                ENVIRONMENTAL SUSTAINABILITY
              </span>

              <h3>Environmental Project</h3>

              <p>
                Add information about an environmental initiative, including its
                objectives, activities and expected benefits to the community.
              </p>

              <span className="project-status">Project Information</span>
            </div>
          </article>

          {/* PROJECT 3 - REPLACE WITH A REAL ENACTUS PROJECT */}
          <article className="project-card">
            <div className="project-image-placeholder">
              {/* Add an authentic project photograph here */}
              {/* Example: public/project-three.jpg */}
              <span>Project Photograph 03</span>
            </div>

            <div className="project-card-content">
              <span className="project-category">ENTREPRENEURSHIP</span>

              <h3>Entrepreneurship Project</h3>

              <p>
                Add details about a student-led entrepreneurial initiative,
                highlighting the opportunities it creates and the people it
                benefits.
              </p>

              <span className="project-status">Project Information</span>
            </div>
          </article>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="projects-impact">
        <div className="projects-impact-content">
          <span className="projects-section-tag">OUR PURPOSE</span>

          <h2>
            Creating Impact Beyond
            <span> The Classroom.</span>
          </h2>

          <p>
            Our work goes beyond academic learning. We encourage students to
            apply their knowledge, develop leadership skills and create
            practical solutions to real-world challenges. Through our projects,
            we aim to contribute to stronger communities and a more sustainable
            future.
          </p>
        </div>

        <div className="impact-points">
          <div className="impact-point">
            <span>01</span>
            <h3>Innovation</h3>
            <p>Developing creative solutions to real-world challenges.</p>
          </div>

          <div className="impact-point">
            <span>02</span>
            <h3>Entrepreneurship</h3>
            <p>Turning ideas into opportunities for positive change.</p>
          </div>

          <div className="impact-point">
            <span>03</span>
            <h3>Sustainability</h3>
            <p>Working towards solutions with lasting community benefits.</p>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="projects-approach">
        <div className="projects-heading">
          <span className="projects-section-tag">HOW WE WORK</span>

          <h2>From Ideas to Action</h2>

          <p>
            Our approach brings students together to identify challenges,
            develop ideas and implement meaningful solutions.
          </p>
        </div>

        <div className="approach-grid">
          <div className="approach-card">
            <span>01</span>
            <h3>Identify</h3>
            <p>
              Understand community challenges and identify opportunities for
              improvement.
            </p>
          </div>

          <div className="approach-card">
            <span>02</span>
            <h3>Innovate</h3>
            <p>
              Develop creative ideas and entrepreneurial solutions to address
              those challenges.
            </p>
          </div>

          <div className="approach-card">
            <span>03</span>
            <h3>Implement</h3>
            <p>
              Work together with communities and partners to put solutions into
              action.
            </p>
          </div>

          <div className="approach-card">
            <span>04</span>
            <h3>Evaluate</h3>
            <p>
              Assess progress, learn from experience and improve our projects
              over time.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="projects-cta">
        <div className="projects-cta-content">
          <h2>Be Part of the Change.</h2>

          <p>
            Join Enactus CUT as we work together to turn entrepreneurial ideas
            into meaningful action.
          </p>

          <Link href="/contact" className="projects-cta-button">
            Get Involved
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <img src="/enactus-logo.png" alt="Enactus CUT Logo" />

            <p>
              Empowering students to create a better future through
              entrepreneurial action.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/#focus">Our Focus</Link>
          </div>

          <div className="footer-links">
            <h3>Get Involved</h3>
            <Link href="/#join">Join Our Team</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          <div className="footer-contact">
            <h3>Find Us</h3>
            <p>Chinhoyi University of Technology</p>
            <p>Chinhoyi, Zimbabwe</p>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="footer-social">
            <h3>Follow Our Journey</h3>
            <p>Connect with Enactus CUT on social media.</p>

            <div className="footer-social-icons">
              {/* TIKTOK */}
              <a
                href="https://www.tiktok.com/@enactus_cut.zw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Enactus CUT on TikTok"
                title="TikTok"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.4v13.67a2.89 2.89 0 0 1-2.89 2.74 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.3 0 .59.05.87.14V9.3a6.33 6.33 0 0 0-.87-.06A6.29 6.29 0 1 0 15.82 15V8.01a8.16 8.16 0 0 0 4.77 1.54V6.14a4.85 4.85 0 0 1-1-.1Z" />
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/enactus_cut.zw/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Enactus CUT on Instagram"
                title="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm4.25 2.9a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 1.8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.5-2.7a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
                </svg>
              </a>
            </div>

            <span className="footer-social-handle">@enactus_cut.zw</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Enactus CUT Zimbabwe. All Rights Reserved.</p>
          <p>Powered by Figoh Technologies.</p>
        </div>
      </footer>
    </main>
  );
}
