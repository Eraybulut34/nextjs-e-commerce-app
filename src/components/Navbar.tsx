import React, { useContext, useEffect } from "react";
import AuthContext from "@/context/auth/authContext";
import Link from "next/link";
import { Button, Card, Col, Row, Space } from "antd";
import LoginModal from "./modals/LoginModal";
import SignUpModal from "./modals/SignUpModal";
import { TodoService } from "@/services/TodoService";
interface NavbarContextType {
  login: boolean;
  signup: boolean;
  dispatch: Function;
}
const todoService = new TodoService();
function Navbar() {
  const { dispatch }: NavbarContextType = useContext(AuthContext);

  const loginOpen = () => {
    dispatch({
      type: "LOGIN_OPEN",
    });
  };

  const signupOpen = () => {
    dispatch({
      type: "SIGNUP_OPEN",
    });
  };

  const links = [
    {
      name: "Software Forum",
      link: "/",
    },
  ];

  const cardStyle: React.CSSProperties = {
    backgroundColor: "#f0f2f5",
    boxSizing: "border-box",
  };

  const getTodoDetail = async () => {
    const response = await todoService.GetTodoDetail(1);
    console.log(response);
  };

  useEffect(() => {
    getTodoDetail();
  }, []);

  return (
    <Card style={cardStyle}>
      <Row>
        <Col span={20}>
          {links.map((link: any, index: any) => (
            <Link
              href={link.link}
              key={index}
              style={{ color: "black", fontWeight: "bold", fontSize: 16 }}
            >
              {link.name}
            </Link>
          ))}
        </Col>
        <Col span={2} style={{ textAlign: "center" }}>
          <Button onClick={loginOpen} type="primary" ghost>
            Login
          </Button>
          <LoginModal />
        </Col>
        <Col span={2}>
          <Button onClick={signupOpen} type="primary" danger>
            Signup
          </Button>
          <SignUpModal />
        </Col>
      </Row>
    </Card>
  );
}

export default Navbar;
