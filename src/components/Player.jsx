import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Player({ position=[0,1,0] }){
  const ref = useRef()
  useFrame((state) => {
    if(!ref.current) return
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2
  })
  return (
    <mesh ref={ref} position={position} castShadow>
      <sphereGeometry args={[0.9,32,32]} />
      <meshStandardMaterial color={'#00aaff'} />
    </mesh>
  )
}
