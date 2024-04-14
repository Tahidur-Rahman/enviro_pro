import { Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, ListItem, List } from "@chakra-ui/react";
import { useState } from "react";

function PopOverContent({isOpen,handleClose}) {
  return (
    <Popover isOpen={isOpen} onClose={handleClose}>
       <PopoverContent style={{top:'75vh',left:'35vw',width:"30vw"}}>
        <PopoverArrow />
        <PopoverHeader>Brown Blight</PopoverHeader>
        <PopoverBody><List spacing={2}>
  <ListItem>
    ➡ Type : Fungus
  </ListItem>
  <ListItem>
    ➡ A area : 5.6 lower part, 7,8 part
  </ListItem>
  <ListItem>
    ➡ Medicine : Prepiconazole, Tabueonazole
  </ListItem>
</List></PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default PopOverContent;
