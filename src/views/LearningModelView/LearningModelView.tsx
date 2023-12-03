import React, { useState } from "react";
import { PageWrapper } from "../../components/PageWrapper";
import { Header } from "../../components/Header/Header";
import { HamburgerMenu } from "../../components/Header/HamburgerMenu";

interface LearningModelViewProps {}

export const LearningModelView: React.FC<LearningModelViewProps> = () => {
  const [isDrawing, setIsDrawing] = useState(false);

  //rysowanie
  const handleDrawButtonClick = () => {
    console.log("Dziala");
  };

  return (
    <PageWrapper>
      <Header onDrawCircleClick={handleDrawButtonClick} />
      <HamburgerMenu />
    </PageWrapper>
  );
};
