import { Col, Row } from "antd";
import React from "react";

function Footer() {
  return (
    <Row style={styles.footerRowStyle}>
      <Col span={4}>
        Kolon 1
      </Col>
      <Col span={4}>
        Kolon 2
      </Col>
      <Col span={4}>
        Kolon 3
      </Col>
      <Col span={4}>
        Kolon 4
      </Col>
    </Row>
  );
}

const styles = {
  footerRowStyle: {
    backgroundColor: "#f0f2f5",
    padding: "1rem",
    margin: "8px",
    boxSizing: "border-box",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-around",
  } as React.CSSProperties,
};

export default Footer;
