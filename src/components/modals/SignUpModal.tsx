import React from "react";
import { useContext } from "react";
import AuthContext from "@/context/auth/authContext";
import { Modal, Row, Col, Input } from "antd";

interface SignupContextType {
  signup: false;
  dispatch: Function;
}

function SignUpModal() {
  const { signup, dispatch }: SignupContextType = useContext(AuthContext);
  const handleOpen = () => {
    dispatch({
      type: "SIGNUP_OPEN",
    });
  };
  const handleClose = () => {
    dispatch({
      type: "SIGNUP_CLOSE",
    });
  };
  const toLogin = () => {
    dispatch({
      type: "SIGNUP_TO_LOGIN",
    });
  };
  return (
    <div>
      <Modal
        title="Kayıt Ol"
        open={signup}
        onOk={handleOpen}
        onCancel={handleClose}
      >
        <Row>
          <Col span={24} className="pa-2">
            <Input autoFocus={true} placeholder="Username" />
          </Col>
          <Col span={24} className="pa-2">
            <Input placeholder="Email" />
          </Col>
          <Col span={24} className="pa-2">
            <Input placeholder="Password" />
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

export default SignUpModal;
