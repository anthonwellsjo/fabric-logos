import React from 'react';

const Fullscreen: React.FC = ({ children }) => {
  return (
    <div style={{ position: "absolute", left: 0, top: 0, right: 0, bottom: 0 }}>
      {children}
    </div>
  )
}

export default Fullscreen;