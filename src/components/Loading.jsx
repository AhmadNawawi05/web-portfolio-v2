import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import loadingAnimation from "../assets/Animation - 1723161403444.json"; 

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black-100">
      <Player
        autoplay
        loop
        src={loadingAnimation}
        style={{ height: '150px', width: '150px' }}
      />
    </div>
  );
};

export default LoadingSpinner;
