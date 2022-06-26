import React from "react";
import { Modal } from "react-bootstrap";
import SignUp from "../From/SignUp";
import closemodal from "./../images/login/closemodal.png";

const SignUpModal = (props) => {
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
      <SignUp closehide={props.onHide} />
    </Modal>
  );
};

export default SignUpModal;
