import React from "react";
import { Col, Row, List } from "antd";
import ContentCard from "../../components/content/ContentCard";
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
    title: "bugün bunlar oldu",
    description: "bugün bunlar oldu",
    image: "https://picsum.photos/200/300"
  },
  {
    title: "bugün bunlar oldu",
    description: "bugün bunlar oldu",
    image: "https://picsum.photos/200/300"
  }

]

function HomePage() {
  return (
    <div>
      <Row style={contentStyle}>
        {/* left menu with antd*/}
        <Col span={7} style={leftMenuStyle}>
          <List dataSource={entryTitles} renderItem={(item) => <List.Item>{item.title}</List.Item>} />
        </Col>
        <Col span={16}>

          {/* content cards */}
          <Row>
            {contents.map((content:any) => (
              <Col span={24} style={{margin: "1rem"}} key={content.title}>
                <ContentCard title={content.title} description={content.description} image={content.image} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

    </div>
  );
}

export default HomePage;
