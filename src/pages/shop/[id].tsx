import { useRouter } from "next/router";
import React from "react";
import { Row, Col, Card, Layout } from "antd";
import Image from "next/image";
import { Content } from "antd/es/layout/layout";


function ProductDetail(props: any) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <div style={styles.container}>
        <Row style={{ width: "85%" }}>
          <Col span={12} style={styles.colStyle}>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" width={1200} height={300} alt="asdadsa" />
          </Col>
          <Col span={12}>
            <Card title="Yatak" bordered={false} style={{ width: "100%" }}>
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
    padding: "1rem",
    height: "75vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  },
  colStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    paddingInline: "8px",
  },
};

export default ProductDetail;