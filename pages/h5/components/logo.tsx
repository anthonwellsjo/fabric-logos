import React, { MouseEventHandler, useEffect, useMemo, useRef, useState } from 'react';
import { randomNumber } from '../../../utils/randomnumber';
import Plane from './plane';
import H from './H';
import Five from './Five';


const getPositions: (limitPosXY: [[number, number], [number, number]]) => [number, number, number][] = (limitPosXY) => {
  let positions: [number, number, number][] = [[0, 0, 0]];
  let X = 0;
  let Y = 0;

  for (let posY = limitPosXY[0][1]; posY < limitPosXY[1][1]; posY += 0.1 + randomNumber(150)) {

    for (let posX = limitPosXY[0][0]; posX < limitPosXY[1][0]; posX += 0.1 + randomNumber(150)) {
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

  const positionH11 = useMemo(() => {
    const positions = getPositions([[-0.9, 0], [0.8, 0.25]]);
    return positions;
  }, []);
  const positionH12 = useMemo(() => {
    const positions = getPositions([[-0.2, 0.3], [0.05, 0.8]]);
    return positions;
  }, []);
  const positionH21 = useMemo(() => {
    const positions = getPositions([[-0.9, 0.8], [0.8, 1.05]]);
    return positions;
  }, []);

  const positionFive11 = useMemo(() => {
    const positions = getPositions([[-0.25, 1.4], [0.8, 1.65]]);
    return positions;
  }, []);
  const positionFive12 = useMemo(() => {
    const positions = getPositions([[0.55, 1.7], [0.8, 2.30]]);
    return positions;
  }, []);
  const positionFive13 = useMemo(() => {
    const positions = getPositions([[-0.25, 1.7], [0, 2.35]]);
    return positions;
  }, []);
  const positionFive14 = useMemo(() => {
    const positions = getPositions([[-.85, 2.1], [-.25, 2.35]]);
    return positions;
  }, []);
  const positionFive15 = useMemo(() => {
    const positions = getPositions([[-.85, 1.4], [-.6, 2.1]]);
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

      {positionH11.map(p => <H width={0.05} key={p[0] + p[1] + p[2]} position={p} mouseXY={[mouseEventRef?.current?.clientX, mouseEventRef?.current?.clientY]} />)}
      {positionH12.map(p => <H width={0.05} key={p[0] + p[1] + p[2]} position={p} mouseXY={[mouseEventRef?.current?.clientX, mouseEventRef?.current?.clientY]} />)}
      {positionH21.map(p => <H width={0.05} key={p[0] + p[1] + p[2]} position={p} mouseXY={[mouseEventRef?.current?.clientX, mouseEventRef?.current?.clientY]} />)}


      {positionFive11.map(p => <Five width={0.05} key={p[0] + p[1] + p[2]} position={p} mouseXY={[mouseEventRef?.current?.clientX, mouseEventRef?.current?.clientY]} />)}
      {positionFive12.map(p => <Five width={0.05} key={p[0] + p[1] + p[2]} position={p} mouseXY={[mouseEventRef?.current?.clientX, mouseEventRef?.current?.clientY]} />)}
      {positionFive13.map(p => <Five width={0.05} key={p[0] + p[1] + p[2]} position={p} mouseXY={[mouseEventRef?.current?.clientX, mouseEventRef?.current?.clientY]} />)}
      {positionFive14.map(p => <Five width={0.05} key={p[0] + p[1] + p[2]} position={p} mouseXY={[mouseEventRef?.current?.clientX, mouseEventRef?.current?.clientY]} />)}
      {positionFive15.map(p => <Five width={0.05} key={p[0] + p[1] + p[2]} position={p} mouseXY={[mouseEventRef?.current?.clientX, mouseEventRef?.current?.clientY]} />)}
    </>
  )
}

export default Logo;

