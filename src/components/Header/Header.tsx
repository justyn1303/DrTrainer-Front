import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  Text,
  HStack,
  Button,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { AddIcon, CheckCircleIcon, MinusIcon } from "@chakra-ui/icons";

interface HeaderProps {
  onDrawCircleClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onDrawCircleClick }) => {
  const [isDrawingMode, setIsDrawingMode] = useState(false);

  useEffect(() => {
    document.body.style.cursor = isDrawingMode ? "crosshair" : "auto";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [isDrawingMode]);

  return (
    <Box
      as="b"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      p={2}
      w="100%"
      bg="#342F2F"
      color="#D9D9D9"
    >
      <HStack align="center">
        <Box ml={700}>
          <Text fontSize="30px" color="#D9D9D9">
            DR TRAINER
          </Text>
        </Box>
        <Spacer />
        <Flex alignItems={"right"}>
          <Button
            variant={"solid"}
            colorScheme={"#342F2F"}
            size={"sm"}
            mr={5}
            leftIcon={<CheckCircleIcon />}
            color="#D9D9D9"
          >
            Przesuń
          </Button>
          <Button
            variant={"solid"}
            colorScheme={"#342F2F"}
            size={"sm"}
            mr={5}
            leftIcon={<CheckCircleIcon />}
            color="#D9D9D9"
            onClick={() => {
              onDrawCircleClick();
              setIsDrawingMode(!isDrawingMode);
            }}
          >
            Zaznacz
          </Button>
          <Button
            variant={"solid"}
            colorScheme={"#342F2F"}
            size={"sm"}
            mr={5}
            leftIcon={<AddIcon />}
            color="#D9D9D9"
          >
            Powiększ
          </Button>
          <Button
            variant={"solid"}
            colorScheme={"#342F2F"}
            size={"sm"}
            mr={5}
            leftIcon={<MinusIcon />}
            color="#D9D9D9"
          >
            Pomniejsz
          </Button>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
              mr={4}
            >
              <Avatar
                size={"sm"}
                src={
                  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Rola</MenuItem>
              <MenuItem>Profil</MenuItem>
              <MenuDivider />
              <MenuItem>Wyloguj się</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Box>
  );
};
