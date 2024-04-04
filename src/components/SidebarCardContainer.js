import { Box } from "@chakra-ui/react";
import React from "react";

const SidebarCardContainer = (props) => {
    return (
        <Box
            w="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            // bg={"#ddd"}
            h="50%"
            // borderBottomColor={"#ddd"}
            // borderBottomWidth={"1px"}
        >
            {props.children}
        </Box>
    );
};

export default SidebarCardContainer;
