import React, { useState } from "react";
import "./home.css";
import { Box, Button, Image, Text, useDisclosure } from "@chakra-ui/react";
import PersonCard from "../../components/PersonCard";
import leafSvg from "../../assets/images/leaf.svg";
import LeafContainerBox from "../../components/LeafContainerBox";
import SidebarCardContainer from "../../components/SidebarCardContainer";

const Home = () => {
    const [showContent, setShowContent] = useState(true);
    const [activeTab, setActiveTab] = useState(1);

    const activeLeftBoxBgColor = "#90D26D";

    const onClickLeftBox = (val) => {
        setActiveTab(val);
        setShowContent(!showContent);
    };
    return (
        <Box h="100vh" display="flex" w="100%">
            {/* left container */}

            <Box flex={1} className={`${showContent ? "fade-in" : "fade-out"}`}>
                <SidebarCardContainer
                    children={
                        <>
                            <PersonCard />
                        </>
                    }
                />
                <SidebarCardContainer
                    children={
                        <>
                            <PersonCard />
                        </>
                    }
                />
            </Box>

            {/* middle container */}

            <Box
                w="40%"
                h="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bg={"#fff"}
                overflow={"hidden"}
            >
                <Box
                    w="300px"
                    h={"80%"}
                    bgImage={`url(${leafSvg})`}
                    overflow={"hidden"}
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    display={"flex"}
                >
                    <Box w="100%" h="78.5%">
                        {/*  1&2 container */}
                        <Box
                            width="100%"
                            height="25%"
                            display={"flex"}
                            justifyContent={"center"}
                            borderBottomColor={"#fff"}
                            borderBottomWidth={"1px"}
                            overflow={"hidden"}
                        >
                            <LeafContainerBox
                                width="21%"
                                height="100%"
                                onClick={() => onClickLeftBox(1)}
                                number={1}
                                alignItems={"flex-end"}
                                pr="20px"
                                pb="20px"
                                borderTopLeftRadius="100px"
                                bg={activeTab == 1 ? "#90D26D" : ""}
                                isActive={activeTab == 1 ? true : false}
                            />
                            <LeafContainerBox
                                width="21%"
                                height="100%"
                                onClick={() => onClickLeftBox(2)}
                                number={2}
                                alignItems={"flex-end"}
                                pl="20px"
                                pb="20px"
                                noBorderRight
                                isRightContainer
                                borderTopRightRadius="100px"
                                bg={activeTab == 2 ? activeLeftBoxBgColor : ""}
                                isActive={activeTab == 2 ? true : false}
                            />
                        </Box>

                        {/*  3&4 container */}
                        <Box
                            width="100%"
                            height="25%"
                            display={"flex"}
                            justifyContent={"center"}
                            borderBottomColor={"#fff"}
                            borderBottomWidth={"1px"}
                        >
                            <LeafContainerBox
                                width="30%"
                                height="100%"
                                onClick={() => onClickLeftBox(3)}
                                number={3}
                                alignItems={"center"}
                                pr="20px"
                                borderTopLeftRadius="80px"
                                bg={activeTab == 3 ? activeLeftBoxBgColor : ""}
                                isActive={activeTab == 3 ? true : false}
                            />
                            <LeafContainerBox
                                width="30%"
                                height="100%"
                                onClick={() => onClickLeftBox(4)}
                                number={4}
                                alignItems={"center"}
                                pl="20px"
                                noBorderRight
                                isRightContainer
                                borderTopRightRadius="80px"
                                bg={activeTab == 4 ? activeLeftBoxBgColor : ""}
                                isActive={activeTab == 4 ? true : false}
                            />
                        </Box>
                        {/*  5&6 container */}
                        <Box
                            width="100%"
                            height="25%"
                            display={"flex"}
                            justifyContent={"center"}
                            borderBottomColor={"#fff"}
                            borderBottomWidth={"1px"}
                        >
                            <LeafContainerBox
                                width="40%"
                                height="100%"
                                onClick={() => onClickLeftBox(5)}
                                number={5}
                                alignItems={"center"}
                                pr="20px"
                                borderTopLeftRadius="70px"
                                bg={activeTab == 5 ? activeLeftBoxBgColor : ""}
                                isActive={activeTab == 5 ? true : false}
                            />
                            <LeafContainerBox
                                width="40%"
                                height="100%"
                                onClick={() => onClickLeftBox(6)}
                                number={6}
                                alignItems={"center"}
                                pl="20px"
                                noBorderRight
                                isRightContainer
                                borderTopRightRadius="70px"
                                bg={activeTab == 6 ? activeLeftBoxBgColor : ""}
                                isActive={activeTab == 6 ? true : false}
                            />
                        </Box>
                        {/*  7&8 container */}
                        <Box
                            width="100%"
                            height="25%"
                            display={"flex"}
                            justifyContent={"center"}
                        >
                            <LeafContainerBox
                                width="38%"
                                height="100%"
                                onClick={() => onClickLeftBox(7)}
                                number={7}
                                alignItems={"center"}
                                pr="20px"
                                borderBottomLeftRadius="100px"
                                bg={activeTab == 7 ? activeLeftBoxBgColor : ""}
                                isActive={activeTab == 7 ? true : false}
                            />
                            <LeafContainerBox
                                width="38%"
                                height="100%"
                                onClick={() => onClickLeftBox(8)}
                                number={8}
                                alignItems={"center"}
                                pl="20px"
                                noBorderRight
                                isRightContainer
                                borderBottomRightRadius="100px"
                                bg={activeTab == 8 ? activeLeftBoxBgColor : ""}
                                isActive={activeTab == 8 ? true : false}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* right container */}
            <Box flex={1} className={`${showContent ? "fade-in" : "fade-out"}`}>
                <SidebarCardContainer
                    children={
                        <>
                            <PersonCard />
                        </>
                    }
                />
                <SidebarCardContainer
                    children={
                        <>
                            <PersonCard />
                        </>
                    }
                />
            </Box>
        </Box>
    );
};

export default Home;
