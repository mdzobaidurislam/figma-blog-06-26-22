import React from "react";
import "./Blog.css";
import post1 from "./../images/blog/post1.png";
import author1 from "./../images/blog/author1.png";
import author2 from "./../images/blog/author2.png";
import author3 from "./../images/blog/author3.png";
import author4 from "./../images/blog/author4.png";
import view from "./../images/blog/view.svg";
import share from "./../images/blog/share.png";
import edit from "./../images/blog/edit.png";
import today from "./../images/blog/today.png";
import location from "./../images/blog/location.png";
import editpost from "./../images/blog/editpost.png";
import jobwork from "./../images/blog/jobwork.png";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import PostTab from "../Tab/PostTab";
const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      description:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      image: post1,
      cat: "✍️ Article",
      author_name: "Sarthak Kamra",
      author_thum: author1,
      feature: "post",
      btn_text: "View Website",
      btn_link: "",
      icon: today,
      time: "Fri, 12 Oct, 2018",
      company_name: "",
      location_icon: location,
      location_text: "Ahmedabad, India",
    },
    {
      id: 2,
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      description:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      image: post1,
      cat: "🔬️ Education",
      author_name: "Sarah West",
      author_thum: author2,
      feature: "post",
      btn_text: "View Website",
      btn_link: "",
      icon: today,
      time: "Fri, 12 Oct, 2018",
      company_name: "",
      location_icon: location,
      location_text: "Ahmedabad, India",
    },
    {
      id: 3,
      title: "Finance & Investment Elite Social Mixer @Lujiazui",
      description: "",
      image: post1,
      cat: "🗓️ Meetup",
      author_name: "Ronal Jones",
      author_thum: author3,
      feature: "meetup",
      btn_text: "View Website",
      btn_link: "",
      icon: today,
      time: "Fri, 12 Oct, 2018",
      company_name: "",
      location_icon: location,
      location_text: "Ahmedabad, India",
    },
    {
      id: 4,
      title: "Software Developer",
      description: "",
      image: post1,
      cat: "💼️ Job",
      author_name: "Joseph Gray",
      author_thum: author4,
      feature: "job",
      btn_text: "Apply on Timesjobs",
      btn_link: "",
      icon: jobwork,
      time: "Fri, 12 Oct, 2018",
      company_name: "Innovaccer Analytics Private Ltd.",
      location_icon: location,
      location_text: "Noida, India",
    },
  ];
  return (
    <>
      <PostTab />
      <div className="blog_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {posts.map((item) => (
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
                              <h5 className="author_name">
                                {item.author_name}
                              </h5>
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
                          <span className="share_text lg_d_none md_d_block">
                            Share
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
      <div className="edit_post_btn">
        <img src={editpost} alt="" />
      </div>
    </>
  );
};

export default Blog;
