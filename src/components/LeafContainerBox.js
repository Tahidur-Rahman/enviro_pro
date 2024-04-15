import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const LeafContainerBox = ({onMouseEnter,onMouseLeave,...props}) => {
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
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
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
                    fontSize={"14px"}
                    fontWeight={"bold"}
                    position={"absolute"}
                    color={props.isActive ? "#fff" : "#000"}
                    justifyContent={"center"}
                >
                    {props.number}
                </Text>
                {props.isActive && <Image  src={require('../assets/images/infection.png')} h={50} style={{
                   marginLeft:props.number %2 == 0?-20:40,
                   paddingTop:props.number<3?20:0
                }} width={100}/>}
            </Box>
        </Box>
    );
};

export default LeafContainerBox;
