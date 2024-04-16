import React, { useState } from "react";
import "./home.css";
import { Box, Popover, List,ListItem, PopoverArrow, PopoverHeader, PopoverBody, Text} from "@chakra-ui/react";
import leafSvg from "../../assets/images/leaf.svg";
import LeafContainerBox from "../../components/LeafContainerBox";
import SidebarCardContainer from "../../components/SidebarCardContainer";
import Health from "../../components/Health";
import PopOverContent from "./HoverPopover";
import Review from "../../components/Review";
import Album from "../../components/Album";
import { DATA } from "../../assets/Data";
import Map from "../../components/Map";

const Home = () => {
    const [showContent, setShowContent] = useState(true);
    const [activeTab, setActiveTab] = useState(1);
    const [hoverTab, setHoverTab] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = (number) => {
        setIsOpen(true);
        setHoverTab(number);
    };
    console.log(DATA,activeTab,'DATA[activeTab]?.review')
    
      const handleClose = () => {
        setIsOpen(false);
      };
    const activeLeftBoxBgColor = "";

    const onClickLeftBox = (val) => {
        setActiveTab(val);
        setShowContent(showContent);
    };
    return (
        <Box h="100vh" display="flex" w="100%">
          <PopOverContent isOpen={isOpen} handleClose={handleClose} data={DATA[hoverTab]}/>
            {/* left container */}
            <Box flex={1} className={`${showContent ? "fade-in" : "fade-out"}`}>
                <SidebarCardContainer
                    children={
                        <>
                            <Album photos={DATA[activeTab]?.photos} />
                        </>
                    }
                />
                <SidebarCardContainer
                    children={
                        <>
                            <Health health={DATA[activeTab]?.health} />
                        </>
                    }
                />
            </Box>

            {/* middle container */}

            <Box
                w="25%"
                h="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                bg={"#fff"}
                overflow={"hidden"} 
            >
                <Text textAlign="center" fontWeight="700" mb={5}>Tea Plant Health Analysis: Leaf Disease Segmentation</Text>
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
                                bg={activeTab == 1 ? activeLeftBoxBgColor : ""}
                                isActive={activeTab == 1 ? true : false}
                                onMouseEnter={()=>handleOpen(1)} onMouseLeave={handleClose}
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
                                onMouseEnter={()=>handleOpen(2)} onMouseLeave={handleClose}
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

                                onMouseEnter={()=>handleOpen(3)} onMouseLeave={handleClose}
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

                                onMouseEnter={()=>handleOpen(4)} onMouseLeave={handleClose}
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

                                onMouseEnter={()=>handleOpen(5)} onMouseLeave={handleClose}
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

                                onMouseEnter={()=>handleOpen(6)} onMouseLeave={handleClose}
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

                                onMouseEnter={()=>handleOpen(7)} onMouseLeave={handleClose}
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

                                onMouseEnter={()=>handleOpen(8)} onMouseLeave={handleClose}
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
                            <Map regions={DATA[activeTab]?.regions}/>
                        </>
                    }
                />
                <SidebarCardContainer
                    children={
                        <>
                            <Review reviews={DATA[activeTab]?.review} />
                        </>
                    }
                />
            </Box>
        </Box>
    );
};

export default Home;
