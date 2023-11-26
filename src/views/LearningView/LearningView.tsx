import React, { useRef, useState } from "react";
import { PageWrapper } from "../../components/PageWrapper";
import { Header } from "../../components/Header/Header";
import { DetectionWindow } from "../LearningView/components/DetectionWindow";
import { ButtonComponent } from "../../components/ButtonComponent";
import { SmallButtonComponent } from "./components/SmallButtonComponent";
import { HamburgerMenu } from "../../components/Header/HamburgerMenu";
import { ImageButton } from "./components/ImageButton";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

interface LearningViewProps {}

export const LearningView: React.FC<LearningViewProps> = () => {
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setError(null);
      };
      reader.onerror = () => {
        setError("Coś poszło nie tak");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  //modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleCheckButtonClick = (isAnswerCorrect: boolean) => {
    setIsCorrect(isAnswerCorrect);
    onOpen();
  };

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
    <PageWrapper>
      <Header />
      <HamburgerMenu />
      <DetectionWindow>
        {image ? (
          <img src={image} alt="Wczytany obraz" style={{ maxWidth: "100%" }} />
        ) : null}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </DetectionWindow>
      <SmallButtonComponent
        top="250px"
        right="80px"
        buttonText="ZACZNIJ OD NOWA"
        onClick={() => console.log("Przycisk ZACZNIJ OD NOWA został kliknięty")}
      ></SmallButtonComponent>
      <SmallButtonComponent
        top="315px"
        right="80px"
        buttonText="NOWY TEST"
        onClick={() => console.log("Przycisk NOWY TEST został kliknięty")}
      ></SmallButtonComponent>
      <ImageButton
        buttonText="WCZYTAJ OBRAZ"
        onButtonClick={handleButtonClick}
        onInputChange={handleImageChange}
      />
      <ButtonComponent
        buttonFontSize={20}
        top="750px"
        right="80px"
        buttonText="SPRAWDŹ"
        onClick={() => handleCheckButtonClick(true)}
      ></ButtonComponent>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bgColor={getModalColor()}>
          <ModalHeader>
            {isCorrect === true ? "Dobra odpowiedź!" : "Źle!"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Treść modala, Treść modala, Treść modala, Treść modala, Treść
            modala, Treść modala, Treść modala
          </ModalBody>
        </ModalContent>
      </Modal>
    </PageWrapper>
  );
};
