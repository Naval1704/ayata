import React, { useEffect } from 'react';
import './Cursor.css';

function Cursor() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      var cursorShadow = document.querySelector('.cursor-shadow');
      var radius = 200;

      var cursorX = event.clientX;
      var cursorY = event.clientY;

      // Calculate the adjusted top and left positions based on the cursor position and radius
      var adjustedTop = cursorY - radius / 40;
      var adjustedLeft = cursorX - radius / 40;

      cursorShadow.style.top = adjustedTop + 'px';
      cursorShadow.style.left = adjustedLeft + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-shadow"></div>
  );
}

export default Cursor;
