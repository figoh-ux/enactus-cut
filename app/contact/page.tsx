"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function SocialIcons() {
  return (
    <div className="footer-social-icons">
      <a
        href="https://www.tiktok.com/@enactus_cut.zw"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow Enactus CUT on TikTok"
        title="TikTok"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.4v13.67a2.89 2.89 0 0 1-2.89 2.74 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.3 0 .59.05.87.14V9.3a6.33 6.33 0 0 0-.87-.06A6.29 6.29 0 1 0 15.82 15V8.01a8.16 8.16 0 0 0 4.77 1.54V6.14a4.85 4.85 0 0 1-1-.1Z" />
        </svg>
      </a>

      <a
        href="https://www.instagram.com/enactus_cut.zw/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow Enactus CUT on Instagram"
        title="Instagram"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm4.25 2.9a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 1.8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.5-2.7a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
        </svg>
      </a>
    </div>
  );
}

export default function ContactPage() {
  // Set the year after the page loads to avoid Next.js prerendering errors.
  const [year, setYear] = useState("2026");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <main className="contact-page">
      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="cut-logo">
            <img src="/cut-logo.png" alt="CUT Logo" />
          </Link>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact" className="active">
              Contact
            </Link>
          </div>

          <Link href="/contact#contact-details" className="nav-button">
            Get In Touch
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <span className="contact-tag">LET'S CONNECT</span>

          <h1>
            Let's Create
            <span> Impact Together.</span>
          </h1>

          <p>
            Every great idea begins with a conversation. Whether you are a
            student, organisation, business or potential partner, we would love
            to hear from you.
          </p>

          <div className="contact-hero-actions">
            <a href="#contact-details" className="contact-hero-button">
              Get In Touch
            </a>

            <a href="#get-involved" className="contact-secondary-button">
              Explore Opportunities
            </a>
          </div>
        </div>

        <div className="contact-hero-bottom">
          <span>ENTREPRENEURSHIP</span>
          <span>INNOVATION</span>
          <span>POSITIVE IMPACT</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="contact-intro">
        <div className="contact-intro-content">
          <span className="contact-section-tag">CONNECT WITH US</span>

          <h2>
            Great Things Happen
            <span> When We Connect.</span>
          </h2>

          <p>
            Enactus CUT welcomes connections with students, businesses,
            organisations, community members and potential partners. Whether you
            want to join our team, support a project or explore a partnership,
            we are ready to connect.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="contact-details" id="contact-details">
        <div className="contact-heading">
          <span className="contact-section-tag">REACH OUT TO US</span>
          <h2>We Would Love to Hear From You</h2>
          <p>Find out more about connecting with Enactus CUT.</p>
        </div>

        <div className="contact-info-grid">
          <div className="contact-info-card">
            <div className="contact-icon">📍</div>
            <h3>Visit Our Campus</h3>
            <p>Chinhoyi University of Technology</p>
            <span>Chinhoyi, Zimbabwe</span>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">✉️</div>
            <h3>Email Enquiries</h3>
            <p>Official club email</p>
            <span>Contact details to be updated.</span>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">📞</div>
            <h3>Call Our Team</h3>
            <p>Official club contact number</p>
            <span>Contact details to be updated.</span>
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="contact-involvement" id="get-involved">
        <div className="involvement-content">
          <span className="contact-section-tag">BE PART OF THE CHANGE</span>

          <h2>Find Your Way to Make an Impact</h2>

          <p>
            Enactus is built on collaboration, innovation and entrepreneurship.
            There are many ways to contribute to the work of Enactus CUT.
          </p>

          <div className="involvement-grid">
            <div className="involvement-card">
              <span className="involvement-number">01</span>
              <h3>Join Our Team</h3>
              <p>
                Are you a student interested in entrepreneurship, leadership and
                creating positive change? Connect with us to learn about joining
                Enactus CUT.
              </p>
            </div>

            <div className="involvement-card">
              <span className="involvement-number">02</span>
              <h3>Volunteer With Us</h3>
              <p>
                Contribute your time, skills and ideas towards projects that aim
                to improve communities.
              </p>
            </div>

            <div className="involvement-card">
              <span className="involvement-number">03</span>
              <h3>Partner With Us</h3>
              <p>
                We welcome organisations and businesses interested in
                collaborating on sustainable community initiatives.
              </p>
            </div>

            <div className="involvement-card">
              <span className="involvement-number">04</span>
              <h3>Support Our Projects</h3>
              <p>
                Help us create impact by contributing resources, knowledge,
                expertise or other forms of support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-text">
            <span className="contact-section-tag">START A CONVERSATION</span>

            <h2>
              Have an Idea?
              <span> Let's Talk.</span>
            </h2>

            <p>
              Have a question, suggestion, partnership enquiry or opportunity
              you would like to discuss? We welcome your message.
            </p>

            <div className="contact-form-note">
              <strong>Let's work together.</strong>
              <p>
                We believe collaboration is an important part of creating
                meaningful and sustainable impact.
              </p>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Thank you for your interest in Enactus CUT. Our contact form is not connected yet. Please use the official club contact details once available.",
              );
            }}
          >
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What would you like to discuss?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                required
              />
            </div>

            <button type="submit" className="contact-submit-button">
              Send Message <span>→</span>
            </button>

            <small>
              The messaging service will be activated once the club's official
              contact system is connected.
            </small>
          </form>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section className="contact-social">
        <span className="contact-section-tag">STAY CONNECTED</span>
        <h2>Follow Our Journey</h2>

        <p>
          Stay updated with our activities, events, initiatives and stories from
          Enactus CUT.
        </p>

        <SocialIcons />

        <span className="footer-social-handle">@enactus_cut.zw</span>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <img src="/enactus-logo.png" alt="Enactus Logo" />
            <p>
              Empowering students to use entrepreneurship to create a better and
              more sustainable world.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/projects">Our Projects</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          <div className="footer-contact">
            <h3>Find Us</h3>
            <p>Chinhoyi University of Technology</p>
            <p>Chinhoyi, Zimbabwe</p>
          </div>

          <div className="footer-social">
            <h3>Follow Our Journey</h3>
            <p>Connect with Enactus CUT on social media.</p>

            <SocialIcons />

            <span className="footer-social-handle">@enactus_cut.zw</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Enactus CUT. All rights reserved.</p>
          <p>Powered by Figoh Technologies.</p>
        </div>
      </footer>
    </main>
  );
}
