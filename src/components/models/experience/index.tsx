import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { FC, Suspense } from 'react'
import { useMediaQuery } from 'react-responsive'

import { Room } from '@/generated/room'

import { Lights } from './lights'
import { Particles } from './particles'

export const Experience: FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={20}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Suspense fallback={null}>
        <Lights />
        <Particles count={100} />
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  )
}
