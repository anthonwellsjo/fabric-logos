import React, { createRef, useEffect, useMemo, useRef, useState } from 'react';
import { a, useSpring } from '@react-spring/three'
import { randomNumber } from '../../../utils/randomnumber';

interface props {
  mouseXY: [number | undefined, number | undefined],
  position: [number, number, number],
  rotation?: [number, number, number],
  width?: number
}

const unevenness = 80;

const Five: React.FC<props> = ({ mouseXY, position, rotation = [0, 0, 0], width = 0.5 }) => {
  const [isBeingMoved, _setIsBeingMoved] = useState(false);
  const isBeingMovedRef = useRef(isBeingMoved);
  const setIsBeingMoved = (answ: boolean) => {
    _setIsBeingMoved(answ);
    isBeingMovedRef.current = answ;
  }

  const [tilt, _setTilt] = useState<[number, number]>([0, 0]);
  const tiltRef = useRef(tilt);
  const setTilt = (movements: [number, number]) => {
    _setTilt(movements);
    tiltRef.current = movements;
  }
  const [positionOnScreen, setPositionOnScreen] = useState<[number, number] | undefined>(undefined);
  const meshRef = createRef<CanvasRef.Mesh>();
  const randomRotation: [number, number, number] = useMemo(() => {
    return [randomNumber(unevenness), randomNumber(unevenness), randomNumber(unevenness)]
  }, [])

  const randomSize = useMemo(() => randomNumber(100), [])

  const spring = useSpring({
    rotation: [rotation[0] + randomRotation[0], rotation[1] + randomRotation[1], rotation[2] + randomRotation[2]],
    position: [position[0] + tiltRef.current[0] / 5, position[1], position[2] + tiltRef.current[1] / 5],
    config: {
      mass: 10,
      friction: 90,
      tension: 300
    },
    onStart: () => setTimeout(() => setTilt([0, 0]), 1000)
  })

  useEffect(() => {
    if (tilt)

      if (isBeingMovedRef.current && positionOnScreen != null) {
        let movements: [number, number] = [0, 0];

        if (mouseXY[0] != null) {
          const movementX = (mouseXY[0] - positionOnScreen[0]) / 5;
          if (Math.abs(movementX) > 2) {
            setIsBeingMoved(false);
            setTilt([0, tiltRef.current[1]]);
          } else {
            movements[0] = movementX
          }
        }

        if (mouseXY[1] != null) {
          const movementY = (mouseXY[1] - positionOnScreen[1]) / 5;
          if (Math.abs(movementY) > 2) {
            setIsBeingMoved(false);
            setTilt([tiltRef.current[0], 0]);
          } else {
            movements[1] = movementY
          }
        }


        setTilt(movements);
      }
  }, [mouseXY, isBeingMovedRef, positionOnScreen]);

  const onPointerOverEventHandler = (e: any) => {
    setIsBeingMoved(true);
    setPositionOnScreen([e.clientX, e.clientY]);
  }



  return (
    <a.mesh onPointerOver={onPointerOverEventHandler} position={spring.position} receiveShadow castShadow ref={meshRef} rotation={spring.rotation}>
      <sphereGeometry args={[0.08 + randomSize, 10, 10]} />
      {/* <sphereGeometry args={[75, 16, 8, 0, 2, 1, 1.2]} /> */}
      <meshPhongMaterial fog roughness={0} metalness={0.5} reflectivity={0.5} color={"#FFD6E0"} />
    </a.mesh>
  )
}

export default Five;