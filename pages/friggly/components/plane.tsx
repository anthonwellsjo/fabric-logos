import React from 'react';

const Plane: React.FC = () => {
  return (
    <mesh receiveShadow castShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.7, 0]}  >
      <boxGeometry args={[5, 5, 1]} />
      <meshPhysicalMaterial color="grey" />
    </mesh>
  )
}

export default Plane;