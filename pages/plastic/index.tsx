import { Canvas } from '@react-three/fiber';
import { NextPage } from 'next';
import { Physics } from '@react-three/cannon'
import React from 'react';
import Centralizer from '../../components/layout/Centralizer';
import Fullscreen from '../../components/layout/FullScreen';

const Plastic: NextPage = () => {
  return (
    <Fullscreen>
      <Centralizer>
        <Canvas>
          <Physics gravity={[0, -50, 0]} defaultContactMaterial={{ restitution: 0.5 }}>
            <group position={[0, 0, -10]}>
            </group>
          </Physics>
        </Canvas>
      </Centralizer>
    </Fullscreen>

  )
}

export default Plastic;