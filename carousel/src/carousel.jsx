import React, { useState, useEffect } from 'react';
import './index.css'; // Import your CSS for styling

const CrewCarousel = ({ crewmembers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // This effect runs when currentIndex changes
  
    // Initialize an interval
    const intervalId = setInterval(() => {
      if (currentIndex >= 0 && currentIndex < crewmembers.length - 1) {
        // If currentIndex is within bounds, increment it
        setCurrentIndex(currentIndex + 1);
      } else if (currentIndex === crewmembers.length - 1) {
        // If currentIndex is at the last index, reset it to 0
        setCurrentIndex(0);
      }
    }, 3000); // Interval of 3000 milliseconds (3 seconds)
  
    // Cleanup function to clear the interval when the component unmounts or when currentIndex changes
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, crewmembers]); // Include crewmembers as a dependency
    return (
    <div className="carousel">
      <div className="carousel-content">
        <h3>{crewmembers[currentIndex].Role}</h3>
        <p>{crewmembers[currentIndex].Name}</p>
        <p>{crewmembers[currentIndex].About}</p>
      </div>
    </div>
  );
};

export default CrewCarousel;
