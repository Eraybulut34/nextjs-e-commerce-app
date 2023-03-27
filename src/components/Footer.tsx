import { Col, Row } from "antd";
import React from "react";
import { fakeCategories } from "../../fakeCategories";
import Router from "next/router";

function Footer() {
  return (
    <Row style={styles.footerRowStyle}>
      <Col span={4} style={styles.colStyle} onClick={() => Router.push("/favorites")}>
        Favorilerim
      </Col>
      <Col span={4} style={styles.colStyle}>
        <span style={styles.colTitleStyle}>Kategoriler</span>
        {fakeCategories.map((content: any) => (
          <span key={content.title} style={styles.colItemStyle}>{content.title}</span>
        ))}
      </Col>
      <Col span={4} style={styles.colStyle}>
        <span style={styles.colTitleStyle}>
        </span>
      </Col>
      <Col span={4} style={styles.colStyle}>
        Kolon 4
      </Col>
    </Row>
  );
}

const styles = {
  footerRowStyle: {
    backgroundColor: "#f0f2f5",
    padding: "1rem",
    boxSizing: "border-box",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-around",
    paddingBottom: "8rem"
  } as React.CSSProperties,
  colStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  } as React.CSSProperties,
  colTitleStyle: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    marginBlock: "1rem"
  } as React.CSSProperties,
  colItemStyle: {
    margin: "3px"
  }
};

export default Footer;
