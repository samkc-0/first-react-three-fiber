import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <>
      <Canvas>
        <Torus />
      </Canvas>
    </>
  )
}

export function Torus(): JSX.Element {
  return (
    <mesh>
      <torusGeometry />
      <meshNormalMaterial />
    </mesh>
  )
}
export default App
