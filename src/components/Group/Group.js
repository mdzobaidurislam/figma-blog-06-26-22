import React, { useEffect, useState } from "react";
import twotone_thumb_up from "./../images/blog/twotone-thumb_up.png";
import g1 from "./../images/blog/g1.png";
import g2 from "./../images/blog/g2.png";
import g3 from "./../images/blog/g3.png";
import follow1 from "./../images/blog/follow1.png";
import "./Group.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";
const Group = () => {
  const [user] = useAuthState(auth);
  const [itemsFollows, setItemsFollows] = useState([]);
  const follows = [
    { id: 1, name: "Mathematics", image: follow1, status: true },
    { id: 2, name: "Activism", image: g3, status: true },
    { id: 3, name: "MBA", image: g2, status: true },
    { id: 4, name: "Philosophy", image: g1, status: true },
  ];

  useEffect(() => {
    setItemsFollows(follows);
  }, []);

  const addToDb = (itemdb) => {
    const items = itemsFollows.filter((item) => item.id !== itemdb.id);
    const itemsFind = itemsFollows.find((item) => item.id === itemdb.id);

    if (itemsFind.status === true) {
      itemsFind.status = false;
      // console.log(itemsFind);
      setItemsFollows([itemsFind, ...items]);
      const newCart = itemsFollows.sort().map((item) => item);
      console.log(newCart);
      setItemsFollows(newCart);
    } else if (itemsFind.status === false) {
      itemsFind.status = true;
      setItemsFollows([itemsFind, ...items]);
      const newCart = itemsFollows.sort().map((item) => item);
      setItemsFollows(newCart);
    }
  };

  return (
    <div className="group_area">
      <h4 className="group_text display_flex justify_content_start">
        {" "}
        <img src={twotone_thumb_up} alt="" /> REcommended Groups
      </h4>
      {itemsFollows.map((item) => (
        <div className="follow_group display_flex" key={item.id}>
          <div className="thum_follow display_flex justify_content_start">
            <img src={item.image} alt="" />
            <h6>{item.name}</h6>
          </div>
          <div className="follow_area">
            {user ? (
              <button
                className={`custom_btn follow_btn ${
                  item.status === false ? "follow_btn_active" : ""
                }`}
                onClick={() => addToDb(item)}
              >
                {item.status === false ? "Followed" : "Follow"}
              </button>
            ) : (
              <button className={`custom_btn follow_btn `}>Follow</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Group;
