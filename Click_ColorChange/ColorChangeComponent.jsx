import React, { useState } from 'react';

const ColorChangeComponent = () => {
  // State to manage the background color
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Initial color is white

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Handler for click event
  const handleClick = () => {
    const newColor = getRandomColor();
    setBackgroundColor(newColor);
  };

  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: backgroundColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        border: '1px solid #000',
      }}
      onClick={handleClick}
    >
      Click me to change color!
    </div>
  );
};

export default ColorChangeComponent;