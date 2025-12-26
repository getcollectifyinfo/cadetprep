import React from 'react';

interface DigitalDisplayProps {
  value: number;
}

export const DigitalDisplay: React.FC<DigitalDisplayProps> = ({ value }) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-16 bg-black flex items-center justify-center rounded border-2 border-gray-700">
      <span className="text-4xl font-mono font-bold text-green-500 tracking-wider">
        {value.toString().padStart(3, '0')}
      </span>
    </div>
  );
};
