import React from "react";
import location from "./../images/blog/location.png";
import locationedit from "./../images/blog/locationedit.png";
import error_outline from "./../images/blog/error_outline.png";
import editclear from "./../images/blog/editclear.png";
import "./Sidebar.css";
import Group from "../Group/Group";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";
const Sidebar = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="sidebar_section md_sidebar_display_none">
      <div className="location_input">
        <div className="input_seacrh">
          <div className="search_icon">
            <img src={location} alt="location" />
          </div>
          <div className="display_flex width_100">
            <input
              className="form-control"
              type="text"
              placeholder="Noida, India"
              disabled={!user}
            />
            <img
              className="cur_pointer"
              src={!user ? locationedit : editclear}
              alt="locationedit"
            />
          </div>
        </div>
        <div className="error_outline_area">
          <div className="display_flex justify_content_start error_outline_text align_items_self_start">
            <img src={error_outline} alt="" />
            <span>
              Your location will help us serve better and extend a personalised
              experience.
            </span>
          </div>
        </div>

        {/* group start  */}
        <Group />
      </div>
    </div>
  );
};

export default Sidebar;
