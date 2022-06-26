import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import auth from "../Firebase/Firebase.init";
import SpinnerLoading from "../Share/SpinnerLoading";
import "./Home.css";
const Home = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <SpinnerLoading />;
  }
  return (
    <section className="home_section">
      {!user && <Banner />}
      <Blog />
    </section>
  );
};

export default Home;
