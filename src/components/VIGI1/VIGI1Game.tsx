import React, { useState } from 'react';
import { Eye, Music } from 'lucide-react';
import { AnalogGauge } from './AnalogGauge';
import { DigitalDisplay } from './DigitalDisplay';
import { useVIGI1GameLogic } from './useVIGI1GameLogic';
import { GameStartMenu } from '../GameStartMenu';
import { GameTutorial } from '../GameTutorial';

interface VIGI1GameProps {
  onExit: () => void;
}

const VIGI1Game: React.FC<VIGI1GameProps> = ({ onExit }) => {
  const { gameState, actions } = useVIGI1GameLogic();
  const { isPlaying, score, gameTime, analogValue, digitalValue } = gameState;
  const { startGame, handleEyeClick } = actions;
  
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative w-full h-screen bg-gray-200 flex flex-col items-center justify-center font-sans select-none">
      
      {/* Top Bar / HUD */}
      <div className="absolute top-4 w-full flex justify-between px-8 text-gray-800">
         <div className="flex gap-4">
             <div className="bg-white px-4 py-2 rounded shadow">
                 <span className="font-bold">SCORE:</span> {score}
             </div>
             <div className="bg-white px-4 py-2 rounded shadow">
                 <span className="font-bold">TIME:</span> {formatTime(gameTime)}
             </div>
         </div>
         <div>
             <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600">
                 EXIT
             </button>
         </div>
      </div>

      {/* Main Game Area */}
      <div className="relative">
         <AnalogGauge value={analogValue} size={400} />
         <DigitalDisplay value={digitalValue} />
      </div>

      {/* Controls */}
      <div className="flex gap-16 mt-12">
        {/* Note Button (Placeholder for now) */}
        <button 
          className="w-24 h-24 bg-white rounded-xl shadow-lg border-2 border-gray-300 flex items-center justify-center active:scale-95 transition-transform"
          onClick={() => {}} // No action yet
        >
          <Music size={48} className="text-blue-500" />
        </button>

        {/* Eye Button */}
        <button 
          className="w-24 h-24 bg-white rounded-xl shadow-lg border-2 border-gray-300 flex items-center justify-center active:scale-95 transition-transform hover:bg-gray-50"
          onClick={handleEyeClick}
        >
          <Eye size={48} className="text-orange-500" />
        </button>
      </div>

      {/* Tutorial Overlay */}
      <GameTutorial
        isOpen={isTutorialOpen}
        onClose={() => setIsTutorialOpen(false)}
        title="VIGI 1 (Audio-Visual Vigilance)"
        description="Monitor the gauge and digital display for discrepancies."
        rules={[
          "The analog needle moves around the gauge (1-36).",
          "The digital display shows a number in the center.",
          "Ideally, Digital Value = Analog Value × 10 (e.g., 3 -> 030).",
          "If the values DO NOT match (e.g., Needle at 33, Display 320), press the EYE button.",
          "If they match (e.g., Needle at 33, Display 330), DO NOT press the button.",
          "Be quick and accurate!"
        ]}
        controls={[
          { key: "EYE Button", action: "Report Visual Mismatch", icon: <Eye /> },
          { key: "NOTE Button", action: "Coming Soon", icon: <Music /> }
        ]}
      />

      {/* Start Menu Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
            <GameStartMenu 
                title="VIGI 1"
                startLabel={gameTime > 0 ? "PLAY AGAIN" : "START GAME"}
                onStart={startGame}
                onSettings={() => {}}
                onBack={onExit}
                highScore={0} // TODO: Persist high score
                onTutorial={() => setIsTutorialOpen(true)}
            />
        </div>
      )}

    </div>
  );
};

export default VIGI1Game;
