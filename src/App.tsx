import { useState } from 'react'
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <>
      <Canvas>
        <mesh>
          <torusGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </>
  )
}

export default App
