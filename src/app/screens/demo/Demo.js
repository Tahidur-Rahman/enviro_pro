import React, { useState } from "react";
import "./demo.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import PersonCard from "../../components/PersonCard";

AOS.init();
const Demo = () => {
    const [showContent, setShowContent] = useState(true);

    const onClickMe = () => {
        setShowContent(!showContent);
    };
    return (
        <Box h="100vh" display="flex" w="100%">
            {/* left container */}

            <Box
                w="30%"
                h="100%"
                className={`${showContent ? "fade-in" : "fade-out"}`}
            >
                <Box
                    w="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    // bg={"purple"}
                    h="50%"
                >
                    <PersonCard />
                </Box>
                <Box
                    w="100%"
                    // bg={"#ddd"}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    h="50%"
                >
                    <PersonCard />
                </Box>
            </Box>

            {/* middle container */}

            <Box
                w="40%"
                h="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bg={"#ddd"}
            >
                <Button onClick={onClickMe}>
                    <Text>
                        {showContent ? "Click To Hide" : "Click To See"}
                    </Text>
                </Button>
            </Box>

            {/* right container */}
            <Box
                w="30%"
                h="100%"
                className={`${showContent ? "fade-in" : "fade-out"}`}
            >
                <Box
                    w="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    // bg={"#ddd"}
                    h="50%"
                >
                    <PersonCard />
                </Box>
                <Box
                    w="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    // bg={"purple"}
                    h="50%"
                >
                    <PersonCard />
                </Box>
            </Box>
        </Box>
    );
};

export default Demo;
