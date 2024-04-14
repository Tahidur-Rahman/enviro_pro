import {
    Box,
    Card,
    Text,
} from "@chakra-ui/react";
import React from "react";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


const Album = ({photos}) => {
    return (
        <Card w="90%" h="90%" bg="white" borderRadius={0} alignItems="center" justifyContent={"center"}>
            <Box px="10px" py="10px" >
                
            <ImageGallery  thumbnailPosition="left" layout="rows" items={photos} />
            </Box>
        </Card>
    );
};

export default Album;
