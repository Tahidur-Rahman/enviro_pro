import { Box, Text } from "@chakra-ui/react";
import React from "react";

const LeafContainerBox = (props) => {
    return (
        <Box
            w={props.width}
            h={props.height}
            bg={props.bg}
            borderRightColor={props.noBorderRight ? "" : "#fff"}
            borderRightWidth={props.noBorderRight ? "0px" : "1px"}
            onClick={props.onClick}
            cursor="pointer"
            borderTopLeftRadius={props.borderTopLeftRadius}
            borderTopRightRadius={props.borderTopRightRadius}
            borderBottomLeftRadius={props.borderBottomLeftRadius}
            borderBottomRightRadius={props.borderBottomRightRadius}
        >
            <Box
                w="100%"
                h="100%"
                display={"flex"}
                justifyContent={
                    props.justifyContent
                        ? props.justifyContent
                        : props.isRightContainer
                        ? "flex-start"
                        : "flex-end"
                }
                alignItems={props.alignItems}
                pr={props.pr}
                pl={props.pl}
                pb={props.pb}
            >
                <Text
                    fontSize={"16px"}
                    fontWeight={"bold"}
                    color={props.isActive ? "#fff" : "#000"}
                >
                    {props.number}
                </Text>
            </Box>
        </Box>
    );
};

export default LeafContainerBox;
