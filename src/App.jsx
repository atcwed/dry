import React from 'react'
import { Canvas } from '@react-three/fiber'
import GameScene from './GameScene'
import HUD from './components/HUD'

export default function App(){
  return (
    <div className='app-root'>
      <Canvas shadows camera={{ position: [0,6,12], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <GameScene />
      </Canvas>
      <HUD />
    </div>
  )
}
