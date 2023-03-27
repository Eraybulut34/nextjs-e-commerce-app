import React, { useEffect, useState } from "react";
import { Col, Row, Card, Menu } from "antd";
import { fakeCategories } from "../../../fakeCategories";
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import { useWindowSize } from "@/hooks/index";


function FeaturedProducts() {
    const [innerWidth, setInnerWidth] = useState(0);
    const styles = {
        cardStyle: {
            boxSizing: "border-box",
            borderRadius: "0px",
            display: "flex",
            justifyContent: innerWidth < 1200 ? "flex-start" : "center",
            alignItems: "center",
            padding: "0px",
            height: "4rem",
            overflow: "auto",
            boxShadow: "0 1px 2px 0 rgba(0,0,0,0.2), 0 3px 5px 0 rgba(0,0,0,0.19)"
        } as React.CSSProperties,
    };
    useEffect(() => {
        setInnerWidth(window.innerWidth);
    }, [useWindowSize()]);
    return (
        <Card style={styles.cardStyle}>
            <Row>
                {
                    innerWidth > 1200 ? (
                        fakeCategories.map((content: any) => (
                            <Col xl={2}
                                lg={4}
                                xs={22}

                                style={{ marginInline: "1rem" }} key={content.title}>
                                {content.title}
                            </Col>
                        ))) : (
                        <Dropdown overlay={
                            <Menu>
                                {
                                    fakeCategories.map((content: any) => (
                                        <Menu.Item key={content.title}>
                                            {content.title}
                                        </Menu.Item>
                                    ))
                                }
                            </Menu>
                        }>
                            <Button>Kategoriler</Button>
                        </Dropdown>


                    )
                }
            </Row>
        </Card>
    );
}

export default FeaturedProducts;
