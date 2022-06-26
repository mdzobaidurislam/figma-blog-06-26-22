import React from "react";

import login_img from "./../images/login/login_img.png";
import md_close from "./../images/login/md_close.png";
import "./From.css";

import { useLocation, useNavigate } from "react-router-dom";
import auth from "../Firebase/Firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
// import SpinnerLoading from "../Share/SpinnerLoading";
import { Button, InputGroup, Spinner } from "react-bootstrap";
import SocialLogin from "../SocialLogin/SocialLogin";
import useGlobalContexts from "../../Context/GlobalContext";

const Login = ({ closehide }) => {
  const { setmodalshow, setmodalshowsignup } = useGlobalContexts();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // sign In With Email And  Password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let errorElement;
  if (error) {
    errorElement = <span>Error:{error?.message}</span>;
  }
  // if (loading) {
  //   // return <SpinnerLoading />;
  // }
  if (user) {
    setmodalshow(false);
    navigate(from, { replace: true });
  }

  const handleLogin = async (dataFiled) => {
    const email = dataFiled.email;
    const password = dataFiled.password;
    await signInWithEmailAndPassword(email, password);

    reset();
  };

  const showSignup = () => {
    setmodalshow(false);
    setmodalshowsignup(true);
  };
  return (
    <div className="">
      <div className="wraning_msg">
        <span>
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner_login_area">
                  <div className="login_header_area display_flex">
                    <div className="from_title">
                      <h4>Sign In</h4>
                    </div>
                    <div className="from_title md_colse_btn  md_close_d_n md_close_d_b">
                      <img
                        src={md_close}
                        className="cur_pointer"
                        onClick={closehide}
                        alt=""
                      />
                    </div>

                    <div className="from_title md_signin_d_none">
                      <h6 className="login_header_text">
                        Don’t have an account yet?
                        <span className="signin_text" onClick={showSignup}>
                          Create new for free!
                        </span>
                      </h6>
                    </div>
                  </div>
                  <div className="display_flex justify_content_start custom_gap_30 md_justify_content_center">
                    <div className="account_from form_grom_w_320">
                      <div className="row">
                        <div className="col-lg-12">
                          <form onSubmit={handleSubmit(handleLogin)}>
                            <div className="col-lg-12">
                              <div className="form_grom_section form_grom_w_320 ">
                                <InputGroup hasValidation>
                                  <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    className={`form-control ${
                                      errors.email ? "is-invalid" : ""
                                    }`}
                                    placeholder="Enter email"
                                  />
                                </InputGroup>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form_grom_section form_grom_w_320">
                                <input
                                  {...register("password", { required: true })}
                                  type="password"
                                  className={`form-control border_top_0 ${
                                    errors.password ? "is-invalid" : ""
                                  }`}
                                  placeholder="Password"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="login_btn login_btn_425 form_grom_w_320 p_20 md_display_flex ">
                                {loading ? (
                                  <Button
                                    variant="primary"
                                    className="btn custom_login_btn w-100"
                                    disabled
                                  >
                                    <Spinner
                                      as="span"
                                      animation="grow"
                                      size="sm"
                                      role="status"
                                      aria-hidden="true"
                                    />
                                    Loading...
                                  </Button>
                                ) : (
                                  <button className="btn custom_login_btn w-100">
                                    Sign In
                                  </button>
                                )}
                                <div>
                                  <span
                                    className="md_signup_text"
                                    onClick={showSignup}
                                  >
                                    or, Create Account
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              {errorElement && (
                                <p className="alert alert-danger mt-3 fw-bold">
                                  {errorElement}
                                </p>
                              )}
                            </div>
                          </form>
                          <div>
                            <SocialLogin />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="login_bannner form_grom_w_320">
                      <div className="login_thum">
                        <img src={login_img} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
