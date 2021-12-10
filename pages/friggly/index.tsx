import { NextPage } from 'next';
import React from 'react';
import { PresentationControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Canvas } from '@react-three/fiber'
import Centralizer from '../../components/layout/Centralizer';
import Fullscreen from '../../components/layout/FullScreen';
import Straw from './components/straw';
import Logo from './components/logo';

const FrigglyPage: NextPage = () => {
  return (
    <Fullscreen>
      <Centralizer>
        <Canvas>
          <color attach="background" args={['yellow']} />
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[0, 100, 0]}
            intensity={2}
            castShadow
          />
          {/* <pointLight
            castShadow
            intensity={0.2}
            args={[0xff0000, 1, 100]}
            position={[1, 1, 1]}
          /> */}

          {/* <spotLight
            castShadow
            intensity={1}
            args={["white", 1, 100]}
            position={[-5, -2, 1]}
          /> */}
          <PresentationControls global zoom={0.9} rotation={[Math.PI / 2 - 0.2, Math.PI / 2, 0.1]} polar={[-2, 2]} azimuth={[-2, 2]}>
            <Logo />
          </PresentationControls>
          {/* <EffectComposer multisampling={8}>
            <Bloom intensity={0.4} luminanceThreshold={0.8} luminanceSmoothing={0.01} kernelSize={5} />
          </EffectComposer> */}
        </Canvas>
      </Centralizer>
    </Fullscreen>
  )
}

export default FrigglyPage;