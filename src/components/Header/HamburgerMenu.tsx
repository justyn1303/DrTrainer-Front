import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { HamburgerItem } from "./HamburgerItem";

export const HamburgerMenu: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <IconButton
        aria-label="open sidebar"
        icon={<HamburgerIcon />}
        size="md"
        variant="ghost"
        onClick={toggleMenu}
        position="fixed"
        top="2"
        left="1"
        zIndex="1000"
        color="#D9D9D9"
      />

      <Drawer isOpen={isMenuOpen} placement="left" onClose={toggleMenu}>
        <DrawerOverlay>
          <DrawerContent bg="#342F2F" color="#D9D9D9">
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>

            <DrawerBody>
              <VStack spacing={4} align="start">
                <HamburgerItem text="Ustawienia" to="/seetings" />
                <HamburgerItem text="Błędne odpowiedzi" to="/bad-answer" />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
