import React from "react";
import { NavLink } from "react-router-dom";
import "./PostTab.css";
import write from "./../images/write.png";
import leavegroup from "./../images/blog/leavegroup.png";
import group_add from "./../images/group_add.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";
import SpinnerLoading from "../Share/SpinnerLoading";
const PostTab = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <SpinnerLoading />;
  }
  return (
    <div className="post_tab_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tab_area display_flex">
              <div className="tab_menu_left lg_d_none md_d_block md_tab">
                <NavLink to="/">All Posts(32)</NavLink>
              </div>
              <div className="tab_menu_left md_d_none">
                <NavLink to="/">All Posts(32)</NavLink>
                <NavLink to="/article">Article</NavLink>
                <NavLink to="/event">Event</NavLink>
                <NavLink to="/education">Education</NavLink>
                <NavLink to="/job">Job</NavLink>
              </div>
              <div className="tab_menu_right display_flex">
                <div className="write_post d-none filter_post">
                  <button className="btn custom_btn display_flex">
                    <span>Filter: All</span>
                    <img src={write} alt="" />
                  </button>
                </div>

                <div className="write_post md_write_post_d_none">
                  <button className="btn custom_btn display_flex">
                    <span>Write a Post</span>
                    <img src={write} alt="" />
                  </button>
                </div>
                {user ? (
                  <div className="write_post  md_leave_group">
                    <button className="btn custom_btn display_flex">
                      <img src={leavegroup} alt="" />
                      <span>Leave Group</span>
                    </button>
                  </div>
                ) : (
                  <div className="join_group md_write_post_d_none ">
                    <button className="btn custom_btn display_flex">
                      {" "}
                      <img src={group_add} alt="" /> <span>Join Group</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTab;
