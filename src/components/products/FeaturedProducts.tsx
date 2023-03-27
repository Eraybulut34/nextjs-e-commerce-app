import React from "react";
import { Col, Row, List } from "antd";
import CartCard from "../cart/CartCard";
import { fakeProducts } from "../../../fakeProducts";

const contentStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

function FeaturedProducts() {
  return (
    <div>
      <Row style={contentStyle}>
        {fakeProducts.map((content: any) => (
          <Col xl={4} lg={8} xs={22} style={{ margin: "1rem" }} key={content.title}>
            <CartCard
              title={content.title} description={content.description} image={content.image} price={content.price} id={content.id} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default FeaturedProducts;
