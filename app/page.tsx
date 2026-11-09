"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [year, setYear] = useState("2026");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <main>
      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="nav-container">
          {/* CUT LOGO - LEFT */}
          <a href="/" className="cut-logo" onClick={() => setMenuOpen(false)}>
            <img
              src="/cut-logo.png"
              alt="Chinhoyi University of Technology Logo"
            />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            type="button"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* NAVIGATION LINKS */}
          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="/" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="/about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="/#focus" onClick={() => setMenuOpen(false)}>
              Our Focus
            </a>

            <a href="/projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>

            <a href="/#join" onClick={() => setMenuOpen(false)}>
              Our Team
            </a>

            <a href="/#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>

          {/* ENACTUS LOGO - RIGHT */}
          <a
            href="/"
            className="enactus-logo"
            onClick={() => setMenuOpen(false)}
          >
            <img src="/enactus-logo.png" alt="Enactus Logo" />
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="hero-tag">
            ENACTUS CHINHOYI UNIVERSITY OF TECHNOLOGY
          </span>

          <h1>
            Empowering People.
            <span> Transforming Communities.</span>
          </h1>

          <p>
            We are a community of student leaders using entrepreneurship,
            innovation and action to create positive and sustainable change in
            our communities.
          </p>

          <div className="hero-buttons">
            <a href="/projects" className="primary-button">
              Explore Our Projects →
            </a>

            <a href="/about" className="secondary-button">
              Discover Enactus
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/enactus-team.jpg.jpeg"
            alt="Enactus CUT students working together"
          />
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="impact">
        <div className="impact-heading">
          <span>OUR IMPACT</span>

          <h2>Creating Change That Matters</h2>

          <p>
            Our work is driven by innovation, entrepreneurship and a commitment
            to improving lives.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about section" id="about">
        <div className="about-image">
          <img src="/project-1.jpg.jpeg" alt="Enactus CUT project" />
        </div>

        <div className="about-content">
          <span className="section-label">WHO WE ARE</span>

          <h2>
            Students Today.
            <span> Leaders Tomorrow.</span>
          </h2>

          <p>
            Enactus CUT is a student-led organisation at Chinhoyi University of
            Technology that brings together students who believe in the power of
            entrepreneurial action.
          </p>

          <p>
            Through innovative ideas and practical projects, we aim to address
            real-world challenges and contribute towards sustainable community
            development.
          </p>

          <a href="/about" className="text-link">
            Discover More →
          </a>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="focus section" id="focus">
        <div className="section-heading">
          <span className="section-label">WHAT DRIVES US</span>

          <h2>Our Areas of Focus</h2>

          <p>
            We believe entrepreneurship can be a powerful tool for creating
            meaningful change.
          </p>
        </div>

        <div className="focus-grid">
          <div className="focus-card">
            <div className="focus-icon">💡</div>

            <h3>Innovation</h3>

            <p>
              Developing creative solutions to challenges affecting our
              communities.
            </p>
          </div>

          <div className="focus-card">
            <div className="focus-icon">🚀</div>

            <h3>Entrepreneurship</h3>

            <p>
              Promoting entrepreneurial thinking and sustainable business
              opportunities.
            </p>
          </div>

          <div className="focus-card">
            <div className="focus-icon">🌍</div>

            <h3>Community Development</h3>

            <p>
              Working towards improving livelihoods and creating lasting social
              impact.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="projects section" id="projects">
        <div className="section-heading">
          <span className="section-label">OUR WORK</span>

          <h2>Projects Making A Difference</h2>

          <p>Discover how our students turn ideas into meaningful action.</p>
        </div>

        <div className="project-grid">
          <div className="project-card">
            <img src="/project-1.jpg.jpeg" alt="Enactus CUT project" />

            <div className="project-info">
              <span>OUR PROJECTS</span>

              <h3>Community Innovation</h3>

              <p>Showcasing student-led solutions to community challenges.</p>

              <a href="/projects">Explore Projects →</a>
            </div>
          </div>
        </div>

        <div className="projects-view-all">
          <a href="/projects" className="primary-button">
            View All Projects →
          </a>
        </div>
      </section>

      {/* JOIN ENACTUS */}
      <section className="join" id="join">
        <div>
          <span>BE PART OF THE CHANGE</span>

          <h2>
            Your Ideas Can
            <br />
            Change Lives.
          </h2>

          <p>
            Join a community of students who are passionate about innovation,
            entrepreneurship and making a difference.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <div className="footer-container">
          <div className="footer-about">
            <img src="/enactus-logo.png" alt="Enactus CUT Logo" />

            <p>
              Empowering students to create positive change through
              entrepreneurial action.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>

            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/projects">Our Projects</a>
            <a href="/#focus">Our Focus</a>
          </div>

          <div className="footer-links">
            <h3>Get Involved</h3>

            <a href="/#join">Join Enactus</a>
            <a href="/contact">Contact Us</a>
          </div>

          <div className="footer-links">
            <h3>Find Us</h3>

            <p>Chinhoyi University of Technology</p>
            <p>Chinhoyi, Zimbabwe</p>
          </div>

          {/* SOCIAL MEDIA LINKS */}
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
          <p>© {year} Enactus CUT Zimbabwe. All Rights Reserved.</p>

          <p>Powered by Figoh Technologies.</p>
        </div>
      </footer>
    </main>
  );
}
