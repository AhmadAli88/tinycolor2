import { useState } from 'react';
import tinycolor from 'tinycolor2';

const ColorAdjuster = () => {
  // Initial color set to a shade of blue
  const [color, setColor] = useState('#3498db');
  const [lightenedColor, setLightenedColor] = useState(tinycolor(color).lighten(20).toString());
  const [darkenedColor, setDarkenedColor] = useState(tinycolor(color).darken(20).toString());

  // Function to adjust the color lightness
  const adjustColor = (e) => {
    const value = e.target.value;

    // Lighten the color based on the slider input
    const newLightenedColor = tinycolor(color).lighten(value).toString();
    setLightenedColor(newLightenedColor);

    // Darken the color based on the slider input
    const newDarkenedColor = tinycolor(color).darken(value).toString();
    setDarkenedColor(newDarkenedColor);
  };

  // Function to handle color input change
  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);

    // Update lightened and darkened colors when the base color changes
    setLightenedColor(tinycolor(newColor).lighten(20).toString());
    setDarkenedColor(tinycolor(newColor).darken(20).toString());
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Color Lighten and Darken Example</h1>

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
        <label htmlFor="adjustmentRange">Adjust Lightness / Darkness: </label>
        <input
          type="range"
          id="adjustmentRange"
          min="-50"
          max="50"
          defaultValue="0"
          onChange={adjustColor}
          style={{ width: '200px', marginLeft: '10px' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <div
          style={{
            backgroundColor: lightenedColor,
            padding: '50px',
            textAlign: 'center',
            color: '#fff',
            borderRadius: '5px',
            marginBottom: '10px',
          }}
        >
          <p style={{ fontSize: '20px' }}>Lightened Color: {lightenedColor}</p>
        </div>

        <div
          style={{
            backgroundColor: darkenedColor,
            padding: '50px',
            textAlign: 'center',
            color: '#fff',
            borderRadius: '5px',
          }}
        >
          <p style={{ fontSize: '20px' }}>Darkened Color: {darkenedColor}</p>
        </div>
      </div>
    </div>
  );
};

export default ColorAdjuster;
