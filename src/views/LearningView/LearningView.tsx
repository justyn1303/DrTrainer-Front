import React from "react";
import { PageWrapper } from "../../components/PageWrapper";
import { Header } from "../../components/Header/Header";
import { DetectionWindow } from "../LearningView/components/DetectionWindow";
import { ButtonComponent } from "../../components/ButtonComponent";
import { SmallButtonComponent } from "./components/SmallButtonComponent";

interface LearningViewProps {}

export const LearningView: React.FC<LearningViewProps> = () => {
  return (
    <>
      <PageWrapper>
        <Header></Header>
        <DetectionWindow></DetectionWindow>
        <ButtonComponent
          buttonFontSize={20}
          top="830px"
          buttonText="SPRAWDŹ"
        ></ButtonComponent>
        <SmallButtonComponent
          top="830px"
          right="150px"
          buttonText="ZACZNIJ OD NOWA"
        ></SmallButtonComponent>
        <SmallButtonComponent
          top="870px"
          right="150px"
          buttonText="NOWY TEST"
        ></SmallButtonComponent>
      </PageWrapper>
    </>
  );
};
