import React, { createRef, useEffect, useMemo, useRef, useState } from 'react';
import { a, useSpring } from '@react-spring/three'
import { randomNumber } from '../../../utils/randomnumber';

interface props {
  mouseXY: [number | undefined, number | undefined],
  position: [number, number, number]
}

const Straw: React.FC<props> = ({ mouseXY, position }) => {
  const [isBeingMoved, _setIsBeingMoved] = useState(false);
  const isBeingMovedRef = useRef(isBeingMoved);
  const setIsBeingMoved = (answ: boolean) => {
    _setIsBeingMoved(answ);
    isBeingMovedRef.current = answ;
  }

  const [tilt, setTilt] = useState<[number, number]>([0, 0]);
  const [positionOnScreen, setPositionOnScreen] = useState<[number, number] | undefined>(undefined);
  const meshRef = createRef<CanvasRef.Mesh>();
  const randomRotation: [number, number, number] = useMemo(() => {
    return [randomNumber(40), randomNumber(40), randomNumber(40)]
  }, [])

  const spring = useSpring({
    rotation: [randomRotation[0], randomRotation[1], randomRotation[2] - tilt[0]],
    position: [position[0] + tilt[0] / 5, position[1], position[2]],
    config: {
      mass: 1,
      friction: 5,
      tension: 100
    }
  })

  useEffect(() => {
    if (isBeingMovedRef.current && positionOnScreen != null) {
      let movements: [number, number] = [0, 0];
      if (mouseXY[0] != null) {
        movements[0] = (mouseXY[0] - positionOnScreen[0]) / 5
      }
      // if (mouseXY[1] != null) {
      //   movements[1] = mouseXY[1] - positionOnScreen[1]
      // }
      if (Math.abs(movements.reduce((a, b) => a + b)) > 1) {
        setIsBeingMoved(false);
        setTilt([0, 0]);
      } else {
        setTilt(movements);
      }
    }
  }, [mouseXY, isBeingMovedRef, positionOnScreen]);

  const onPointerOverEventHandler = (e: any) => {
    setIsBeingMoved(true);
    setPositionOnScreen([e.clientX, e.clientY]);
  }



  return (
    <a.mesh onPointerOver={onPointerOverEventHandler} position={spring.position} receiveShadow castShadow ref={meshRef} rotation={spring.rotation}>
      <boxGeometry args={[.05, .5, .5]} />
      {/* <sphereGeometry args={[75, 16, 8, 0, 2, 1, 1.2]} /> */}
      <meshPhysicalMaterial color={"#FFAA5A"} />
    </a.mesh>
  )
}

export default Straw;