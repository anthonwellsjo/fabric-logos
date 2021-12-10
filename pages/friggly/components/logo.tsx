import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import Plane from './plane';
import Straw from './straw';

const positions: [number, number, number][] =
  [
    [0, 0, 0],
    [.1, 0, 0],
    [.2, 0, 0],
    [.3, 0, 0],
    [.4, 0, 0],
    [.5, 0, 0],
    [.6, 0, 0],
    [.7, 0, 0],
    [.8, 0, 0],
    [.9, 0, 0],
    [1, 0, 0],

    [.10, 0, 0],
    [1.1, 0, 0],
    [1.2, 0, 0],
    [1.3, 0, 0],
    [1.4, 0, 0],
    [1.5, 0, 0],
    [1.6, 0, 0],
    [1.7, 0, 0],
    [1.8, 0, 0],
    [1.9, 0, 0],
    [2.0, 0, 0],

    [0.0, 0, .53],
    [0.1, 0, .53],
    [0.2, 0, .53],
    [0.3, 0, .53],
    [0.4, 0, .53],
    [0.5, 0, .53],
    [0.6, 0, .53],
    [0.7, 0, .53],
    [0.8, 0, .53],
    [0.9, 0, .53],
    [0.0, 0, .53],

    [1.0, 0, .53],
    [1.1, 0, .53],
    [1.2, 0, .53],
    [1.3, 0, .53],
    [1.4, 0, .53],
    [1.5, 0, .53],
    [1.6, 0, .53],
    [1.7, 0, .53],
    [1.8, 0, .53],
    [1.9, 0, .53],
    [2.0, 0, .53]
  ]

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
      {positions.map(p => <Straw key={p[0] + p[1] + p[2]} position={p} mouseXY={[mouseEventRef?.current?.clientX, mouseEventRef?.current?.clientY]} />)}

      <Plane />
    </group>
  )
}

export default Logo;