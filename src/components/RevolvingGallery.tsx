"use client";

import React, { useState, useEffect } from "react";
import { Flex, Text, Media, Button } from "@once-ui-system/core";
import { gallery } from "@/resources";

export const RevolvingGallery: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  console.log("RevolvingGallery rendering, gallery:", gallery);
  
  // Early return if no images
  if (!gallery.images || gallery.images.length === 0) {
    console.log("No gallery images found");
    return (
      <Flex
        fillWidth
        horizontal="center"
        vertical="center"
        style={{
          minHeight: "400px",
          border: "2px dashed #ccc",
          borderRadius: "12px",
        }}
      >
        <Text>No gallery images available</Text>
      </Flex>
    );
  }

  // Set up the rotation effect
  useEffect(() => {
    const imageCount = gallery.images.length;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % imageCount;
        console.log(`Rotating from image ${prevIndex} to ${nextIndex}`);
        return nextIndex;
      });
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []); // Empty dependency array since gallery.images is static

  const currentImage = gallery.images[currentImageIndex];
  console.log(`Current image index: ${currentImageIndex}, image:`, currentImage);

  return (
    <Flex
      fillWidth
      horizontal="center"
      vertical="center"
      direction="column"
    >
      <Flex
        fillWidth
        horizontal="center"
        vertical="center"
        style={{
          minHeight: "400px",
          position: "relative",
          overflow: "hidden",
          borderRadius: "12px",
          border: "2px solid #333",
        }}
      >
        <Media
          src={currentImage.src}
          alt={currentImage.alt}
          aspectRatio={currentImage.orientation === "vertical" ? "3 / 4" : "16 / 9"}
          radius="m"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      </Flex>
      
      {/* View Full Gallery Button - positioned like a tag sticking off */}
      <Flex
        background="page"
        border="neutral-alpha-weak"
        radius="xs"
        shadow="l"
        padding="8"
        paddingX="12"
        style={{
          marginTop: "-20px", // Pull it up to overlap with the gallery border
        }}
      >
        <Button
          href={gallery.path}
          variant="secondary"
          size="s"
          weight="default"
          arrowIcon
        >
          <Text variant="body-default-xs" onBackground="neutral-medium">
            View Full Gallery
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};
