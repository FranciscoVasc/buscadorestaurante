import Skeleton from '../Skeleton';
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Card = styled.div`
    display: flex;
    justify-content: center;
    padding: 7px;
    width:90px;
    height:90px;
    border-radius:6px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
`;

const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};   
    color: #ffffff;
    font-size: 14px;
`;

const ImageCard = ({ photo, title }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        const imageLoader = new Image();
   //     imageLoaded.src = photo;
   imageLoader.src = photo;
     //   imageLoaded.onload = () => setImageLoaded(true);
     imageLoader.onload = () => setImageLoaded(true);
    }, [photo]);

    return (
        <>
            {imageLoaded ? (
                <Card photo={photo} >
                    <Title>{title}</Title>
                </Card>

            ) : <Skeleton width="90px" height="90px" />}
        </>
    );
};


export default ImageCard;