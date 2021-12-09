import React from 'react';

const Centralizer: React.FC = ({ children }) => {
  return (
    <div style={{width:"100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {children}
    </div>
  )
}

export default Centralizer;