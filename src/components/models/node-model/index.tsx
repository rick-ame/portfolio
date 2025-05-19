import { Environment, Float, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { FC } from 'react'

import Node from '@/generated/node'

const NodeModel: FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
      />
      <Environment preset="city" />

      <Float speed={6} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={5} rotation={[0, -Math.PI / 2, 0]}>
          <Node />
        </group>
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default NodeModel
