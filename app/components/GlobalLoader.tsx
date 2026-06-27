import React from 'react';
import Image from 'next/image';
// Adjust this path to where your logo actually lives
import myLogo from 'public/profileNobg.png'; 

const GlobalLoader = () => {
  return (
    // Tailwind replaces the .loader-container CSS
    <div className="flex h-screen items-center justify-center">
      <Image 
        src={myLogo} 
        alt="Loading..." 
        width={100} 
        height={100} 
        // Tailwind replaces the keyframes and .spinner-logo CSS
        className="animate-spin" 
        priority // Add this so the loader isn't lazy-loaded
      />
    </div>
  );
};

export default GlobalLoader;