import React from "react";
import { Col, Row } from "antd";
import FeaturedProducts from "../../components/products/FeaturedProducts";
import MainHeader from "@/components/headers/MainHeader";

const contentStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

function HomePage() {
  return (
    <div>
      <Row style={contentStyle}>
        <Col span={22} style={{ margin: "1rem"}}>
          <MainHeader />
        </Col>
      </Row>
      <Row style={contentStyle}>
        <Col style={{ margin: "1rem" }}>
          <FeaturedProducts />
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
