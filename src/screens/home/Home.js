import React, { useState } from "react";
import "./home.css";
import { Box, Button, Image, Text, useDisclosure } from "@chakra-ui/react";
import PersonCard from "../../components/PersonCard";
import leafSvg from "../../assets/images/leaf.svg";
import LeafContainerBox from "../../components/LeafContainerBox";

const Home = () => {
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
                <Box
                    w="300px"
                    h="500px"
                    bgImage={`url(${leafSvg})`}
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    display={"flex"}
                >
                    {/* left leaf boxes container */}
                    <Box
                        w="50%"
                        h="100%"
                        borderRightColor={"#ddd"}
                        borderRightWidth="1px"
                        // display={"flex"}
                        // flexDirection={"column"}
                        // alignItems={"flex-end"}
                    >
                        <LeafContainerBox
                            width="100%"
                            height="25%"
                            onClick={onClickMe}
                        />
                        <LeafContainerBox
                            width="100%"
                            height="20%"
                            onClick={onClickMe}
                        />
                        <LeafContainerBox
                            width="100%"
                            height="20%"
                            onClick={onClickMe}
                        />
                        <LeafContainerBox
                            width="100%"
                            height="35%"
                            onClick={onClickMe}
                            noBorderBottom
                        />
                    </Box>

                    {/* right leaf boxes container */}
                    <Box w="50%" h="100%">
                        <LeafContainerBox
                            width="100%"
                            height="25%"
                            onClick={onClickMe}
                        />
                        <LeafContainerBox
                            width="100%"
                            height="20%"
                            onClick={onClickMe}
                        />
                        <LeafContainerBox
                            width="100%"
                            height="20%"
                            onClick={onClickMe}
                        />
                        <LeafContainerBox
                            width="100%"
                            height="35%"
                            onClick={onClickMe}
                            noBorderBottom
                        />
                    </Box>
                </Box>
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

export default Home;
