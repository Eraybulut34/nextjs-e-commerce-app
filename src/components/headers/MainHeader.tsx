import React, { useState } from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import { fakeProducts } from '../../../fakeProducts';



const MainHeader: React.FC = () => {

    const myLoader = ({ src }: any) => {
        return "https://i.pinimg.com/originals/ec/b9/2d/ecb92d18c7855c986a5571c1b6f7cad2.jpg";
    };

    return (
        <>
            <Carousel dotPosition="bottom" autoplay style={styles.carouselStyle}>
                {fakeProducts.map((content: any) => (
                    <div key={content.id} style={styles.contentStyle}>
                        <Image loader={myLoader} src={content.image} alt={content.title} width="5000" height={500} /></div>
                ))}
            </Carousel>
        </>
    );
};

const styles = {
    carouselStyle: {
        boxSizing: "border-box",
        borderRadius: "80px",
        display: "flex",
        justifyContent: "center",
        border: "1px solid #f0f2f5",
        alignContent: "center",
        alignItems: "center",
    },
    contentStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        boxSizing: "border-box",
        borderRadius: "80px",
    }
}

export default MainHeader;