import React from "react";
import { Col, Row, List } from "antd";
import StoreCard from "@/components/store/StoreCard";
import { fakeStores } from "../../../fakeStores";

const contentStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

function StoresIndex() {
  return (
    <div>
      <Row style={contentStyle}>
        {fakeStores.map((content: any) => (
          <Col xl={4} lg={8} xs={22} style={{ margin: "1rem" }} key={content.title}>
            <StoreCard
              title={content.title} description={content.description} image={content.image} id={content.id} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default StoresIndex;
