import React from 'react'
export default function Ground(){
  return (
    <mesh rotation={[-Math.PI/2,0,0]} receiveShadow>
      <planeGeometry args={[80,80]} />
      <meshStandardMaterial color={'#1f2937'} />
    </mesh>
  )
}
