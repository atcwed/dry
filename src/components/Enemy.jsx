import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Enemy({ position=[0,1,0] }){
  const ref = useRef()
  useFrame((state) => {
    if(!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.position.x = position[0] + Math.sin(t)*1.5
    ref.current.position.z = position[2] + Math.cos(t)*1.5
  })
  return (
    <mesh ref={ref} position={position} castShadow>
      <coneGeometry args={[0.9,2,32]} />
      <meshStandardMaterial color={'#ff4d4f'} />
    </mesh>
  )
}
