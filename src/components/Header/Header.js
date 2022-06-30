import React from "react";
import logo from "./../images/logo/logo.png";
import search_icon from "./../images/search.png";
import arrow_drop_down from "./../images/arrow_drop_down.png";
import profile from "./../images/blog/author4.png";
import "./Header.css";
import LoginModal from "../Modal/LoginModal";
import SignUpModal from "../Modal/SignUpModal";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";
import { signOut } from "firebase/auth";
import useGlobalContexts from "../../Context/GlobalContext";
import { Link } from "react-router-dom";
const Header = () => {
  const [user] = useAuthState(auth);
  const { modalShow, setmodalshow, modalShowSignUp, setmodalshowsignup } =
    useGlobalContexts();
  return (
    <>
      <header className="header">
        <nav className="nav_bar display_flex md_d_flex">
          <div className="logo">
            <h2>
              <Link to="/">ToDo App</Link>
            </h2>
          </div>
          <div className="search_box_area d-none">
            <div className="input_seacrh">
              <div className="search_icon">
                <img src={search_icon} alt="search_icon" />
              </div>
              <input
                className="form-control"
                type="text"
                placeholder="Search for your favorite "
              />
            </div>
          </div>
          <div className="create_account">
            <div className="text_accout display_flex justify_content_start">
              {user ? (
                <>
                  <div className="route_link">
                    <Link to="/todo">Todo</Link>
                  </div>
                  <div className="route_link">
                    <Link to="/completed">Completed Tasks</Link>
                  </div>
                  <div className="profile display_flex justify_content_start">
                    <div className="display_flex justify_content_start">
                      <img
                        src={user.photoURL ? user.photoURL : profile}
                        alt=""
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
                </>
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
          onHide={() => setmodalshow(false)}
        />
        <SignUpModal
          show={modalShowSignUp === true && modalShow === false}
          onHide={() => setmodalshowsignup(false)}
        />
      </div>
    </>
  );
};

export default Header;
