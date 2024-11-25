import  { useState } from 'react';

const ThemeToggler = () => {
  const lightTheme = '#ffffff'; // Light theme background color
  const darkTheme = '#2c3e50';  // Dark theme background color

  const [isDark, setIsDark] = useState(false); // Track if the dark theme is active
  const [color, setColor] = useState(lightTheme); // Current background color

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = isDark ? lightTheme : darkTheme;
    setColor(newTheme);
    setIsDark(!isDark);
    document.body.style.backgroundColor = newTheme; // Apply the theme to the body
    document.body.style.color = isDark ? '#000000' : '#ffffff'; // Adjust text color
  };

  return (
    <div
      style={{
        backgroundColor: color,
        color: isDark ? '#ffffff' : '#000000',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      <h1>React Theme Toggler</h1>
      <p>The current theme is {isDark ? 'Dark' : 'Light'}.</p>
      <button
        onClick={toggleTheme}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: isDark ? '#ecf0f1' : '#34495e',
          color: isDark ? '#34495e' : '#ecf0f1',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggler;
