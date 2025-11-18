import { Canvas } from '@react-three/fiber';
import Shapes from './Shapes';

const Scene = ({ shouldAnimate }) => {
  return (
    <Canvas shadows>
      <Shapes shouldAnimate={shouldAnimate} />
    </Canvas>
  );
};

export default Scene; 