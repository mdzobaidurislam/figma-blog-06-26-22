import React from "react";
import "./Banner.css";
import arrow_back from "./../images/arrow_back.svg";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";
import useGlobalContexts from "../../Context/GlobalContext";
const Banner = () => {
  const [user] = useAuthState(auth);
  const { setmodalshow } = useGlobalContexts();

  return (
    <section id="banner" className="banner_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className=" top_banner_menu">
              <div className="display_flex">
                <div
                  className="left_arrow_menu_btn"
                  onClick={() => setmodalshow(true)}
                >
                  <img src={arrow_back} alt="" />
                </div>
                <div>
                  {user ? (
                    <button className="join_group_btn_banner">
                      Leave Group
                    </button>
                  ) : (
                    <button className="join_group_btn_banner">
                      Join Group
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="banner_content">
              <h2>Can you add note?</h2>
              <p>Please click the link below and login</p>
              <button
                onClick={() => setmodalshow(true)}
                className="join_group_btn_banner add_note_btn"
              >
                Add your note
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
