import React from 'react';

interface ProgressBarProps {
  progress: number; // 0-100 の値
  color?: string; // プログレスバーの色
  height?: number; // バーの高さ（デフォルト: 10px）
  backgroundColor?: string; // 背景色
  borderRadius?: number; // 角丸（デフォルト: 5px）
  transition?: string; // トランジション設定
  className?: string; // 追加のクラス名
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = '#42b883',
  height = 10,
  backgroundColor = 'rgba(0,0,0,0.2)',
  borderRadius = 5,
  transition = 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
  className = ''
}) => {
  return (
    <div 
      className={`progress-bar-container ${className}`}
      style={{
        width: '100%',
        height: height,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div 
        className="progress-bar-fill"
        style={{
          width: `${Math.min(100, Math.max(0, progress))}%`,
          height: '100%',
          backgroundColor: color,
          borderRadius: borderRadius,
          transition: transition,
          position: 'absolute',
          left: 0,
          top: 0
        }}
      />
    </div>
  );
};

export default ProgressBar;
