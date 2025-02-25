import React from "react";
import "./Disclaimer.css"; 
import { useNavigate } from "react-router-dom";
import ChatAssistance from "../../assets/OnboardingCards/HelpLoverr.svg";
import Verify from "../../assets/verified.svg";
import BackArrow from "../../assets/goBackarrow.svg";

const Disclaimer = () => {
    const navigate = useNavigate()

  return (
    <div className="disclaimer-container">
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
         Disclaimer <img style={{ width: 15 }} src={Verify} alt="" />
        </p>
        <button onClick={() => navigate("/help")}>
          <img src={ChatAssistance} alt="back button" />
        </button>
      </div>


      <section className="section">
        <p>
          The information provided by <strong>Ikorodu Dating Site</strong> is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the site.
        </p>
      </section>

      <section className="section">
        <p>
          Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
        </p>
      </section>

      <section className="section">
        <p>
          The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.
        </p>
      </section>
    </div>
  );
};

export default Disclaimer;
