import React, { useState } from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import { fakeProducts } from '../../../fakeProducts';

const contentStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
};

const MainHeader: React.FC = () => {

    const myLoader = ({ src }: any) => {
        return "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80";
    };

    return (
        <>
            <Carousel dotPosition="bottom">
                {fakeProducts.map((content: any) => (
                    <div key={content.id} style={contentStyle}>
                        <Image loader={myLoader} src={content.image} alt={content.title} width={1000} height={400} /></div>
                ))}
            </Carousel>
        </>
    );
};

export default MainHeader;