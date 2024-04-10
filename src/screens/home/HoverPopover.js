import { Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from "@chakra-ui/react";
import { useState } from "react";

function HoverPopover() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Popover isOpen={isOpen} onClose={handleClose}>
      <PopoverTrigger>
        <div onMouseEnter={handleOpen} onMouseLeave={handleClose}>
          Hover over me
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Popover Header</PopoverHeader>
        <PopoverBody>This is the content of the popover.</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default HoverPopover;
