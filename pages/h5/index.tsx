import { NextPage } from 'next';
import React from 'react';
import { ContactShadows, PresentationControls, Plane, CameraShake } from '@react-three/drei';
import { EffectComposer, Bloom, SSAO } from '@react-three/postprocessing';
import { Canvas } from '@react-three/fiber'
import Centralizer from '../../components/layout/Centralizer';
import Fullscreen from '../../components/layout/FullScreen';
import Straw from './components/H';
import Logo from './components/logo';

const config = {
  maxYaw: 0.01, // Max amount camera can yaw in either direction
  maxPitch: 0.01, // Max amount camera can pitch in either direction
  maxRoll: 0.01, // Max amount camera can roll in either direction
  yawFrequency: 0, // Frequency of the the yaw rotation
  pitchFrequency: 0.6, // Frequency of the pitch rotation
  rollFrequency: 0.6, // Frequency of the roll rotation
  intensity: 0.6, // initial intensity of the shake
  decay: false, // should the intensity decay over time
  decayRate: 0.65, // if decay = true this is the rate at which intensity will reduce at
  additive: false, // this should be used when your scene has orbit controls
}

const FrigglyPage: NextPage = () => {
  return (
    <Fullscreen>
      <Centralizer>
        <Canvas>
          <CameraShake {...config} />
          <color attach="background" args={['#F7A9A8']} />
          <ambientLight intensity={0.001} />
          <directionalLight
            position={[0, 10, 10]}
            intensity={2.5}
            castShadow
          />
          <PresentationControls global zoom={1.1} rotation={[Math.PI / 3, Math.PI / 2, .2]} polar={[-0.1, 0.1]} azimuth={[0, 0.1]}>
            <group position={[-0.2, 1.9, -1.2]} dispose={null}>
              <Logo />
              {/* <Plane /> */}
            </group>
          </PresentationControls>
          <EffectComposer multisampling={8}>
            <SSAO samples={11} radius={30} intensity={20} luminanceInfluence={0.6} color="red" />
            <SSAO samples={21} radius={7} intensity={20} luminanceInfluence={0.6} color="red" />
            <Bloom intensity={0.1} luminanceThreshold={0.8} luminanceSmoothing={0.01} kernelSize={5} />
          </EffectComposer>
        </Canvas>
      </Centralizer>
    </Fullscreen>
  )
}

export default FrigglyPage;