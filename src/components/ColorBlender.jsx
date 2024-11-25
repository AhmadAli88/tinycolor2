import { useState } from 'react';
import tinycolor from 'tinycolor2';

const ColorBlender = () => {
  const [color1, setColor1] = useState('#3498db'); // Initial color 1 (blue)
  const [color2, setColor2] = useState('#e74c3c'); // Initial color 2 (red)
  const [blendedColor, setBlendedColor] = useState(tinycolor.mix(color1, color2, 50).toString()); // Blended color at 50%

  // Function to handle color 1 change
  const handleColor1Change = (e) => {
    const newColor = e.target.value;
    setColor1(newColor);
    setBlendedColor(tinycolor.mix(newColor, color2, 50).toString());
  };

  // Function to handle color 2 change
  const handleColor2Change = (e) => {
    const newColor = e.target.value;
    setColor2(newColor);
    setBlendedColor(tinycolor.mix(color1, newColor, 50).toString());
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Color Blending Example</h1>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="colorPicker1">Pick the first color: </label>
        <input
          type="color"
          id="colorPicker1"
          value={color1}
          onChange={handleColor1Change}
          style={{ marginLeft: '10px' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="colorPicker2">Pick the second color: </label>
        <input
          type="color"
          id="colorPicker2"
          value={color2}
          onChange={handleColor2Change}
          style={{ marginLeft: '10px' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Blended Color:</h3>
        <div
          style={{
            backgroundColor: blendedColor,
            padding: '50px',
            textAlign: 'center',
            color: '#fff',
            borderRadius: '5px',
            marginBottom: '10px',
          }}
        >
          <p style={{ fontSize: '20px' }}>Blended Color: {blendedColor}</p>
        </div>
      </div>
    </div>
  );
};

export default ColorBlender;
