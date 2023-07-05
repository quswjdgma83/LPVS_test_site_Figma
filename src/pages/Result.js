import React from "react";
import { Link } from "react-router-dom";
import "../css/result_style.css";

export const Result = () => {
  return (
    <div className="result">
      <div className="div">
        <div className="overlap">
          <div className="bar">
            <h1 className="text-wrapper"><Link to={"/home"} style={{ color: "black", textDecoration: "none"}}>LPVS</Link></h1>
            <div className="rectangle" />
          </div>
          <div className="group">
            <div className="menu">
              <div className="overlap-group">
                <div className="rectangle-2" />
                <div className="text-wrapper-2"><Link to={"/support"} style={{ color:"black", textDecoration: "none" }}>Support</Link></div>
                <div className="profile">
                  <div className="overlap-group-2">
                    <img className="image" />
                    <div className="text-wrapper-3">한이음</div>
                  </div>
                </div>
              </div>
              <div className="rectangle-3" />
              <div className="text-wrapper-4"><Link to={"/history"} style={{ color:"black", textDecoration: "none" }}>History</Link></div>
              <div className="text-wrapper-5"><Link to={"/result"} style={{ color:"black", textDecoration: "none" }}>Result</Link></div>
            </div>
          </div>
        </div>
        <div className="view">
          <div className="user-code">
            <div className="overlap-group-3">
              <div className="overlap-2">
                <div className="text-wrapper-6">User Code</div>
                <img className="line" alt="Line" src="line-5.svg" />
              </div>
              <p className="public">
                public LPVSGitHubService(@Value(&#34;${"{"}&#34; + GITHUB_LOGIN_PROP_NAME + &#34;{"}"}&#34;) String
                GITHUB_LOGIN, <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                @Value(&#34;${"{"}&#34; + GITHUB_AUTH_TOKEN_PROP_NAME + &#34;{"}"}&#34;) String GITHUB_AUTH_TOKEN,{" "}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                @Value(&#34;${"{"}&#34; + GITHUB_API_URL_PROP_NAME + &#34;{"}"}&#34;) String GITHUB_API_URL, <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                LPVSPullRequestRepository pullRequestRepository, <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                LPVSDetectedLicenseRepository lpvsDetectedLicenseRepository, <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                LPVSLicenseRepository lpvsLicenseRepository, <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                LPVSLicenseConflictRepository lpvsLicenseConflictRepository) {"{"} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.GITHUB_LOGIN =
                Optional.ofNullable(GITHUB_LOGIN).filter(s -&gt; !s.isEmpty()) <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.orElse(Optional.ofNullable(System.getenv(GITHUB_LOGIN_ENV_VAR_NAME)).orElse(&#34;&#34;));{" "}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.GITHUB_AUTH_TOKEN =
                Optional.ofNullable(GITHUB_AUTH_TOKEN).filter(s -&gt; !s.isEmpty()) <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.orElse(Optional.ofNullable(System.getenv(GITHUB_AUTH_TOKEN_ENV_VAR_NAME)).orElse(&#34;&#34;));{" "}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.GITHUB_API_URL =
                Optional.ofNullable(GITHUB_API_URL).filter(s -&gt; !s.isEmpty()) <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.orElse(Optional.ofNullable(System.getenv(GITHUB_API_URL_ENV_VAR_NAME)).orElse(&#34;&#34;));{" "}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.pullRequestRepository = pullRequestRepository;{" "}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.lpvsDetectedLicenseRepository =
                lpvsDetectedLicenseRepository; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.lpvsLicenseRepository = lpvsLicenseRepository;{" "}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.lpvsLicenseConflictRepository =
                lpvsLicenseConflictRepository; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              </p>
            </div>
          </div>
          <div className="detected-code">
            <div className="overlap-group-3">
              <div className="overlap-group-4">
                <div className="text-wrapper-7">Detected Code</div>
                <img className="img" alt="Line" src="line-4.svg" />
              </div>
              <p className="p">
                <span className="span">
                  public LPVSGitHubService(@Value(&#34;${"{"}&#34; + GITHUB_LOGIN_PROP_NAME + &#34;{"}"}&#34;) String
                  GITHUB_LOGIN, <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  @Value(&#34;${"{"}&#34; + GITHUB_AUTH_TOKEN_PROP_NAME + &#34;{"}"}&#34;){" "}
                </span>
                <span className="text-wrapper-8">
                  String GITHUB_AUTH_TOKEN, <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  @Value(&#34;${"{"}&#34; + GITHUB_API_URL_PROP_NAME + &#34;{"}"}&#34;) String GITHUB_API_URL, <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  LPVSPullRequestRepository pullRequestRepository, <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  LPVSDetectedLicenseRepository lpvsDetectedLicenseRepository, <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  LPVSLicenseRepository lpvsLicenseRepository, <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  LPVSLicenseConflictRepository lpvsLicenseConflictRepository) {"{"} <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.GITHUB_LOGIN =
                  Optional.ofNullable(GITHUB_LOGIN).filter(s -&gt; !s.isEmpty()) <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.orElse(Optional.ofNullable(System.getenv(GITHUB_LOGIN_ENV_VAR_NAME)).orElse(&#34;&#34;));{" "}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.GITHUB_AUTH_TOKEN =
                  Optional.ofNullable(GITHUB_AUTH_TOKEN).filter(s -&gt; !s.isEmpty()) <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.orElse(Optional.ofNullable(System.getenv(GITHUB_AUTH_TOKEN_ENV_VAR_NAME)).orElse(&#34;&#34;));{" "}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.GITHUB_API_URL =
                  Optional.ofNullable(GITHUB_API_URL).filter(s -&gt; !s.isEmpty()) <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.orElse(Optional.ofNullable(System.getenv(GITHUB_API_URL_ENV_VAR_NAME)).orElse(&#34;&#34;));{" "}
                  <br />
                </span>
                <span className="span">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.pullRequestRepository = pullRequestRepository;{" "}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.lpvsDetectedLicenseRepository =
                  lpvsDetectedLicenseRepository; <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.lpvsLicenseRepository = lpvsLicenseRepository;{" "}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.lpvsLicenseConflictRepository =
                  lpvsLicenseConflictRepository; <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"} <br />
                </span>
              </p>
            </div>
          </div>
          <div className="info">
            <div className="overlap-3">
              <img className="line-2" alt="Line" src="line-6.svg" />
              <div className="flex-container">
                <div className="text">
                  <span className="text-wrapper-9">
                    pull_request_id: 5<br />
                  </span>
                </div>
                <div className="text">
                  <span className="text-wrapper-9">
                    scan_date: 2023-06-30 13:59:47
                    <br />
                  </span>
                </div>
                <div className="text">
                  <span className="text-wrapper-9">
                    repository_name: Kim/project_repo
                    <br />
                  </span>
                </div>
                <div className="text-2">
                  <span className="text-wrapper-9">status: </span>
                  <span className="text-wrapper-10">
                    License issue detected
                    <br />
                  </span>
                </div>
                <div className="text">
                  <span className="text-wrapper-9">
                    match_type: snippet
                    <br />
                  </span>
                </div>
                <div className="text-2">
                  <span className="text-wrapper-9">match_line: </span>
                  <span className="text-wrapper-11">141-198</span>
                  <span className="text-wrapper-9">, </span>
                  <span className="text-wrapper-11">15-118</span>
                </div>
              </div>
              <div className="text-wrapper-12">Info</div>
            </div>
            <img className="image-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Result;