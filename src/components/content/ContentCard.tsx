import { Card } from "antd";
import React from "react";


const cardStyle = {
    width: "94%",
    margin: "8px",
    boxSizing: "border-box",
    borderRadius: "8px",
    boxShadow: "0 1px 2px 0 rgba(0,0,0,0.2), 0 3px 5px 0 rgba(0,0,0,0.19)"
} as React.CSSProperties;
 

function ContentCard(props: any) {
  const { title, description, image } = props;

  return (
   <Card 
    title={title}
    bordered={false}
    style={cardStyle}
    >

    <p>{description}</p>

    </Card>
  );
}

export default ContentCard;