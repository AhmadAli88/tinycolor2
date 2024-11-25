import { useState } from 'react';
import tinycolor from 'tinycolor2';

const ContrastRatioCalculator = () => {
  const [color1, setColor1] = useState('#ff0000'); // Default color 1 (Red)
  const [color2, setColor2] = useState('#00ff00'); // Default color 2 (Green)

  // Calculate contrast ratio
  const contrastRatio = tinycolor.readability(color1, color2).toFixed(2);

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        textAlign: 'center',
        color: '#333',
      }}
    >
      <h1>Contrast Ratio Calculator</h1>

      {/* Color Inputs */}
      <div style={{ marginBottom: '20px' }}>
        <label>
          Color 1:
          <input
            type="color"
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>
          Color 2:
          <input
            type="color"
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      {/* Display Contrast Ratio */}
      <div style={{ marginTop: '20px' }}>
        <h3>Contrast Ratio:</h3>
        <p
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: contrastRatio >= 4.5 ? '#28a745' : '#dc3545', // Green for good ratio, red for poor
          }}
        >
          {contrastRatio} : 1
        </p>
        <p>
          {contrastRatio >= 4.5
            ? '✅ This contrast ratio meets WCAG AA standards for normal text.'
            : '❌ This contrast ratio does not meet WCAG AA standards for normal text.'}
        </p>
      </div>

      {/* Example Preview */}
      <div
        style={{
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <div
          style={{
            backgroundColor: color1,
            color: color2,
            width: '100px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
          }}
        >
          Text
        </div>
        <div
          style={{
            backgroundColor: color2,
            color: color1,
            width: '100px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
          }}
        >
          Text
        </div>
      </div>
    </div>
  );
};

export default ContrastRatioCalculator;
