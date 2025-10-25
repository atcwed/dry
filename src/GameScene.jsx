import React from 'react'
import Player from './components/Player'
import Ground from './components/Ground'
import Enemy from './components/Enemy'

export default function GameScene(){
  return (
    <group>
      <Player position={[0,1,0]} />
      <Ground />
      <Enemy position={[4,1,-3]} />
    </group>
  )
}
