import { Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, ListItem, List } from "@chakra-ui/react";
import { useState } from "react";

function PopOverContent({isOpen,handleClose,data}) {
  return (
    <Popover isOpen={isOpen} onClose={handleClose}>
       <PopoverContent style={{top:'75vh',left:'30vw',width:"40vw"}}>
        <PopoverArrow />
        <PopoverHeader>{data?.name}</PopoverHeader>
        <PopoverBody><List spacing={2}>
  <ListItem>
    ➡ Type : {data?.type}
  </ListItem>
  <ListItem>
    ➡ Damage Time : {data?.dTime}
  </ListItem>
  <ListItem>
    ➡ Damage Rate : {data?.dRate}
  </ListItem>
  <ListItem>
  ➡ Region : {data?.regions.join(', ')}
  </ListItem>
</List></PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default PopOverContent;
