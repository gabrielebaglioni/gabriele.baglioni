import { Canvas } from '@react-three/fiber';
import Shapes from './Shapes';

const Scene = () => {
  return (
    <Canvas shadows>
      <Shapes />
    </Canvas>
  );
};

export default Scene; 