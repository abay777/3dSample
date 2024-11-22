

import  { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'


export function Character(props) {
    const group = useRef()
    
    const { nodes, materials, animations } = useGLTF('/shrek_dancing.glb')
    const { actions,names } = useAnimations(animations, group);
   
    useEffect(()=>{
        actions[names[0]].reset().fadeIn(0.5).play()
        group.current.scale.set(0.10, 0.10, 0.10); 
      
    })
    
    return (
        <>
      
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_model" rotation={[-Math.PI / 10, 0, 0]} scale={.002}>
                <group name="2e5c813f62da4f2e8b747798b4979df6fbx" rotation={[Math.PI / 5,0 , 0]}>
                <group name="Object_2">
                    <group name="RootNode">
                    <group name="Object_4">
                        <primitive object={nodes._rootJoint} />
                        <skinnedMesh
                        name="Object_7"
                        geometry={nodes.Object_7.geometry}
                        material={materials.shrekshirt_S}
                        skeleton={nodes.Object_7.skeleton}
                        />
                        <skinnedMesh
                        name="Object_9"
                        geometry={nodes.Object_9.geometry}
                        material={materials.Shrek}
                        skeleton={nodes.Object_9.skeleton}
                        />
                        <group
                        name="Object_6"
                        position={[-1.978, 4432.729, -191.373]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={.5}
                        />
                        <group
                        name="Object_8"
                        position={[0, 3879.331, 28.389]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={.5}
                        />
                        <group
                        name="Ecelon_Ecelon_shrekshirt_S"
                        position={[-1.978, 4432.729, -191.373]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={.5}
                        />
                        <group
                        name="Ecelon_Ecelon_Shrek"
                        position={[0, 3879.331, 28.389]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={.5}
                        />
                    </group>
                    </group>
                </group>
                </group>
            </group>
        </group>
        </>
      
    )
  }

useGLTF.preload('/shrek_dancing.glb')

export default Character;
