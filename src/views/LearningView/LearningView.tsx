import React, { useState } from "react";
import { PageWrapper } from "../../components/PageWrapper";
import { Header } from "../../components/Header/Header";
import { DetectionWindow } from "../LearningView/components/DetectionWindow";
import { ButtonComponent } from "../../components/ButtonComponent";
import { SmallButtonComponent } from "./components/SmallButtonComponent";
import { HamburgerMenu } from "../../components/Header/HamburgerMenu";
import { CheckingModal } from "../../components/Modal";

interface LearningViewProps {}

export const LearningView: React.FC<LearningViewProps> = () => {
  const [isDrawing, setIsDrawing] = useState(false);

  //modal
  const [isCheckingModalOpen, setIsCheckingModalOpen] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

  const handleCheckButtonClick = (isAnswerCorrect: boolean) => {
    setIsAnswerCorrect(isAnswerCorrect);
    setIsCheckingModalOpen(true);
  };

  //rysowanie
  const handleDrawButtonClick = () => {
    console.log("Dziala");
  };

  return (
    <PageWrapper>
      <Header onDrawCircleClick={handleDrawButtonClick} />
      <HamburgerMenu />
      <DetectionWindow />
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
      <ButtonComponent
        buttonFontSize={20}
        top="750px"
        right="80px"
        buttonText="SPRAWDŹ"
        onClick={() => handleCheckButtonClick(true)}
      ></ButtonComponent>
      <CheckingModal
        isOpen={isCheckingModalOpen}
        onClose={() => setIsCheckingModalOpen(false)}
        isCorrect={isAnswerCorrect}
      />
    </PageWrapper>
  );
};
