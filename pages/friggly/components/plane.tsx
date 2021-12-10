import React from 'react';

const Plane: React.FC = () => {
  return (
    <mesh receiveShadow castShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -5.2, 0]}  >
      <boxGeometry args={[1000, 1000, 10]} />
      <meshPhysicalMaterial color="lightyellow" />
    </mesh>
  )
}

export default Plane;