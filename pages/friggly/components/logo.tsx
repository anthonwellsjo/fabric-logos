import React, { MouseEventHandler, useEffect, useMemo, useRef, useState } from 'react';
import Plane from './plane';
import Straw from './straw';


const getPositions: (limitPosXY: [[number, number], [number, number]]) => [number, number, number][] = (limitPosXY) => {
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

  const positionF11 = useMemo(() => {
    const positions = getPositions([[-0.9, -0.2], [0.8, 0.2]]);
    return positions;
  }, []);
  const positionF12 = useMemo(() => {
    const positions = getPositions([[-0.9, 0.39], [-0.6, 0.5]]);
    return positions;
  }, []);
  const positionF13 = useMemo(() => {
    const positions = getPositions([[-0.4, 0.32], [-0.2, 0.5]]);
    return positions;
  }, []);


  const positionF21 = useMemo(() => {
    const positions = getPositions([[-0.9, 1.1], [0.8, 1.3]]);
    return positions;
  }, []);
  const positionF22 = useMemo(() => {
    const positions = getPositions([[0.5, 0.51], [0.8, 0.6]]);
    return positions;
  }, []);
  const positionF23 = useMemo(() => {
    const positions = getPositions([[0.1, 0.58], [0.4, 0.7]]);
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
    <>
      {positionF11.map(p => <Straw key={p[0] + p[1] + p[2]} position={p} mouseXY={[mouseEventRef?.current?.clientX, mouseEventRef?.current?.clientY]} />)}
      {positionF12.map(p => <Straw width={0.65} key={p[0] + p[1] + p[2]} position={p} mouseXY={[mouseEventRef?.current?.clientX, mouseEventRef?.current?.clientY]} />)}
      {positionF13.map(p => <Straw key={p[0] + p[1] + p[2]} position={p} mouseXY={[mouseEventRef?.current?.clientX, mouseEventRef?.current?.clientY]} />)}
      {positionF21.map(p => <Straw key={p[0] + p[1] + p[2]} position={p} mouseXY={[mouseEventRef?.current?.clientX, mouseEventRef?.current?.clientY]} />)}
      {positionF22.map(p => <Straw width={0.65} key={p[0] + p[1] + p[2]} position={p} mouseXY={[mouseEventRef?.current?.clientX, mouseEventRef?.current?.clientY]} />)}
      {positionF23.map(p => <Straw key={p[0] + p[1] + p[2]} position={p} mouseXY={[mouseEventRef?.current?.clientX, mouseEventRef?.current?.clientY]} />)}
    </>
  )
}

export default Logo;

