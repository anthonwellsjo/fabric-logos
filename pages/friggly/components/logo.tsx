import React, { MouseEventHandler, useEffect, useMemo, useRef, useState } from 'react';
import Plane from './plane';
import Straw from './straw';

const limitPosXY = [[-0.2, -0.2], [0.8, 0.2]]

const getPositions = () => {
  let positions: [number, number, number][] = [[0, 0, 0]];
  let X = 0;
  let Y = 0;

  for (let posY = limitPosXY[0][1]; posY < limitPosXY[1][1]; posY += 0.53) {

    for (let posX = limitPosXY[0][0]; posX < limitPosXY[1][0]; posX += 0.1) {
      positions[X] = [0, 0, 0];
      positions[X][0] = posX;
      positions[X][2] = posY;
      X++;
    }
  }




  return positions;
}




const Logo: React.FC = () => {
  const [mouseEvent, _setMouseEvent] = useState<MouseEvent | undefined>(undefined);
  const mouseEventRef = useRef(mouseEvent);

  const positions = useMemo(() => {
    const positions = getPositions();
    console.log(positions);
    return positions;
  }, []);


  const setMouseEvent = (ev: MouseEvent) => {
    mouseEventRef.current = ev;
    _setMouseEvent(ev);
  }

  const onMouseMove: (this: Window, ev: MouseEvent) => any = (ev) => {
    setMouseEvent(ev);
  }


  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove)

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    }
  }, [])


  return (
    <group position-y={-0.15} dispose={null}>
      {positions.map(p => <Straw key={p[0] + p[1] + p[2]} position={p} mouseXY={[mouseEventRef?.current?.clientX, mouseEventRef?.current?.clientY]} />)}

      <Plane />
    </group>
  )
}

export default Logo;

