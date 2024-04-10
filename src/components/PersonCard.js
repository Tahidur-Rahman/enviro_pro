import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";

const PersonCard = () => {
    return (
        <Card w="80%" h="90%" bg="white" borderRadius={0}>
            <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                h={"45%"}
            />
            <Box px="10px" py="10px">
                <Text fontSize="18px" fontWeight="bold">
                    John doe
                </Text>
                <Text fontSize="13px" my="5px">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                </Text>

                <Button mt="5px" bg={"blue"} color={"white"}>
                    Click me
                </Button>
            </Box>
        </Card>
    );
};

export default PersonCard;
