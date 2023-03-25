import { Card } from "antd";
import React from "react";
import { EditOutlined, ShoppingCartOutlined, StarFilled } from '@ant-design/icons';


function ContentCard(props: any) {
  const { title, description, price, image } = props;

  return (
    <Card
      bordered={false}
      style={styles.cardStyle}
      cover={<img alt="example" src={image} />}
      actions={[
        <StarFilled key="setting" />,
        <ShoppingCartOutlined key="ellipsis" />,
      ]}
    >
      <p style={styles.cartTitleStyle}>{title}</p>
      <p style={styles.cartDescriptionStyle}>{description}</p>
      <p style={styles.cartPriceStyle}>{price} $</p>

    </Card>
  );
}

const styles = {
  cardStyle: {
    width: "94%",
    margin: "8px",
    boxSizing: "border-box",
    borderRadius: "8px",
    boxShadow: "0 1px 2px 0 rgba(0,0,0,0.2), 0 3px 5px 0 rgba(0,0,0,0.19)",
  },
  cartTitleStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  cartDescriptionStyle: {
    fontSize: 12,
  },
  cartPriceStyle: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
  },
};

export default ContentCard;