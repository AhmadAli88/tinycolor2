import { useState } from 'react';
import tinycolor from 'tinycolor2';

const SaturationAdjuster = () => {
  // Initial color set to a shade of blue
  const [color, setColor] = useState('#3498db');
  const [saturatedColor, setSaturatedColor] = useState(
    tinycolor(color).saturate(30).toString()
  );
  const [desaturatedColor, setDesaturatedColor] = useState(
    tinycolor(color).desaturate(30).toString()
  );

  // Function to adjust the color saturation
  const adjustSaturation = (e) => {
    const value = e.target.value;

    // Saturate the color based on the slider input
    const newSaturatedColor = tinycolor(color).saturate(value).toString();
    setSaturatedColor(newSaturatedColor);

    // Desaturate the color based on the slider input
    const newDesaturatedColor = tinycolor(color).desaturate(value).toString();
    setDesaturatedColor(newDesaturatedColor);
  };

  // Function to handle color input change
  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);

    // Update saturated and desaturated colors when the base color changes
    setSaturatedColor(tinycolor(newColor).saturate(30).toString());
    setDesaturatedColor(tinycolor(newColor).desaturate(30).toString());
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Color Saturation and Desaturation Example</h1>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor='colorPicker'>Pick a color: </label>
        <input
          type='color'
          id='colorPicker'
          value={color}
          onChange={handleColorChange}
          style={{ marginLeft: '10px' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor='adjustmentRange'>
          Adjust Saturation / Desaturation:{' '}
        </label>
        <input
          type='range'
          id='adjustmentRange'
          min='-50'
          max='50'
          defaultValue='0'
          onChange={adjustSaturation}
          style={{ width: '200px', marginLeft: '10px' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <div
          style={{
            backgroundColor: saturatedColor,
            padding: '50px',
            textAlign: 'center',
            color: '#fff',
            borderRadius: '5px',
            marginBottom: '10px',
          }}
        >
          <p style={{ fontSize: '20px' }}>Saturated Color: {saturatedColor}</p>
        </div>

        <div
          style={{
            backgroundColor: desaturatedColor,
            padding: '50px',
            textAlign: 'center',
            color: '#fff',
            borderRadius: '5px',
          }}
        >
          <p style={{ fontSize: '20px' }}>
            Desaturated Color: {desaturatedColor}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SaturationAdjuster;
