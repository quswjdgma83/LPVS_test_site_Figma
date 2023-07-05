import React from "react";
import { Link } from "react-router-dom";
import "../css/support_style.css";

export const Support = () => {
  return (
    <div className="support">
      <div className="div">
        <div className="overlap">
          <div className="group">
            <div className="group-2">
              <div className="text-wrapper">GNU General Public</div>
              <div className="text-wrapper-2">MIT</div>
              <div className="text-wrapper-3">Open SSL</div>
              <div className="text-wrapper-4">Apache</div>
            </div>
          </div>
          <div className="text-wrapper-5">GNU Lesser General Public</div>
        </div>
        <img className="image" />
        <div className="bar">
          <div className="rectangle" />
          <h1 className="h-1"><Link to={"/home"} style={{ color: "black", textDecoration: "none"}}>LPVS</Link></h1>
          <div className="menu-wrapper">
            <div className="menu">
              <div className="overlap-group">
                <div className="rectangle-2" />
                <div className="text-wrapper-6"><Link to={"/support"} style={{ color:"black", textDecoration: "none" }}>Support</Link></div>
                <div className="profile">
                  <div className="overlap-group-2">
                    <img className="img" />
                    <div className="text-wrapper-7">한이음</div>
                  </div>
                </div>
              </div>
              <div className="rectangle-3" />
              <div className="text-wrapper-8"><Link to={"/history"} style={{ color:"black", textDecoration: "none" }}>History</Link></div>
              <div className="text-wrapper-9"><Link to={"/result"} style={{ color:"black", textDecoration: "none" }}>Result</Link></div>
            </div>
          </div>
        </div>
        <p className="text-version-https">
          <span className="span">Text version: </span>
          <a href="https://www.apache.org/licenses/LICENSE-2.0.txt" rel="noopener noreferrer" target="_blank">
            <span className="text-wrapper-10">
              https://www.apache.org/licenses/LICENSE-2.0.txt
              <br />
            </span>
          </a>
          <span className="span">SPDX short identifier: </span>
          <a href="https://spdx.org/licenses/Apache-2.0.html" rel="noopener noreferrer" target="_blank">
            <span className="text-wrapper-10">
              Apache-2.0
              <br />
            </span>
          </a>
          <span className="span">OSI Approved License: </span>
          <a href="https://opensource.org/licenses/Apache-2.0" rel="noopener noreferrer" target="_blank">
            <span className="text-wrapper-10">
              https://opensource.org/licenses/Apache-2.0
              <br />
            </span>
          </a>
          <span className="span">
            The 2.0 version of the Apache License, approved by the ASF in 2004, helps us achieve our goal of providing
            reliable and long-lived software products through collaborative, open-source software development.
            <br />
            All packages produced by the ASF are implicitly licensed under the Apache License, Version 2.0, unless
            otherwise explicitly stated.
          </span>
        </p>
      </div>
    </div>
  );
};
export default Support;