import React, { useState } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface Circle {
  id: number;
  x: number;
  y: number;
  radius: number;
  color: string;
}

interface DetectionWindowExpertProps extends BoxProps {
  imageData?: string;
  children?: React.ReactNode;
  isDrawingMode: boolean;
  drawingCircles: Circle[];
  startPosition: { x: number; y: number } | null;
  endPosition: { x: number; y: number } | null;
  onDrawingStart: (position: { x: number; y: number }) => void;
  onDrawingMove: (position: { x: number; y: number }) => void;
  onDrawingEnd: () => void;
}

export const DetectionWindowExpert: React.FC<DetectionWindowExpertProps> = ({
  children,
  imageData,
  isDrawingMode,
  drawingCircles,
  startPosition,
  endPosition,
  onDrawingStart,
  onDrawingMove,
  onDrawingEnd,
  ...rest
}) => {
  const [image, setImage] = useState<string | undefined>(imageData);

  return (
    <Box
      className="BorderBox"
      w="1580px"
      h="855px"
      top="75px"
      left="10px"
      position="absolute"
      background="black"
      borderRadius="20px"
      border="5px #D9D9D9 solid"
      mx="auto"
      overflow="hidden"
      onMouseDown={(e) =>
        isDrawingMode &&
        e.button === 0 &&
        onDrawingStart({ x: e.clientX, y: e.clientY })
      }
      onMouseMove={(e) =>
        isDrawingMode && onDrawingMove({ x: e.clientX, y: e.clientY })
      }
      onMouseUp={() => isDrawingMode && onDrawingEnd()}
      {...rest}
    >
      {image ? (
        <img
          src={image}
          alt="Wczytany obraz"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        children
      )}
      {drawingCircles.map((circle) => (
        <div
          key={circle.id}
          style={{
            position: "absolute",
            left: circle.x - circle.radius,
            top: circle.y - circle.radius,
            width: circle.radius * 2,
            height: circle.radius * 2,
            borderRadius: "50%",
            border: `2px solid ${circle.color}`,
            pointerEvents: "none",
          }}
        />
      ))}
      {isDrawingMode && startPosition && (
        <div
          style={{
            position: "absolute",
            left: startPosition.x,
            top: startPosition.y,
            width: 0,
            height: 0,
            borderRadius: "50%",
            border: "2px dashed #FF0000", // Czerwony kolor dla okręgu
            pointerEvents: "none",
          }}
        />
      )}
      {isDrawingMode && startPosition && endPosition && (
        <div
          style={{
            position: "absolute",
            left: startPosition.x - (endPosition.x - startPosition.x) / 2,
            top: startPosition.y - (endPosition.y - startPosition.y) / 2,
            width: endPosition.x - startPosition.x,
            height: endPosition.y - startPosition.y,
            borderRadius: "50%",
            border: "2px dashed #FF0000", // Czerwony kolor dla okręgu
            pointerEvents: "none",
          }}
        />
      )}
    </Box>
  );
};
