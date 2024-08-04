import { test, expect } from 'vitest'
import ReactThreeTestRenderer from '@react-three/test-renderer'
import { Torus } from './App'

test('mesh has two children', async () => {
  const renderer = await ReactThreeTestRenderer.create(<Torus />)
  const mesh = renderer.scene.children[0]
  expect(mesh.allChildren.length).toBe(2)
})
