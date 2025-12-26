import { useState, useEffect, useCallback, useRef } from 'react';

export const useVIGI1GameLogic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [analogValue, setAnalogValue] = useState(36); // 1-36
  const [digitalValue, setDigitalValue] = useState(360);
  const [gameTime, setGameTime] = useState(0);
  
  // Stats
  const [totalEvents, setTotalEvents] = useState(0); // Total mismatches presented
  const [caughtEvents, setCaughtEvents] = useState(0); // Correct clicks on mismatch
  const [wrongMoves, setWrongMoves] = useState(0); // Clicks on match (false alarm) or missed mismatch?
  // Usually "False Alarm" is clicking when match. "Miss" is not clicking when mismatch.
  
  const timerRef = useRef<any>(null);
  const updateIntervalRef = useRef<any>(null);

  // Difficulty settings (could be passed in)
  const UPDATE_SPEED = 2000; // ms per update
  const MISMATCH_CHANCE = 0.3; // 30% chance of mismatch

  const generateNextState = useCallback(() => {
    // Move analog needle (e.g., clockwise by 1-3 steps or random)
    // Let's make it random but moving forward mostly to simulate "movement"
    setAnalogValue(prev => {
      let next = prev + 1;
      if (next > 36) next = 1;
      return next;
    });

    // Determine Digital Value
    // We need the *new* analog value. React state update is async, so we calculate locally.
    const getNextAnalog = (current: number) => {
       let next = current + 1;
       if (next > 36) next = 1;
       return next;
    };

    setAnalogValue(prev => {
        const nextAnalog = getNextAnalog(prev);
        
        const isMismatch = Math.random() < MISMATCH_CHANCE;
        let nextDigital = nextAnalog * 10;

        if (isMismatch) {
            // Generate a subtle mismatch
            // e.g. Analog 16 -> Ideal 160. Mismatch 150.
            // Or Analog 33 -> Ideal 330. Mismatch 320.
            const offset = Math.random() < 0.5 ? -10 : 10;
            nextDigital += offset;
            
            // Ensure digital is within reasonable bounds (0-360 approx)
            if (nextDigital < 0) nextDigital += 20;
            if (nextDigital > 370) nextDigital -= 20;
            
            // Also update stats that a mismatch event occurred?
            // Wait, how do we track "Missed" events?
            // If user didn't click on previous mismatch, it's a miss.
            // But we don't have "previous state was mismatch" easily accessible here without ref or tracking.
        }

        setDigitalValue(nextDigital);
        return nextAnalog;
    });

  }, []);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setGameTime(0);
    setTotalEvents(0);
    setCaughtEvents(0);
    setWrongMoves(0);
    setAnalogValue(36);
    setDigitalValue(360);

    // Game Loop
    updateIntervalRef.current = setInterval(generateNextState, UPDATE_SPEED);

    // Timer
    timerRef.current = setInterval(() => {
      setGameTime(prev => prev + 1);
    }, 1000);
  };

  const stopGame = () => {
    setIsPlaying(false);
    if (timerRef.current) clearInterval(timerRef.current);
    if (updateIntervalRef.current) clearInterval(updateIntervalRef.current);
  };

  const handleEyeClick = () => {
    if (!isPlaying) return;

    const expectedDigital = analogValue * 10;
    const isMismatch = digitalValue !== expectedDigital;

    if (isMismatch) {
      // Correct detection!
      setScore(prev => prev + 10);
      setCaughtEvents(prev => prev + 1);
      // Feedback?
    } else {
      // False alarm (It was a match, but user clicked)
      setScore(prev => Math.max(0, prev - 5));
      setWrongMoves(prev => prev + 1);
    }
    
    // Optional: Immediately trigger next state or wait? 
    // Usually vigilance tests just continue.
  };

  // Cleanup
  useEffect(() => {
    return () => {
      stopGame();
    };
  }, []);

  return {
    gameState: {
      isPlaying,
      score,
      gameTime,
      analogValue,
      digitalValue,
      totalEvents,
      caughtEvents,
      wrongMoves
    },
    actions: {
      startGame,
      stopGame,
      handleEyeClick
    }
  };
};
