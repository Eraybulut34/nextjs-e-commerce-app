import { Card } from "antd";
import React from "react";
import { EditOutlined, ShoppingCartOutlined, StarFilled } from '@ant-design/icons';
import Router from "next/router";
import Image from "next/image";
import { addFavorite } from "@/store";
import { useDispatch } from "react-redux";



function CartCard(props: any) {
  const dispatch = useDispatch();
  const { title, description, price, image, id } = props;
  const myLoader = ({ src }: any) => {
    return src
  }
  const cardDClicked = (e: any) => {
    Router.push(`/shop/${id}`);
  };
  function handleAddFavorite() {
    dispatch(addFavorite(props));
  }

  return (
    <Card
      bordered={false}
      style={styles.cardStyle}
      cover={<Image loader={myLoader} onClick={cardDClicked} alt="example" src={image} width={500} height={350} />}
      actions={[
        <StarFilled key="setting" onClick={handleAddFavorite} />,
        <ShoppingCartOutlined key="ellipsis" />
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
    fontSize: 15,
    color: "#1890ff",
    fontWeight: "bold",
  },
};

export default CartCard;
