import { NextPage } from 'next';
import React from 'react';
import { PresentationControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Canvas } from '@react-three/fiber'
import Centralizer from '../../components/layout/Centralizer';
import Fullscreen from '../../components/layout/FullScreen';
import Straw from './components/straw';

const FrigglyPage: NextPage = () => {
  return (
    <Fullscreen>
      <Centralizer>
        <Canvas>
          <color attach="background" args={['white']} />
          <ambientLight intensity={0.1} />
          <PresentationControls global zoom={0.9} rotation={[0, 0, 0]} polar={[0, 0]} azimuth={[0, 0]}>
            <directionalLight color="white" position={[0, 0, 5]} />
            <group position-y={-0.15} dispose={null}>
              <Straw />
            </group>
          </PresentationControls>
          <EffectComposer multisampling={8}>
            <Bloom intensity={0.4} luminanceThreshold={0.8} luminanceSmoothing={0.01} kernelSize={5} />
          </EffectComposer>
        </Canvas>
      </Centralizer>
    </Fullscreen>
  )
}

export default FrigglyPage;