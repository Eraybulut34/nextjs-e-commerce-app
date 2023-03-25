import { useRouter } from "next/router";
import React from "react";
import { Row, Col, Card, Layout } from "antd";
import Image from "next/image";
import { Content } from "antd/es/layout/layout";


function ContentCard(props: any) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      {/* product detail page */}
      <div style={styles.container}>
        <Row style={{ width: "75%" }}>
          <Col span={12}>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" width={300} height={300} alt="asdadsa" />
          </Col>
          <Col span={12}>
            <Card title="Card title" bordered={false} style={{ width: "100%" }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </div>

    </>
  );
}

const styles = {
  container: {
    height: "75vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  },
};

export default ContentCard;