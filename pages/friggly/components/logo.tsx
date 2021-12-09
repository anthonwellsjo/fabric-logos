import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import Straw from './straw';

const Logo: React.FC = () => {
  const [mouseEvent, _setMouseEvent] = useState<MouseEvent | undefined>(undefined);
  const mouseEventRef = useRef(mouseEvent);
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
      <Straw XY={[mouseEventRef?.current?.clientX, mouseEventRef?.current?.clientY]} />
    </group>
  )
}

export default Logo;