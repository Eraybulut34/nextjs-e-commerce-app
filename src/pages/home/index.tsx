import React from "react";
import { Col, Row, List } from "antd";
import CartCard from "../../components/cart/CartCard";
const entryTitles = [
  {
    title: "bugün bunlar oldu",
    link: "/",
  },
  {
    title: "bugün bunlar oldu",
    link: "/",
  },
  {
    title: "bugün bunlar oldu",
    link: "/",
  },
  {
    title: "bugün bunlar oldu",
    link: "/",
  }]

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Link",
    dataIndex: "link",
    key: "link",
  },
];

const contentStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  height: "100vh",
};

const leftMenuStyle: React.CSSProperties = {
  backgroundColor: "#f0f2f5",
  padding: "1rem",
  margin: "8px",
  boxSizing: "border-box",
  borderRadius: "8px"
};
//contents title,description,image
const contents = [
  {
    id: 1,
    title: "Yatak",
    price: "10",
    description: "Lorem ipsum , nunc nisl aliquet ",
    image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
  },
  {
    id: 2,
    title: "Koltuk",
    price: "10",
    description: "Lorem ipsum , nunc nisl aliquet",
    image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
  },
  {
    id: 3,
    title: "Telefon",
    price: "10",
    description: "Lorem ipsum , nunc nisl aliquet",
    image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
  },
  {
    id: 4,
    title: "Bilgisayar",
    price: "10",
    description: "Lorem ipsum , nunc nisl aliquet",
    image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
  },
]

function HomePage() {
  return (
    <div>
      <Row style={contentStyle}>
        <Row>
          {contents.map((content: any) => (
            <Col span={4} style={{ margin: "1rem" }} key={content.title}>
              <CartCard
              
              title={content.title} description={content.description} image={content.image} price={content.price} id={content.id} />
            </Col>
          ))}
        </Row>
      </Row>

    </div>
  );
}

export default HomePage;
