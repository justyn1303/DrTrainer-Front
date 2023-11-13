import React, { useState, useRef, useMemo } from "react";
import {
  Box,
  Button,
  IconButton,
  Image,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { HEADER_X_PADDING, MAIN_MENU_ITEMS } from "./constants";
import { useNavigate } from "react-router-dom";

export const HamburgerMenu: React.FC = observer(() => {
  const [isOpen, setIsOpen] = useState(false);

  const listRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLButtonElement>(null);

  const toast = useToast();
  const navigate = useNavigate();

  const { base, ...listPosition } = HEADER_X_PADDING;

  return (
    <VStack
      pb={{ base: "53px", sm: 0 }}
      pt={{ base: "66.86px", sm: 0 }}
      zIndex={3}
    >
      <IconButton
        aria-label={"label"}
        icon={<Image src="/Icon material-menu.svg" />}
        variant="filter"
        onClick={() => {}}
        ref={iconRef}
        bg="primary"
        border={0}
        w="fit-content"
        h="fit-content"
      />
      {isOpen && (
        <Box
          pos="absolute"
          bg="background"
          top="100%"
          borderColor="primary"
          borderWidth="0px 2px 2px 2px"
          borderRadius="0px 0px 15px 15px"
          px="40px"
          py="30px"
          right={{ ...listPosition, base: "18px" }}
          ref={listRef}
          maxW={"90vw"}
          zIndex={1}
        >
          <VStack gap="14px">
            <Button
              variant="menu"
              color="background"
              bg="accent"
              borderColor="accent"
              as="a"
              href="/organizator/utworz-glosowanie"
            >
              Utwórz głosowanie
            </Button>
            <VStack gap="14px" pb="27px">
              {MAIN_MENU_ITEMS.map((menuItem) => (
                <CustomTooltip
                  key={menuItem.href}
                  message={menuItem.openInNewTab ? NEW_TAB_WARNING : ""}
                >
                  <Button
                    key={menuItem.href}
                    as="a"
                    href={menuItem.href}
                    variant="menu"
                    target={menuItem.openInNewTab ? "_blank" : undefined}
                    whiteSpace="normal"
                    textAlign="center"
                    {...menuItem.customProps}
                  >
                    {menuItem.label}
                  </Button>
                </CustomTooltip>
              ))}
            </VStack>
            <Button
              variant="menu"
              color="background"
              bg="primary"
              {...bindToCommand(logOutCommand)}
            >
              Wyloguj
            </Button>
          </VStack>
        </Box>
      )}
    </VStack>
  );
});
