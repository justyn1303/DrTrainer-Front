import React, { useState } from "react";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

interface CheckingModalProps {
  isOpen: boolean;
  onClose: () => void;
  isCorrect: boolean | null;
}

export const CheckingModal: React.FC<CheckingModalProps> = ({
  isOpen,
  onClose,
  isCorrect,
}) => {
  const getModalColor = () => {
    if (isCorrect === true) {
      return "green.500";
    } else if (isCorrect === false) {
      return "red.500";
    } else {
      return "gray.500";
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent bgColor={getModalColor()}>
        <ModalHeader>
          {isCorrect === true ? "Dobra odpowiedź!" : "Źle!"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          ZAZNACZONY PRZEZ CIEBIE OBSZAR JEST NIEPRAWIDŁOWY!
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
