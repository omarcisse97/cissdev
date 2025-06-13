import React from 'react';

const AnimatedHeroBackground = () => {
  return (
    <div className="hero-background">
      {/* Animated gradient background */}
      <div className="gradient-bg"></div>
      
      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Code-themed floating elements */}
      <div className="code-elements">
        <div className="code-bracket bracket-1">&lt;/&gt;</div>
        <div className="code-bracket bracket-2">{ }</div>
        <div className="code-bracket bracket-3">[ ]</div>
        <div className="binary-code binary-1">01010101</div>
        <div className="binary-code binary-2">11001010</div>
        <div className="binary-code binary-3">10110011</div>
      </div>
      
      {/* Geometric shapes */}
      <div className="geometric-shapes">
        <div className="shape triangle"></div>
        <div className="shape circle"></div>
        <div className="shape square"></div>
      </div>
    </div>
  );
};

export default AnimatedHeroBackground;