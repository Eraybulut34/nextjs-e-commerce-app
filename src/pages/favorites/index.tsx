import React from "react";
import { Col, Row, Card, List } from "antd";
import { fakeProducts } from "../../../fakeProducts";
import { useSelector } from "react-redux";
import Image from "next/image";


function FavoritesPage() {
  let favorites = useSelector((state: any) => state.favorites);
  favorites = favorites.map((favorite: any) => {
    return favorite.product
  })
  console.log(favorites);
  const myLoader = ({ src }: any) => {
    return src
  }
  return (
    <div>
      <Row style={styles.rowStyle}>
        <Col span={22}>
          <Card title="Favorilerim" bordered={false} style={{ width: "100%" }}>
            <List>
              {favorites.map((content: any) => (
                <Row justify={"center"} align={"middle"}>
                  <Col span={4}>
                    <Image
                      loader={myLoader}
                      src={content.image}
                      alt="Picture of the author"
                      width={100}
                      height={100}
                    />
                  </Col>
                  <Col span={20}>
                    <Row>
                      <Col span={24}>
                        <h3>{content.title}</h3>
                      </Col>
                      <Col span={24}>
                        <p>{content.description}</p>
                      </Col>
                      <Col span={24}>
                        <p>{content.price}</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              ))}
            </List>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

const styles = {
  rowStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    height: "100vh",
  },
};

export default FavoritesPage;
