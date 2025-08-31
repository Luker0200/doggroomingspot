"use client";

import { FilloutStandardEmbed } from "@fillout/react";

export default function FilloutEmbed() {
  return (
    <div style={{ 
      width: "100%", 
      minHeight: "800px", // Increased minimum height
      marginBottom: "4rem" // More bottom margin to ensure footer spacing
    }}>
      <FilloutStandardEmbed 
        filloutId="dEgDqrwkxbus"
        inheritParameters={true}
        dynamicResize={true}
      />
    </div>
  );
}
