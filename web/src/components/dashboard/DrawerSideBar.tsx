import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  MenuIcon,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { SideBar } from "./SideBar";
import { HamburgerIcon } from "@chakra-ui/icons";
export function DrawerSideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>(null);

  return (
    <>
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        icon={<HamburgerIcon />}
        aria-label={`menu`}
        ref={btnRef}
        onClick={onOpen}
      />

      <Drawer
        size="xs"
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <SideBar />
        </DrawerContent>
      </Drawer>
    </>
  );
}
