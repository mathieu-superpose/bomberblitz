import { useGLTF } from "@react-three/drei";

const MODEL = "/3d/bomb.glb";

export default function Bomb() {
  const { nodes } = useGLTF(MODEL);

  return (
    <group dispose={null}>
      <group name="blockbench_export">
        <group scale={2}>
          <group name="Bomb" position={[0, 0.156, 0]}>
            <mesh
              name="sphere"
              castShadow
              receiveShadow
              geometry={nodes.sphere.geometry}
              material={nodes.sphere.material}
            />
            <group name="Top" position={[0, 0.156, 0]}>
              <mesh
                name="Thing"
                castShadow
                receiveShadow
                geometry={nodes.Thing.geometry}
                material={nodes.Thing.material}
              />
              <mesh
                name="cylinder"
                castShadow
                receiveShadow
                geometry={nodes.cylinder.geometry}
                material={nodes.cylinder.material}
                rotation={[0, 0, Math.PI / 8]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(MODEL);