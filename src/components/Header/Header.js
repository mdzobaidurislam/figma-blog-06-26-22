import React, { useState } from "react";
import logo from "./../images/logo/logo.png";
import search_icon from "./../images/search.png";
import arrow_drop_down from "./../images/arrow_drop_down.png";
import profile from "./../images/blog/author4.png";
import "./Header.css";
import { Link } from "react-router-dom";
import LoginModal from "../Modal/LoginModal";
import SignUpModal from "../Modal/SignUpModal";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";
import { signOut } from "firebase/auth";
// import SpinnerLoading from "../Share/SpinnerLoading";
const Header = () => {
  const [user, loading] = useAuthState(auth);
  // console.log(user);
  const [modalShow, setmodalshow] = useState(false);
  const [modalShowSignUp, setmodalshowsignup] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="nav_bar display_flex">
          <div className="logo" onClick={() => setmodalshow(true)}>
            <img src={logo} alt="logo" />
          </div>
          <div className="search_box_area md_h_d_n">
            <div className="input_seacrh">
              <div className="search_icon">
                <img src={search_icon} alt="search_icon" />
              </div>
              <input
                className="form-control"
                type="text"
                placeholder="Search for your favorite groups in ATG"
              />
            </div>
          </div>
          <div className="create_account md_h_d_n">
            <div className="text_accout display_flex justify_content_start">
              {user ? (
                <div className="profile display_flex justify_content_start">
                  <div className="display_flex justify_content_start">
                    <img
                      src={user.photoURL ? user.photoURL : profile}
                      alt="arrow_drop_down"
                    />
                    <h5 className="profile_text">{user.displayName}</h5>
                  </div>
                  <span
                    className="arrow_drop_down_profile"
                    onClick={() => signOut(auth)}
                  >
                    <img src={arrow_drop_down} alt="arrow_drop_down" />
                  </span>
                </div>
              ) : (
                <div>
                  Create account. <span>It’s free!</span>{" "}
                  <span
                    className="arrow_drop_down"
                    onClick={() => setmodalshow(true)}
                  >
                    <img src={arrow_drop_down} alt="arrow_drop_down" />
                  </span>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
      <div>
        <LoginModal
          show={modalShow === true && modalShowSignUp === false}
          setmodalshowsignup={setmodalshowsignup}
          setmodalshow={setmodalshow}
          onHide={() => setmodalshow(false)}
        />
        <SignUpModal
          show={modalShowSignUp === true && modalShow === false}
          onHide={() => setmodalshowsignup(false)}
          setmodalshowsignup={setmodalshowsignup}
          setmodalshow={setmodalshow}
        />
      </div>
    </>
  );
};

export default Header;
