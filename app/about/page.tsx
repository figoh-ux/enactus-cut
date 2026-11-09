"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="about-page">
      {/* NAVIGATION */}

      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="cut-logo">
            <img
              src="/cut-logo.png"
              alt="Chinhoyi University of Technology Logo"
            />
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            type="button"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
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
          </div>

          <a href="/" className="enactus-logo">
            <img src="/enactus-logo.png" alt="Enactus Logo" />
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}

      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-tag">ABOUT ENACTUS CUT</span>

          <h1>
            Creating a Better Future
            <span> Through Entrepreneurship.</span>
          </h1>

          <p>
            We are a community of students committed to using entrepreneurial
            action to create positive change in our communities.
          </p>

          <Link href="/projects" className="about-button">
            Explore Our Projects →
          </Link>
        </div>
      </section>

      {/* WHO WE ARE */}

      <section className="about-who">
        <div className="about-image-container">
          <Image
            src="/enactus-team.jpg.jpeg"
            alt="Enactus CUT team"
            width={650}
            height={450}
            className="about-team-image"
          />
        </div>

        <div className="about-who-content">
          <span className="about-tag">WHO WE ARE</span>

          <h2>Students. Innovators. Changemakers.</h2>

          <p>
            Enactus CUT Zimbabwe brings together students who believe that
            business and entrepreneurship can be powerful tools for addressing
            social, economic and environmental challenges.
          </p>

          <p>
            Through teamwork, innovation and practical projects, we aim to
            develop solutions that improve lives and contribute to sustainable
            community development.
          </p>
        </div>
      </section>

      {/* TEAM GALLERY */}

      <section className="about-gallery">
        <div className="about-section-heading">
          <span className="about-tag">OUR COMMUNITY</span>

          <h2>Life at Enactus CUT</h2>

          <p>
            A glimpse into our teamwork, activities, experiences and commitment
            to creating meaningful change.
          </p>
        </div>

        <div className="about-gallery-grid">
          <div className="gallery-item gallery-large">
            <Image
              src="/enactus-team.jpg.jpeg"
              alt="Enactus CUT team"
              width={700}
              height={500}
            />
          </div>

          <div className="gallery-item">
            <Image
              src="/team-1.jpg"
              alt="Enactus CUT team members"
              width={450}
              height={300}
            />
          </div>

          <div className="gallery-item">
            <Image
              src="/team-2.jpg"
              alt="Enactus CUT team activities"
              width={450}
              height={300}
            />
          </div>

          <div className="gallery-item">
            <Image
              src="/team-3.jpg"
              alt="Enactus CUT members working together"
              width={450}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* MISSION, VISION AND VALUES */}

      <section className="about-values">
        <div className="about-section-heading">
          <span className="about-tag">OUR PURPOSE</span>

          <h2>What Drives Us</h2>

          <p>Our commitment to creating meaningful and lasting impact.</p>
        </div>

        <div className="about-values-grid">
          <div className="about-value-card">
            <div className="about-icon">🎯</div>

            <h3>Our Mission</h3>

            <p>
              To empower students to use entrepreneurial thinking and action to
              address real-world challenges and create positive change.
            </p>
          </div>

          <div className="about-value-card">
            <div className="about-icon">🌍</div>

            <h3>Our Vision</h3>

            <p>
              To contribute towards a world where innovation, responsible
              entrepreneurship and collaboration create sustainable
              opportunities for everyone.
            </p>
          </div>

          <div className="about-value-card">
            <div className="about-icon">🤝</div>

            <h3>Our Values</h3>

            <p>
              We value teamwork, integrity, innovation, leadership,
              responsibility and community impact.
            </p>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}

      <section className="about-approach">
        <div className="about-approach-content">
          <span className="about-tag">OUR APPROACH</span>

          <h2>Turning Ideas Into Action</h2>

          <p>
            We believe that meaningful change begins with understanding the
            challenges facing our communities. We bring people together, develop
            innovative ideas and turn those ideas into practical projects.
          </p>

          <Link href="/projects" className="about-text-link">
            Discover what we do →
          </Link>
        </div>

        <div className="about-steps">
          <div className="about-step">
            <span>01</span>

            <div>
              <h3>Identify Challenges</h3>
              <p>Understand the problems affecting our communities.</p>
            </div>
          </div>

          <div className="about-step">
            <span>02</span>

            <div>
              <h3>Develop Solutions</h3>
              <p>Use creativity and entrepreneurial thinking.</p>
            </div>
          </div>

          <div className="about-step">
            <span>03</span>

            <div>
              <h3>Create Impact</h3>
              <p>Put ideas into action and work towards lasting change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}

      <section className="about-cta">
        <h2>Be Part of the Change.</h2>

        <p>
          Join us as we work towards building innovative solutions for a better
          future.
        </p>

        <Link href="/contact" className="about-cta-button">
          Get Involved
        </Link>
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

            <Link href="/">Home</Link>

            <Link href="/about">About Us</Link>

            <Link href="/projects">Our Projects</Link>

            <Link href="/#focus">Our Focus</Link>
          </div>

          <div className="footer-links">
            <h3>Get Involved</h3>

            <Link href="/#join">Join Enactus</Link>

            <Link href="/contact">Contact Us</Link>
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
          <p>© 2026 Enactus CUT Zimbabwe. All Rights Reserved.</p>

          <p>Powered by Figoh Technologies.</p>
        </div>
      </footer>
    </main>
  );
}
