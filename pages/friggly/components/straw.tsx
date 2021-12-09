import React, { createRef, useEffect, useState } from 'react';
import { a, useSpring } from '@react-spring/three'

interface props {
  XY: [number | undefined, number | undefined]
}

const Straw: React.FC<props> = ({ XY }) => {
  const [isBeingMoved, setIsBeingMoved] = useState(false);
  const [tilt, setTilt] = useState<[number, number]>([0, 0]);
  const [positionOnScreen, setPositionOnScreen] = useState<[number, number] | undefined>(undefined);
  const meshRef = createRef<CanvasRef.Mesh>();

  const spring = useSpring({
    rotation: [0, tilt[0], tilt[1]],
    position: [tilt[0] / 5, 0, 0],
    config: {
      mass: 10
    }
  })

  useEffect(() => {
    if (isBeingMoved && positionOnScreen != null) {
      let movements: [number, number] = [0, 0];
      if (XY[0] != null) {
        movements[0] = (XY[0] - positionOnScreen[0]) / 5
      }
      // if (XY[1] != null) {
      //   movements[1] = XY[1] - positionOnScreen[1]
      // }
      if (Math.abs(movements.reduce((a, b) => a + b)) > 2) {
        setIsBeingMoved(false);
        setTilt([0, 0]);
      } else {
        setTilt(movements);
      }
    }
  }, [XY, isBeingMoved, positionOnScreen]);

  const onPointerOverEventHandler = (e: any) => {
    setIsBeingMoved(true);
    setPositionOnScreen([e.clientX, e.clientY]);
  }



  return (
    <a.mesh onPointerOver={onPointerOverEventHandler} position={spring.position} castshadow ref={meshRef} rotation={spring.rotation}>
      <boxGeometry args={[.05, .5, .5]} />
      {/* <sphereGeometry args={[75, 16, 8, 0, 2, 1, 1.2]} /> */}
      <meshPhysicalMaterial color={"grey"} />
    </a.mesh>
  )
}

export default Straw;