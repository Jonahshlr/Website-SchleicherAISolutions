import React, { useState } from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`flex items-center ${className}`}>
      {!imgError ? (
        <img 
          src="logo.png" 
          alt="SchleicherAiSolutions" 
          className="h-10 md:h-12 w-auto object-contain"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-lg font-bold tracking-tight text-white">
          Schleicher<span className="text-brand-400">Ai</span>Solutions
        </span>
      )}
    </div>
  );
};