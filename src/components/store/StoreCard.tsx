import { Card } from "antd";
import React from "react";
import { EditOutlined, ShoppingCartOutlined, StarFilled } from '@ant-design/icons';
import Router from "next/router";
import Image from "next/image";
import { addFavorite, removeFavorite } from "@/store";
import { useDispatch, useSelector } from "react-redux";



function StoreCard(props: any) {
  const { title, description, price, image, id } = props;
  const myLoader = ({ src }: any) => {
    return src
  }

  return (
    <Card
      bordered={false}
      style={styles.cardStyle}
      cover={<Image loader={myLoader} onClick={() => { Router.push(`/shop/${id}`); }} alt="example" src={image} width={500} height={350} />}
    >
      <p style={styles.cartTitleStyle}>{title}</p>
      <p style={styles.cartDescriptionStyle}>{description}</p>
    </Card>
  );
}

const styles = {
  cardStyle: {
    width: "94%",
    margin: "8px",
    borderRadius: "8px",
    boxShadow: "0 1px 2px 0 rgba(0,0,0,0.2), 0 3px 5px 0 rgba(0,0,0,0.19)",

  },
  cartTitleStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  cartDescriptionStyle: {
    fontSize: 12,
    maxHeight: "7rem",
    overflow: "auto",
    marginBlock: "0.5rem"
  },
  cartPriceStyle: {
    fontSize: 15,
    color: "#1890ff",
    fontWeight: "bold",
  },
};

export default StoreCard;
