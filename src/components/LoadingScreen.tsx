import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';
import ProgressBar from './ProgressBar';

type Props = {
  onFinish?: () => void;
};

const LoadingScreen: React.FC<Props> = ({ onFinish }) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          // small delay to allow final animation
          setTimeout(() => onFinish && onFinish(), 600);
          return 100;
        }
        return p + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loading-screen">
      <div className="ripple-background">
        <div className="circle xxlarge shade1" />
        <div className="circle xlarge shade2" />
        <div className="circle large shade3" />
        <div className="circle medium shade4" />
        <div className="circle small shade5" />
      </div>

      <div className="progress-wrapper">
        <ProgressBar
          progress={progress}
          color="#42b883"
          height={10}
          borderRadius={5}
          transition="width 0.2s ease"
          backgroundColor="rgba(0,0,0,0.3)"
        />
        <div className="loading-text">{progress}%</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
