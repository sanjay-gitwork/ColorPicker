import React, { useState, useMemo, useEffect } from "react";

// Function to generate exactly 250 usable shades of blue
const generateShades = () => {
  const totalShades = 250; 
  const hue = 240; // Hue for blue
  const saturation = 100; // Full saturation
  const minLightness = 10; // Avoid extreme dark
  const maxLightness = 90; // Avoid extreme light
  const step = (maxLightness - minLightness) / totalShades; // Calculate step size

  const shades = [];

  for (let i = 0; i < totalShades; i++) {
    const lightness = parseFloat((minLightness + i * step).toFixed(2));
    const hsl = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    const rgb = hslToRgb(hue, saturation, lightness);
    const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);

    shades.push({ hsl, rgb: `rgb(${rgb.join(", ")})`, hex, lightness });
  }
  
  return shades;
};

// Convert HSL to RGB
const hslToRgb = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
};

// Convert RGB to HEX
const rgbToHex = (r, g, b) => {
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
};

const BlueShades = () => {
  const [copiedHex, setCopiedHex] = useState("");
  const shades = useMemo(() => generateShades(), []); // Generate shades once

  // Copy to clipboard
  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex).then(() => setCopiedHex(hex));
  };

  useEffect(() => {
    if (copiedHex) {
      const timer = setTimeout(() => setCopiedHex(""), 1500);
      return () => clearTimeout(timer);
    }
  }, [copiedHex]);

  return (
    <div className="p-5 mt-10 relative">
      <h1 className="text-2xl font-bold text-center mb-1">250 Unique Shades of Blue</h1>
      <h2 className="text-lg text-center mb-2">Total Colors Generated: {shades.length}</h2>

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
            <p>{shade.hex}</p>
            <p>{shade.rgb}</p>
            <p>{shade.hsl}</p>
          </div>
        ))}
      </div>

      {copiedHex && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded shadow-lg text-sm transition-opacity duration-300 opacity-100">
          Copied {copiedHex} to clipboard!
        </div>
      )}
    </div>
  );
};

export default BlueShades;
