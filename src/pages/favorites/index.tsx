import React from "react";
import { Col, Row, Card, List } from "antd";
import { fakeProducts } from "../../../fakeProducts";


function FavoritesPage() {
  return (
    <div>
      <Row>
        <Col>
          <Card title="Favorilerim" bordered={false} style={{ width: "100%" }}>
            <List>
              {fakeProducts.map((content: any) => (
                <List.Item key={content.title}>
                  <Card title={content.title} bordered={false} style={{ width: "100%" }} />
                </List.Item>
              ))}
            </List>
          </Card>


        </Col>
      </Row>

    </div>
  );
}

export default FavoritesPage;
