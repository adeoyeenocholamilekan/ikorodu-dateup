import React from 'react';
import './AboutPage.css';
import IkoroduLogo from "../../assets/OnboardingCards/Ikorodu-Dating-Logo.svg";
import { useNavigate } from "react-router-dom";
import ChatAssistance from "../../assets/OnboardingCards/HelpLoverr.svg";
import Verify from "../../assets/verified.svg";
import BackArrow from "../../assets/goBackarrow.svg";


const AboutPage = () => {
    const navigate = useNavigate()

  return (
    <div className="about-page">
            <div style={{ paddingTop: 16 }} className="onboardingBackBTN">
        <button onClick={() => navigate(-1)}>
          <img src={BackArrow} alt="back button" />
        </button>
        <p
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: "#e91e63",
            alignItems: "center",
            display: "flex",
            gap: 6,
          }}
        >
          About us <img style={{ width: 15 }} src={Verify} alt="" />
        </p>
        <button onClick={() => navigate("/help")}>
          <img src={ChatAssistance} alt="back button" />
        </button>
      </div>
      <section className="about-intro">

        <h1>Welcome to Ikorodu Dating Site</h1>
        <p>The go-to platform for singles in Ikorodu, Lagos and beyond! Our mission is to connect like-minded individuals who are looking for meaningful relationships, whether it’s friendship, romance, or something in between.</p>
        <p>Connecting hearts in Ikorodu and beyond. Our mission is to bring love closer to home, one connection at a time.</p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
        About Ikorodu Dating Site
        </p>


        <p>At Ikorodu Dating Site, we understand the unique challenges of finding love in today’s fast-paced world. </p>
        <p>That’s why we’ve created a safe, user-friendly environment where you can meet and interact with other singles in your area. Whether you’re new to the dating scene or looking for a fresh start, our platform offers the tools and features you need to make genuine connections.</p>
        <p>We believe in creating meaningful connections. Our platform is designed to help you find genuine relationships that are built on trust, respect, and mutual understanding.</p>
        <p>To maintain a community of serious and committed individuals, we require a verification fee of <strong>N500</strong> naira before your account can be approved. This small fee ensures that our users are genuinely interested in finding meaningful connections and are committed to the process.</p>
      </section>

      <section className="about-story">
        <h2>Our Story</h2>
        <p>Founded in 2023, Ikorodu Dating Site was born out of a desire to connect the local community in Ikorodu with a platform that values authenticity and real connections.</p>
        <p>We saw a need for a dating platform that focuses on local love, and we've been passionate about bringing people together ever since.</p>
      </section>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Inclusivity:</strong> We welcome everyone, regardless of their background or beliefs.</li>
          <li><strong>Safety:</strong> Your security is our top priority. We use advanced technology to protect your personal information.</li>
          <li><strong>User Experience:</strong> We aim to provide an easy, enjoyable experience for all our users.</li>
          <li><strong>Community:</strong> We are more than just a dating site; we are a community where people come together.</li>
        </ul>
      </section>

      <section className="about-values">
        <h2>How it works</h2>
        <ul>
          <li><strong>Sign up:</strong> Create your profile by providing some basic information about yourself.</li>
          <li><strong>Complete Verification:</strong> Pay a one-time verification fee of N500 to show your commitment and seriousness. </li>
          <li><strong>Start Connecting:</strong> Once approved, you can start browsing profiles, liking, matching, and chatting with other singles.</li>
        </ul>
      </section>

      <section className="about-call-to-action">
        <h2>Join Us Today</h2>
        <p>Ready to find your match? <a href="/signup">Sign up now</a> and start your journey to love with Ikorodu Dating Site.</p>
        Join us today and take the first step toward meeting that special someone. Your journey to love starts here!
      </section>
    </div>
  );
};

export default AboutPage;
