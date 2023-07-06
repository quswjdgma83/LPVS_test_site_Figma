import React from "react";
import { Link } from "react-router-dom";
import "../css/Login_style.css";
import naverLogin from '../image/naver-login.png';
import kakaoLogin from '../image/kakao-login.png';
import googleLogin from '../image/google-login.png';
import image1 from '../image/image-1.PNG';

export const Login = () => {
  return (
    <div className="SNS-login">
      <div className="div">
        <div className="login-box" >
          <div className="overlap">
            <img className="line" alt="Line" src="line-2.svg" />
            <img className="rectangle" />
            <img className="naver-login" src={naverLogin} alt="Naver Login" />
            <img className="kakao-login" alt="Kakao login" src={kakaoLogin} />
            <img className="google-login" alt="Google login" src={googleLogin} />
            <div className="text-wrapper">SNS Login</div>
            <div className="text-wrapper-2">Naver</div>
            <div className="text-wrapper-3">Kakao</div>
            <div className="text-wrapper-4">Google</div>
            <div className="close-button">
              <Link to={"/home"} style={{ color: "black", textDecoration: "none"}}>
              <div className="overlap-group">
                <div className="text-wrapper-5">닫기</div>
                <div className="rectangle-2" />
              </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bar">
          <h1 className="h-1"><Link to={"/home"} style={{ color: "black", textDecoration: "none"}}>LPVS</Link></h1>
          <div className="rectangle-3" />
          <div className="group">
            <div className="menu">
              <div className="overlap-2">
                <div className="rectangle-4" />
                <div className="text-wrapper-6">Support</div>
                <div className="profile">
                  <div className="overlap-group-2"><Link to={"/home"} style={{ color: "black", textDecoration: "none"}}></Link>
                    <img className="image" alt="Image" src={image1} />
                    <div className="text-wrapper-7">Login</div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-8">History</div>
              <div className="text-wrapper-9">Result</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;