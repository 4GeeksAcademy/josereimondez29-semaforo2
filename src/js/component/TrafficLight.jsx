import React, { useState } from 'react';


const TrafficLight = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        <div
          className={`light red ${selectedColor === 'red' ? 'selected' : ''}`}
          onClick={() => setSelectedColor('red')}
        ></div>
        <div
          className={`light yellow ${selectedColor === 'yellow' ? 'selected' : ''}`}
          onClick={() => setSelectedColor('yellow')}
        ></div>
        <div
          className={`light green ${selectedColor === 'green' ? 'selected' : ''}`}
          onClick={() => setSelectedColor('green')}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;

