import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import useGlobalContexts from "../../Context/GlobalContext";
import auth from "../Firebase/Firebase.init";
import SpinnerLoading from "../Share/SpinnerLoading";
import fb from "./../images/login/f_logo.png";
import google from "./../images/login/g_search.png";

const SocialLogin = ({ signup }) => {
  const { setmodalshow, setmodalshowsignup } = useGlobalContexts();

  // github
  // const [signInWithGithub, gituser, gitloading, giterror] =
  //   useSignInWithGithub(auth);
  // google
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;

  // loading
  if (loading) {
    return <SpinnerLoading />;
  }

  // error
  if (error) {
    errorElement = <>Error: {error?.message}</>;
  }
  // token
  if (user) {
    if (setmodalshowsignup) {
      setmodalshowsignup(false);
    } else if (setmodalshow) {
      setmodalshow(false);
    } else {
      navigate("/");
    }
  }
  // handleGoogleSignIn
  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
  };

  return (
    <>
      <p className="text-danger">{errorElement}</p>
      <div className="col-lg-12">
        <div className=" text-center form_grom_w_320">
          <button className="social_btn">
            {" "}
            <img src={fb} alt="" />{" "}
            <span>Sign {!signup ? "in" : " up"} with Facebook</span>
          </button>
        </div>
      </div>
      <div className="col-lg-12">
        <div className=" text-center form_grom_w_320 p_10">
          <button className="social_btn" onClick={handleGoogleSignIn}>
            {" "}
            <img src={google} alt="" />{" "}
            <span>Sign {!signup ? "in" : " up"} with Google</span>
          </button>
        </div>
        {!signup && (
          <div className=" text-center form_grom_w_320 p_10 ">
            <span className="forgot_text">Forgot Password?</span>
          </div>
        )}
      </div>
    </>
  );
};

export default SocialLogin;
