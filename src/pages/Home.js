import React from "react";
import { Link } from "react-router-dom";
import "../css/home_style.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="div">
        <h1 className="text-wrapper">About</h1>
        <div className="group">
          <div className="overlap-group">
            <p className="open-source-code">
              <span className="span">
                Open-source code refers to software that is freely available for use, study, modification, and
                distribution, subject to meeting the conditions of the corresponding license. Failure to comply with the
                license conditions can lead to legal disputes, financial liabilities, the requirement to disclose
                intellectual property, and reputational damage. //In projects with numerous external dependencies, it can
                be challenging to track license obligations accurately. Additionally, when multiple collaborators are
                involved, the risk of unintentional license violations, such as through copy-pasting code snippets,
                increases. Furthermore, there are nuanced situations like dependencies with dual licensing or licenses
                that may change due to ownership, purpose, or legislative alterations. These factors can potentially
                turn previously safe dependencies into unsafe ones over time. //To address these license-related risks
                for open-source code, we have developed the License Pre-Validation Service (LPVS). This tool provides a
                solution to mitigate potential license issues. By analyzing the project, LPVS identifies its components
                and their respective licenses at every commit. It then generates a list of potential issue cases, which
                are communicated as comments on GitHub. LPVS offers a comprehensive description of possible license
                violations, including details on the location of risky code and an overview of the specific
                license-related issues. //With LPVS, we aim to assist developers and project teams in ensuring license
                compliance for their open-source code. By providing insights into potential license violations and their
                implications, LPVS enables proactive management of license-related risks throughout the development
                process. //We believe that LPVS will be an invaluable tool for maintaining the integrity of open-source
                projects and safeguarding against license infringements.
              </span>
              <span className="text-wrapper-2">{"  "}</span>
            </p>
          </div>
        </div>
        <div className="overlap">
          <div className="license-pre">
            License <br />
            Pre
            <br />
            Validation <br />
            Service
          </div>
          <div className="text-wrapper-3">operated by samsung</div>
          <img className="LPVS-remove" />
        </div>
        <div className="bar">
          <div className="text-wrapper-4"><Link to={"/home"} style={{ color: "black", textDecoration: "none"}}>LPVS</Link></div>
          <div className="rectangle" />
          <div className="menu-wrapper">
            <div className="menu">
              <div className="overlap-2">
                <div className="rectangle-2" />
                <div className="text-wrapper-5"><Link to={"/support"} style={{ color:"black", textDecoration: "none" }}>Support</Link></div>
                <div className="profile">
                  <div className="overlap-group-2">
                    <img className="image" />
                    <div className="text-wrapper-6">Login</div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-7"><Link to={"/history"} style={{ color:"black", textDecoration: "none" }}>History</Link></div>
              <div className="text-wrapper-8"><Link to={"/result"} style={{ color:"black", textDecoration: "none" }}>Result</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
