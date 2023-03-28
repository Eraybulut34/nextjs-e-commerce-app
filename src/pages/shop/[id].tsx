import { useRouter } from "next/router";
import React from "react";
import { Row, Col, Card, Space, Button } from "antd";
import Image from "next/image";

function ProductDetail(props: any) {
  const router = useRouter();
  const { id } = router.query;
  const myLoader = ({ src }: any) => {
    return src
  }
  return (
    <>
      <div style={styles.container}>
        <Row style={{ width: "85%" }}>
          <Col xs={24} md={18} xl={12} style={styles.colStyle}>
            <Image loader={myLoader} src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" width={1200} height={300} alt="asdadsa" />
          </Col>
          <Col span={12}>
            <Row>
              <Col span={24}>
                <Card title="Yatak" bordered={false} style={{ width: "100%" }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Col>

            </Row>
            <Row className="pa-4">
              <Col span={12}></Col>
              <Col span={6}>
                <Button type="primary" style={{ width: "85%" }}>Sepete Ekle</Button>
              </Col>
              <Col span={6}>
                <Button type="primary" style={{ width: "85%" }}>Favorilere Ekle</Button>
              </Col>
            </Row>
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