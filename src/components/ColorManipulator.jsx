import { useState } from 'react';
import tinycolor from 'tinycolor2';

const ColorManipulator = () => {
  const [color, setColor] = useState('#3498db'); // initial color (blue)

  // Function to lighten or darken the color based on the slider value
  const adjustColor = (e) => {
    const value = e.target.value;
    const adjustedColor = tinycolor(color).lighten(value).toString(); // lighten the color
    setColor(adjustedColor);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Color Manipulation</h1>
      <div style={{ marginBottom: '10px' }}>
        <p>Adjust the brightness of the color:</p>
        <input
          type="range"
          min="-50"
          max="50"
          defaultValue="0"
          onChange={adjustColor}
          style={{ width: '200px' }}
        />
      </div>
      <div
        style={{
          backgroundColor: color,
          padding: '50px',
          textAlign: 'center',
          color: '#fff',
          borderRadius: '5px',
        }}
      >
        <p style={{ fontSize: '20px' }}>Current Color: {color}</p>
      </div>
    </div>
  );
};

export default ColorManipulator;
