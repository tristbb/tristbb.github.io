import React from "react";
import "./SmokeBackground.css"; // Importing external CSS

const SmokeBackground = () => {
  return (
    // Tailwind CSS for layout and positioning, custom class for specific styles
    <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden smoke-effect">
      {/* This div serves as the smoke backdrop; additional content can go here or in other components */}
    </div>
  );
};

export default SmokeBackground;
