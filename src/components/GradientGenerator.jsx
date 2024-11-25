import  { useState } from 'react';
import tinycolor from 'tinycolor2';

const GradientGenerator = () => {
  const [color1, setColor1] = useState('#3498db'); // Default first color
  const [color2, setColor2] = useState('#e74c3c'); // Default second color
  const [angle, setAngle] = useState(45); // Default gradient angle

  // Dynamically generate gradient based on input colors and angle
  const gradient = `linear-gradient(${angle}deg, ${tinycolor(color1)
    .darken(20)
    .toString()}, ${tinycolor(color2).lighten(20).toString()})`;

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <h1>Dynamic Gradient Generator</h1>

      {/* Gradient Preview */}
      <div
        style={{
          height: '200px',
          width: '100%',
          background: gradient,
          margin: '20px 0',
          borderRadius: '10px',
          transition: 'background 0.3s ease',
        }}
      ></div>

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

      {/* Angle Input */}
      <div style={{ marginBottom: '20px' }}>
        <label>
          Gradient Angle (in degrees):
          <input
            type="number"
            value={angle}
            onChange={(e) => setAngle(e.target.value)}
            style={{ marginLeft: '10px', width: '60px' }}
          />
        </label>
      </div>

      {/* Generated CSS Code */}
      <div>
        <h3>Generated CSS:</h3>
        <pre
          style={{
            background: '#f1f1f1',
            padding: '10px',
            borderRadius: '5px',
            overflowX: 'auto',
            textAlign: 'left',
          }}
        >
          {`background: ${gradient};`}
        </pre>
      </div>
    </div>
  );
};

export default GradientGenerator;
