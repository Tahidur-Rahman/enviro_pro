import {
    Box,
    Button,
    Card,
    Image,Progress,
    Text,
} from "@chakra-ui/react";
import React from "react";

const Health = () => {
    return (
        <Card w="80%" h="90%" bg="white" borderRadius={0}>
            <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlHIm9R6EhaoEQ2NNIMDWjkw0rmWOFX5zXZ3rIbeqXqA&s"
                h={"50%"}
            />
            <Box px="10px" py="10px">
                <Text fontSize="18px" fontWeight="bold">
                    Health Percentage
                </Text>
            
                <Box display="flex" my={3}>
                <Text fontSize="14px" width={120}>
                   Above 80%
                </Text>
                <Progress value={80} width={'100%'}  colorScheme='green' size='md'/>
                </Box>
                <Box display="flex" my={3}>
                <Text fontSize="14px" width={120}>
                Mid 30-70%
                </Text>
                <Progress value={50} width={'100%'} colorScheme='yellow' size='md'/>
                </Box>
                <Box display="flex" my={3}>
                <Text fontSize="14px" width={120}>
                   Below 30%
                </Text>
                <Progress value={30} width={'100%'} colorScheme='red' size='md'/>
                </Box>
            </Box>
        </Card>
    );
};

export default Health;
