import { useState, useEffect } from "react";

const Msj = ({mensajes})=>{
    const [mensaje , setMensaje] = useState(mensajes[mensajes.length-1]);
    const [index , setIndex] = useState(0);

    const changeMsj = ()=>{
        setMensaje(mensajes[index]);
    };
  
    useEffect(()=>{
      const interval= setInterval(() => {
        if(index<mensajes.length){
          changeMsj();
          setIndex(index+1);
        }
      }, 3000);
      return ()=>{
        clearInterval(interval);
      }
    },[index]);

    return (
         <div>{mensaje}</div>
    );
}

export default Msj;