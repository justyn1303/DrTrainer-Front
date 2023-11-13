import React from "react";
import { PageWrapper } from "../../components/PageWrapper";
import { HeaderTitle } from "../../components/HeaderTitle";
import { PhotoBorderBox } from "./components/PhotoBorderedBox";

interface MenuPanelViewProps {}

export const MenuPanelView: React.FC<MenuPanelViewProps> = () => {
  return (
    <PageWrapper>
      <HeaderTitle />
      <PhotoBorderBox
        left="810px"
        h="300px"
        w="300px"
        top="350px"
        backgroundImage="../../assets/Sun.svg"
        to={"/learning"}
      ></PhotoBorderBox>
    </PageWrapper>
  );
};
