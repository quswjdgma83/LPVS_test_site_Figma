import React from "react";
import { Link } from "react-router-dom";
import "../css/history_style.css";

export const History = () => {
  return (
    <div className="history">
      <div className="div">
        <div className="bar">
          <div className="rectangle" />
          <h1 className="text-wrapper"><Link to={"/home"} style={{ color: "black", textDecoration: "none"}}>LPVS</Link></h1>
          <div className="group">
            <div className="menu">
              <div className="overlap">
                <div className="rectangle-2" />
                <div className="text-wrapper-2"><Link to={"/support"} style={{ color:"black", textDecoration: "none" }}>Support</Link></div>
                <div className="profile">
                  <div className="overlap-group">
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
        <div className="overlap-2">
          <div className="history-box">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="overlap-group-3">
                  <div className="text-wrapper-6">23.06.10 hwan5180/front</div>
                  <p className="pull-request-id">
                    pull_request_id: 1<br />
                    url: https://github.com/hwan5180/front/pull/7
                    <br />
                    status: Scan completed
                  </p>
                </div>
                <div className="text-wrapper-7">Detail</div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-group-2">
                <div className="text-wrapper-8">23.06.29 kyudori/spring_study</div>
                <div className="text-wrapper-7">Detail</div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="overlap-group-2">
                <div className="overlap-group-3">
                  <div className="text-wrapper-6">23.06.20 Basaeng/Algorithm_study</div>
                  <p className="p">
                    pull_request_id: 2<br />
                    url: https://github.com/Basaeng/Algorithm_study/pull/4
                    <br />
                    status: Scan completed
                  </p>
                </div>
                <div className="text-wrapper-7">Detail</div>
              </div>
            </div>
            <div className="history-box-2">
              <div className="overlap-group-2">
                <div className="overlap-group-3">
                  <div className="text-wrapper-6">23.06.25 quswjdgma83/Audio_Engineearing</div>
                  <p className="pull-request-id-2">
                    pull_request_id: 3<br />
                    url: https://github.com/quswjdgma83/Audio_Engineearing/pull/13
                    <br />
                    status: Scan completed
                  </p>
                </div>
                <div className="text-wrapper-7">Detail</div>
              </div>
            </div>
            <div className="history-box-3">
              <div className="overlap-group-2">
                <div className="overlap-group-3">
                  <div className="text-wrapper-6">23.06.30 Kim/project_repo</div>
                  <p className="pull-request-id-3">
                    <span className="span">
                      pull_request_id: 5<br />
                      url: https://github.com/Kim/project_repo/pull/13
                      <br />
                    </span>
                    <span className="text-wrapper-9">status: License issue detected</span>
                  </p>
                </div>
                <div className="text-wrapper-7">Detail</div>
              </div>
            </div>
          </div>
          <p className="pull-request-id-4">
            pull_request_id: 4<br />
            url: https://github.com/kyudori/spring_study/pull/1
            <br />
            status: Scan completed
          </p>
        </div>
        <div className="overlap-3">
          <div className="box">
            <div className="overlap-4">
              <div className="rectangle-4" />
              <div className="gmail-com">
                <span className="text-wrapper-10">
                  한이음님
                  <br />
                </span>
                <span className="text-wrapper-11">hanium5@gmail.com</span>
              </div>
              <p className="apache">
                <span className="span">Apache-2.0 (</span>
                <span className="text-wrapper-9">prohibited</span>
                <span className="span">
                  )<br />
                  <br />
                  File_path: types.go
                  <br />
                  <br />
                  Component: edge-home-orchestration-go
                  (controller/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  discoverymrg/types.go)
                  <br />
                  <br />
                  Matched Lines: 141-198
                  <br />
                  <br />
                  Snippet Match: 70%
                  <br />
                  <br />
                  <br />
                  <br />
                </span>
              </p>
              <p className="MIT-permitted-file">
                <span className="span">MIT (</span>
                <span className="text-wrapper-12">permitted</span>
                <span className="span">
                  )<br />
                  <br />
                  File_path: main.go
                  <br />
                  <br />
                  Component: edge-home-orchestration-go (GoMain/src/main/main.go)
                  <br />
                  <br />
                  Matched Lines: 15-118
                  <br />
                  <br />
                  Snippet Match: 70%
                  <br />
                </span>
                <span className="text-wrapper-13">
                  <br />
                </span>
              </p>
            </div>
          </div>
          <div className="detected-licenses">
            <span className="text-wrapper-14">Detected_Licenses: </span>
            <span className="text-wrapper-15">license problem(s) detected</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default History;
