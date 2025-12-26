import React from 'react';

interface AnalogGaugeProps {
  value: number; // 1-36
  size?: number;
}

export const AnalogGauge: React.FC<AnalogGaugeProps> = ({ value, size = 300 }) => {
  const center = size / 2;
  const radius = (size / 2) * 0.8;
  const tickLength = 10;
  const labelRadius = radius + 25;

  // Generate ticks and labels
  const ticks = Array.from({ length: 36 }, (_, i) => i + 1);

  // Calculate needle angle
  // Value 36 -> 0 deg (Top)
  // Value 1 -> 10 deg
  // Angle = value * 10
  const needleAngle = value * 10;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="overflow-visible">
        {/* Gauge Background */}
        <circle cx={center} cy={center} r={radius} fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />
        
        {/* Inner White Circle (Donut hole) */}
        <circle cx={center} cy={center} r={radius * 0.5} fill="white" />

        {/* Ticks and Labels */}
        {ticks.map((tick) => {
          const angleDeg = tick * 10;
          const angleRad = (angleDeg - 90) * (Math.PI / 180); // -90 to start from top (0 deg is usually right in SVG trig)
          
          // Tick Position
          const x1 = center + (radius - tickLength) * Math.cos(angleRad);
          const y1 = center + (radius - tickLength) * Math.sin(angleRad);
          const x2 = center + radius * Math.cos(angleRad);
          const y2 = center + radius * Math.sin(angleRad);

          // Label Position
          const lx = center + labelRadius * Math.cos(angleRad);
          const ly = center + labelRadius * Math.sin(angleRad);

          return (
            <g key={tick}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" strokeWidth="1" />
              <text 
                x={lx} 
                y={ly} 
                textAnchor="middle" 
                dominantBaseline="middle" 
                className="text-xs font-medium text-gray-700 select-none"
                style={{ fontSize: '10px' }}
              >
                {tick}
              </text>
            </g>
          );
        })}

        {/* Needle */}
        <g transform={`rotate(${needleAngle}, ${center}, ${center})`}>
           <line 
             x1={center} 
             y1={center} 
             x2={center} 
             y2={center - radius * 0.9} 
             stroke="red" 
             strokeWidth="2" 
             strokeLinecap="round"
           />
           <circle cx={center} cy={center} r={4} fill="red" />
        </g>
      </svg>
    </div>
  );
};
