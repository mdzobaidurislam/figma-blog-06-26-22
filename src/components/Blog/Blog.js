import React from "react";
import "./Blog.css";
import post1 from "./../images/blog/post1.png";
import author1 from "./../images/blog/author1.png";
import author2 from "./../images/blog/author2.png";
import author3 from "./../images/blog/author3.png";
import author4 from "./../images/blog/author4.png";

import today from "./../images/blog/today.png";
import location from "./../images/blog/location.png";
import editpost from "./../images/blog/editpost.png";
import jobwork from "./../images/blog/jobwork.png";
import Sidebar from "../Sidebar/Sidebar";
import PostTab from "../Tab/PostTab";
import BlogItem from "./BlogItem";
import Banner from "../Banner/Banner";
import auth from "../Firebase/Firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
const Blog = () => {
  const [user] = useAuthState(auth);
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
      <div className="mobaile_banner">{user && <Banner />}</div>
      <PostTab />
      <div className="blog_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {posts.map((item) => (
                <BlogItem key={item.id} item={item} />
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
