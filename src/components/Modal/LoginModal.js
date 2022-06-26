import React from "react";
import { Modal } from "react-bootstrap";
import Login from "../From/Login";
import closemodal from "./../images/login/closemodal.png";

const LoginModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="from_account_area"
    >
      <div className="closeLoginmodal" onClick={props.onHide}>
        <img src={closemodal} alt="" />
      </div>
      <Login
        closehide={props.onHide}
        setmodalshowsignup={props.setmodalshowsignup}
        setmodalshow={props.setmodalshow}
      />
    </Modal>
  );
};

export default LoginModal;
