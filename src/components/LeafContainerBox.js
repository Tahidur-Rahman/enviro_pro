import { Box } from "@chakra-ui/react";
import React from "react";

const LeafContainerBox = (props) => {
    return (
        <Box
            w={props.width}
            h={props.height}
            // bg="red"
            borderBottomColor={props.noBorderBottom ? "" : "#ddd"}
            borderBottomWidth={props.noBorderBottom ? "0px" : "1px"}
            onClick={props.onClick}
            cursor="pointer"
        >
            {props.children}
        </Box>
    );
};

export default LeafContainerBox;
