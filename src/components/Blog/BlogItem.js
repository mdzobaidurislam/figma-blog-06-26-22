import React from "react";
import view from "./../images/blog/view.svg";
import share from "./../images/blog/share.png";
import edit from "./../images/blog/edit.png";

import { NavLink } from "react-router-dom";
const BlogItem = ({ item }) => {
  return (
    <>
      <article className="post_area" key={item.id}>
        <div className="thum">
          <img src={item.image} alt="" />
        </div>
        <div className="post_content">
          <div className="category">
            <h5>{item.cat}</h5>
          </div>
          <div className="custom_gap_40 md_custom_gap_0 align_items_self_start display_flex">
            <h3 className="title">{item.title}</h3>
            <div className="edit_dropdown">
              <img src={edit} alt="" />
              {/* <div className="edit_dropdown_menu">
                        <NavLink to="/edit">Edit</NavLink>
                        <NavLink to="/report">Report</NavLink>
                        <NavLink to="/option">Option 3</NavLink>
                      </div> */}
            </div>
          </div>
          {item.feature === "post" && (
            <div className="description">
              <p>{item.description}</p>
            </div>
          )}

          {item.feature === "job" && (
            <>
              <div className="location_area display_flex justify_content_start custom_gap_40 md_custom_gap_0 md_gap_10">
                <div className="time display_flex">
                  <img src={item.icon} alt="" />
                  <span>{item.company_name}</span>
                </div>
                <div className="location_map display_flex md_gap_5">
                  <img src={item.location_icon} alt="" />
                  <span>{item.location_text}</span>
                </div>
              </div>
              <div className="view_website_area">
                <NavLink to="/job" className="btn view_web_btn">
                  {item.btn_text}
                </NavLink>
              </div>
            </>
          )}
          {item.feature === "meetup" && (
            <>
              <div className="location_area display_flex justify_content_start custom_gap_40 md_custom_gap_0 md_gap_10">
                <div className="time display_flex">
                  <img src={item.icon} alt="" />
                  <span>{item.time}</span>
                </div>
                <div className="location_map display_flex md_gap_5">
                  <img src={item.location_icon} alt="" />
                  <span>{item.location_text}</span>
                </div>
              </div>
              <div className="view_website_area">
                <NavLink to="/job" className="btn view_web_btn">
                  {item.btn_text}
                </NavLink>
              </div>
            </>
          )}

          <div className="author_area display_flex">
            <div className="display_flex">
              <div className="author_thum display_flex">
                <img src={item.author_thum} alt="" />
                <div className="">
                  <div>
                    <h5 className="author_name">{item.author_name}</h5>
                  </div>
                  <div className="post_view  lg_d_none md_d_block">
                    <span>1.4k views</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="view_area display_flex">
              <div className="post_view display_flex md_d_none">
                <img src={view} alt="" />
                <span>1.4k views</span>
              </div>
              <div className="share display_flex">
                <img src={share} alt="" />
                <span className="share_text lg_d_none md_d_block">Share</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogItem;
