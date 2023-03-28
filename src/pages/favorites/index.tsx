import React from "react";
import { Col, Row, Card, List, Button } from "antd";
import { fakeProducts } from "../../../fakeProducts";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { DeleteOutlined } from "@ant-design/icons";
import { removeFavorite } from "@/store";

function FavoritesPage() {
  const dispatch = useDispatch();
  const removeFavoriteHandler = (product: any) => {
    dispatch(removeFavorite(product));
  };
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
                <Row justify={"center"} align={"middle"} key = {content.description}>
                  <Col span={4}>
                    <Image
                      loader={myLoader}
                      src={content.image}
                      alt="Picture of the author"
                      width={100}
                      height={100}
                    />
                  </Col>
                  <Col span={17}>
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
                  <Col span={3}>
                    <Row align={"middle"} className="pa-4">
                      <Col span={24}>
                        <Button type="primary" style={{width:"100%"}}>Sepete Ekle</Button>
                      </Col>
                      <Col span={24} className="py-2">
                        <Button type="primary" danger style={{ width: "100%" }} onClick={() => removeFavoriteHandler(content)}>
                          <DeleteOutlined />
                        </Button>
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
