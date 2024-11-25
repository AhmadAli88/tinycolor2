import { useState } from 'react';
import tinycolor from 'tinycolor2';

const ColorConverter = () => {
  const [color, setColor] = useState('#3498db');
  const [hslColor, setHslColor] = useState(tinycolor(color).toHsl());
  const [rgbColor, setRgbColor] = useState(tinycolor(color).toRgb());

  // Function to handle color input change
  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    setHslColor(tinycolor(newColor).toHsl());
    setRgbColor(tinycolor(newColor).toRgb());
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Color Conversion Example</h1>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="colorPicker">Pick a color: </label>
        <input
          type="color"
          id="colorPicker"
          value={color}
          onChange={handleColorChange}
          style={{ marginLeft: '10px' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Converted Colors:</h3>
        <div style={{ marginBottom: '10px' }}>
          <p><strong>HSL:</strong> {`h: ${hslColor.h}, s: ${hslColor.s}%, l: ${hslColor.l}%`}</p>
        </div>

        <div>
          <p><strong>RGB:</strong> {`r: ${rgbColor.r}, g: ${rgbColor.g}, b: ${rgbColor.b}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ColorConverter;
