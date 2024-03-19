import React, { useRef, useState, useEffect } from "react";
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
  const [imageDimensions, setImageDimensions] = useState({
    width: 1580,
    height: 855,
  });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");

      if (ctx) {
        // Wyczyść canvas przed ponownym renderowaniem
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // Narysuj wcześniej zapisane okręgi
        drawingCircles.forEach((circle) => {
          drawCircle(ctx, circle.x, circle.y, circle.radius, circle.color);
        });
      }
    }
  }, [drawingCircles]);

  const drawCircle = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    color: string
  ) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = color;
    ctx.stroke();
  };

  useEffect(() => {
    if (image) {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        setImageDimensions({
          width: img.width,
          height: img.height,
        });
      };
    }
  }, [image]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDrawingMode && e.button === 0 && canvasRef.current) {
      const canvasRect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - canvasRect.left;
      const y = e.clientY - canvasRect.top;

      onDrawingStart({ x, y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDrawingMode && canvasRef.current) {
      const canvasRect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - canvasRect.left;
      const y = e.clientY - canvasRect.top;

      onDrawingMove({ x, y });
    }
  };

  const handleMouseUp = () => {
    if (isDrawingMode) {
      onDrawingEnd();
    }
  };

  return (
    <Box
      className="BorderBox"
      w="55%"
      h="855px"
      top="75px"
      left="400px"
      position="absolute"
      background="black"
      borderRadius="20px"
      border="5px #D9D9D9 solid"
      mx="auto"
      overflow="hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      {...rest}
    >
      {image ? (
        <img
          src={image}
          alt="Wczytany obraz"
          style={{
            width: "50%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            margin: "auto",
          }}
        />
      ) : (
        children
      )}
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0 }}
        width={1580}
        height={855}
      />
    </Box>
  );
};
