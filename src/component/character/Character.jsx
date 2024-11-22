
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Monkey(props) {
  const { nodes, materials } = useGLTF('/monkey.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-14.628, 183.156, 200.225]} rotation={[-Math.PI / 2, 0, 0]} scale={6.473}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.monkey001_Material005_0.geometry}
            material={materials['Material.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.monkey001_Material004_0.geometry}
            material={materials['Material.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.monkey001_brown_0.geometry}
            material={materials.brown}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.monkey001_Material007_0.geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.monkey001_Material008_0.geometry}
            material={materials['Material.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.monkey001_Material009_0.geometry}
            material={materials['Material.009']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.monkey001_Material010_0.geometry}
            material={materials['Material.010']}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/monkey.glb')

export default Monkey;