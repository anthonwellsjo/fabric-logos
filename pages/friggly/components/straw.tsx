import React, { createRef } from 'react';

const Straw: React.FC = () => {
  const ref = createRef();


  return (
    <mesh id={ref} rotation={[0, 0.2, 0]}>
      <boxGeometry args={[.03, .5, .5]} />
      {/* <sphereGeometry args={[75, 16, 8, 0, 2, 1, 1.2]} /> */}
      <meshPhysicalMaterial color={"grey"} />
    </mesh>
  )
}

export default Straw;