import { Html, useProgress } from "@react-three/drei";
import Msj from "./Msj";
import { styles } from "../styles";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width:"300px",
      }}
    > 
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>

      <p><Msj className={`${styles.heroSubText} mt-2 text-white-100`} mensajes = {["Estamos preparando la experiencia."]}></Msj></p>
    </Html>
  );
};

export default CanvasLoader;
