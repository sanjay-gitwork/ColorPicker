import React, { useState, useMemo, useEffect } from "react";

// Function to generate shades of Turquoise
const generateShades = (steps) => {
  const shades = new Map(); // Using a Map to store unique shades
  for (let i = 0; i < steps; i++) {
    const hue = 174; // Hue value for Turquoise (174 degrees on the color wheel)
    const saturation = 100; // Full saturation for vivid colors
    const lightness = parseFloat(((i / steps) * 100).toFixed(2)); // Gradually changing lightness
    
    // Skip extremely dark and light colors to maintain visual appeal
    if (lightness <= 8 || lightness >= 92) continue;
    
    const hsl = `hsl(${hue}, ${saturation}%, ${lightness}%)`; // HSL color format
    const rgb = hslToRgb(hue, saturation, lightness); // Convert HSL to RGB
    const hex = rgbToHex(rgb[0], rgb[1], rgb[2]); // Convert RGB to HEX
    
    // Store the shade details in the Map
    shades.set(hex, { hsl, rgb: `rgb(${rgb.join(", ")})`, hex, lightness });
  }
  return Array.from(shades.values()); // Convert Map values into an array
};

// Function to convert HSL to RGB
const hslToRgb = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
};

// Function to convert RGB to HEX format
const rgbToHex = (r, g, b) => {
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
};

const TurquoiseShades = () => {
  const [copiedHex, setCopiedHex] = useState(""); // State to store copied HEX color
  const shades = useMemo(() => generateShades(500), []); // Generate shades once

  // Function to copy HEX code to clipboard
  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex).then(() => setCopiedHex(hex));
  };

  // Effect to reset copied message after 1.5 seconds
  useEffect(() => {
    if (copiedHex) {
      const timer = setTimeout(() => setCopiedHex(""), 1500);
      return () => clearTimeout(timer);
    }
  }, [copiedHex]);

  return (
    <div className="p-5 relative">
      {/* Title Section */}
      <h1 className="text-2xl font-bold text-center mb-4">Unique Shades of Turquoise</h1>
      <h2 className="text-lg text-center mb-2">Total Colors Generated: {shades.length}</h2>
      
      {/* Grid Container for Shades */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1">
        {shades.map((shade, index) => (
          <div
            key={index}
            role="button"
            tabIndex="0"
            className="p-5 border rounded shadow text-center text-xs sm:text-sm font-mono transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer focus:ring-2 focus:ring-black"
            style={{ backgroundColor: shade.hex, color: shade.lightness > 50 ? "black" : "white" }}
            title={`Click to copy\nHSL: ${shade.hsl} \nRGB: ${shade.rgb} \nHEX: ${shade.hex}`}
            onClick={() => copyToClipboard(shade.hex)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && copyToClipboard(shade.hex)}
          >
            {/* Display Color Values */}
            <p>{shade.hex}</p>
            <p>{shade.rgb}</p>
            <p>{shade.hsl}</p>
          </div>
        ))}
      </div>
      
      {/* Notification for Copied Color */}
      {copiedHex && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded shadow-lg text-sm transition-opacity duration-300 opacity-100">
          Copied {copiedHex} to clipboard!
        </div>
      )}
    </div>
  );
};

export default TurquoiseShades;
