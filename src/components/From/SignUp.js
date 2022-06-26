import React, { useRef } from "react";
import fb from "./../images/login/f_logo.png";
import google from "./../images/login/g_search.png";
import login_img from "./../images/login/login_img.png";
import md_close from "./../images/login/md_close.png";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../Firebase/Firebase.init";
import { useNavigate } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = ({ setmodalshowsignup, setmodalshow, closehide }) => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");

  let errorElement;
  if (error || updatingError) {
    errorElement = <span>Error:{error || updatingError}</span>;
  }

  if (user) {
    setmodalshowsignup(false);
  }
  // handleRegister
  const handleRegister = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.fname + " " + data.lname });

    reset();
  };
  const showLogin = () => {
    setmodalshowsignup(false);
    setmodalshow(true);
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
                      <h4>Create Account</h4>
                    </div>
                    <div className="from_title md_signin_d_none">
                      <h6 className="login_header_text" onClick={showLogin}>
                        Already have an account?{" "}
                        <span className="signin_text"> Sign In</span>
                      </h6>
                    </div>
                    <div className="from_title md_colse_btn  md_close_d_n md_close_d_b">
                      <img
                        src={md_close}
                        className="cur_pointer"
                        onClick={closehide}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="display_flex justify_content_start custom_gap_30 md_justify_content_center">
                    <div className="account_from form_grom_w_320">
                      <div className="row">
                        <form
                          className="login_form mt-4"
                          onSubmit={handleSubmit(handleRegister)}
                        >
                          <div className="col-lg-12">
                            <div className="form_grom_section form_grom_w_320 display_flex justify_content_start custom_gap_0">
                              <div className="input_from_160">
                                <input
                                  {...register("fname", { required: true })}
                                  type="text"
                                  className={`form-control input_width_73 border_right_0 ${
                                    errors.fname ? "is-invalid" : ""
                                  }`}
                                  placeholder="First Name"
                                />
                              </div>
                              <div className="input_from_160">
                                <input
                                  {...register("lname", { required: true })}
                                  type="text"
                                  className={`form-control input_width_73  ${
                                    errors.lname ? "is-invalid" : ""
                                  }`}
                                  placeholder="Last Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form_grom_section form_grom_w_320 ">
                                <input
                                  {...register("email", { required: true })}
                                  type="email"
                                  className={`form-control border_top_0  ${
                                    errors.email ? "is-invalid" : ""
                                  }`}
                                  placeholder="Enter email"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form_grom_section form_grom_w_320">
                                <input
                                  {...register("password", { required: true })}
                                  type="password"
                                  className={`form-control border_top_0  ${
                                    errors.password ? "is-invalid" : ""
                                  }`}
                                  placeholder="Password"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form_grom_section form_grom_w_320 ">
                                <input
                                  {...register("password_repeat", {
                                    validate: (value) =>
                                      value === password.current ||
                                      "The passwords do not match",
                                  })}
                                  type="password"
                                  className={`form-control border_top_0  ${
                                    errors.password_repeat ? "is-invalid" : ""
                                  }`}
                                  placeholder="Confirm Password"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="login_btn form_grom_w_320 p_20 md_display_flex ">
                                {/* <button className="btn custom_login_btn w-100">
                                  Create Account
                                </button> */}
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
                                    Create Account
                                  </button>
                                )}
                                <div>
                                  <span
                                    className="md_signup_text"
                                    onClick={showLogin}
                                  >
                                    or, Sign In
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
                            <SocialLogin
                              setmodalshowsignup={setmodalshowsignup}
                              signup={true}
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="login_bannner form_grom_w_320">
                      <div className="login_thum">
                        <img src={login_img} alt="" />
                      </div>
                      <div className="login_banner_footer">
                        <span>
                          By signing up, you agree to our Terms & conditions,
                          Privacy policy
                        </span>
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

export default SignUp;
