import React from "react";
import { Col, Row, Card } from "antd";
import { fakeCategories } from "../../../fakeCategories";

const styles = {
    cardStyle: {
        boxSizing: "border-box",
        borderRadius: "0px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "0px",
        height: "4rem",
        boxShadow: "0 1px 2px 0 rgba(0,0,0,0.2), 0 3px 5px 0 rgba(0,0,0,0.19)"
    } as React.CSSProperties,
};

function FeaturedProducts() {
    return (
        <Card style={styles.cardStyle}>
            <Row>
                {fakeCategories.map((content: any) => (
                    <Col span={2} style={{ marginInline: "1rem" }} key={content.title}>
                        {content.title}
                    </Col>
                ))}
            </Row>
        </Card>
    );
}

export default FeaturedProducts;
