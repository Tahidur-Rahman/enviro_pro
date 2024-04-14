import {
    Box,
    Card,
    Text,
} from "@chakra-ui/react";
import React from "react";
import Meter from "./Meter";

const Review = ({reviews}) => {
    const items = Object.keys(reviews);
    console.log('items',items)
    return (
        <Card w="90%" h="90%" bg="white" borderRadius={0} alignItems="center" justifyContent={"center"}>
            <Box px="10px" py="10px" >
                {/* <Text fontSize="18px" fontWeight="bold">
                    Review
                </Text> */}
            
                {items.map(item=><Box display="flex" alignItems="center" height={90}>
                <Text fontSize="14px" width={120} fontWeight="bold">
                {item}
                </Text>
                <Meter value={reviews[item]}/>
                </Box>)}
               
            </Box>
        </Card>
    );
};

export default Review;
