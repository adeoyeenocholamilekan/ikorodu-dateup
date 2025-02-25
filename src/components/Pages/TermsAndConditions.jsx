import React from "react";
import "./TermsAndConditions.css";
import { useNavigate } from "react-router-dom";
import ChatAssistance from "../../assets/OnboardingCards/HelpLoverr.svg";
import Verify from "../../assets/verified.svg";
import BackArrow from "../../assets/goBackarrow.svg";


const TermsAndConditions = () => {
    const navigate = useNavigate()
  return (
    <div className="terms-container">


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
          Terms and Conditions <img style={{ width: 15 }} src={Verify} alt="" />
        </p>
        <button onClick={() => navigate("/help")}>
          <img src={ChatAssistance} alt="back button" />
        </button>
      </div>
      
      <section className="section">
        <h2>1. Introduction</h2>
        <p>
          Welcome to <strong>Ikorodu Dating Site</strong>. By using our platform, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please refrain from using our services.
        </p>
      </section>

      <section className="section">
        <h2>2. Eligibility</h2>
        <p>
          You must be at least 18 years old to use our platform. By registering, you confirm that you meet this age requirement.
        </p>
      </section>

      <section className="section">
        <h2>3. User Conduct</h2>
        <ul>
          <li>You agree to use the platform respectfully and in compliance with all applicable laws.</li>
          <li>Harassment, hate speech, and any form of discrimination are strictly prohibited.</li>
        </ul>
      </section>

      <section className="section">
        <h2>4. Account Verification</h2>
        <p>
          To ensure the seriousness of users, a verification fee of N500 naira is required before your account can be approved. This fee helps us maintain a high quality of user interaction.
        </p>
      </section>

      <section className="section">
        <h2>5. Changes to Terms</h2>
        <p>
          We reserve the right to update or change these terms at any time. It is your responsibility to review these terms periodically.
        </p>
      </section>

      <section className="section">
        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about these terms, please contact us at <a href="mailto:idowue951@gmail.com">idowue951@gmail.com</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
