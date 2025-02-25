import React from "react";
import "./PrivacyPolicy.css";
import { useNavigate } from "react-router-dom";
import ChatAssistance from "../../assets/OnboardingCards/HelpLoverr.svg";
import Verify from "../../assets/verified.svg";
import BackArrow from "../../assets/goBackarrow.svg";

const PrivacyPolicy = () => {
    const navigate = useNavigate()

  return (
    <div className="privacy-policy-container">

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
          Privacy Policy <img style={{ width: 15 }} src={Verify} alt="" />
        </p>
        <button onClick={() => navigate("/help")}>
          <img src={ChatAssistance} alt="back button" />
        </button>
      </div>
     

      <section className="section">
        <h2>1. Information Collection</h2>
        <p>
          We collect personal information that you provide to us directly, such as your name, email address, and payment information.
        </p>
      </section>

      <section className="section">
        <h2>2. Use of Information</h2>
        <p>
          We use your information to provide and improve our services, and to communicate with you.
        </p>
      </section>

      <section className="section">
        <h2>3. Data Protection</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal data.
        </p>
      </section>

      <section className="section">
        <h2>4. Changes to This Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
      </section>

      <section className="section">
        <h2>5. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@ikorodudating.com">support@ikorodudating.com</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
