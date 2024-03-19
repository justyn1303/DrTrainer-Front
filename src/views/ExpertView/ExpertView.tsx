import React, { useRef, useState } from "react";
import { PageWrapper } from "../../components/PageWrapper";
import { Header } from "../../components/Header/Header";
import { HamburgerMenu } from "../../components/Header/HamburgerMenu";
import { DetectionWindowExpert } from "./components/DetectionWindowExpert";
import { ImageButton } from "./components/ImageButton";
import { ButtonComponent } from "../../components/ButtonComponent";
import { CheckingModal } from "../../components/Modal";

interface ExpertViewProps {}

export const ExpertView: React.FC<ExpertViewProps> = () => {
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
  const [isCheckingModalOpen, setIsCheckingModalOpen] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

  const handleCheckButtonClick = (isAnswerCorrect: boolean) => {
    setIsAnswerCorrect(isAnswerCorrect);
    setIsCheckingModalOpen(true);
  };

  //rysowanie
  const [isDrawingMode, setIsDrawingMode] = useState(false);
  const [drawingCircles, setDrawingCircles] = useState<any[]>([]);
  const [startPosition, setStartPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [endPosition, setEndPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleDrawButtonClick = () => {
    setIsDrawingMode(!isDrawingMode);
  };

  const handleDrawingStart = (position: { x: number; y: number }) => {
    setStartPosition(position);
  };

  const handleDrawingMove = (position: { x: number; y: number }) => {
    console.log("Move", position);
    setEndPosition(position);
  };

  const handleDrawingEnd = () => {
    console.log("End", startPosition, endPosition);
    if (startPosition && endPosition) {
      const radius =
        Math.sqrt(
          Math.pow(endPosition.x - startPosition.x, 2) +
            Math.pow(endPosition.y - startPosition.y, 2)
        ) || 0;

      setDrawingCircles([
        ...drawingCircles,
        {
          id: Date.now(),
          x: startPosition.x,
          y: startPosition.y,
          radius: radius,
          color: "red",
        },
      ]);
    }

    setStartPosition(null);
    setEndPosition(null);
  };

  return (
    <PageWrapper>
      <Header onDrawCircleClick={handleDrawButtonClick} />
      <HamburgerMenu />
      <DetectionWindowExpert
        isDrawingMode={isDrawingMode}
        drawingCircles={drawingCircles}
        startPosition={startPosition}
        endPosition={endPosition}
        onDrawingStart={handleDrawingStart}
        onDrawingMove={handleDrawingMove}
        onDrawingEnd={handleDrawingEnd}
      >
        {image ? (
          <img src={image} alt="Wczytany obraz" style={{ maxWidth: "100%" }} />
        ) : null}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </DetectionWindowExpert>
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
        onClick={() => handleCheckButtonClick(false)}
      ></ButtonComponent>
      <CheckingModal
        isOpen={isCheckingModalOpen}
        onClose={() => setIsCheckingModalOpen(false)}
        isCorrect={isAnswerCorrect}
      />
    </PageWrapper>
  );
};
