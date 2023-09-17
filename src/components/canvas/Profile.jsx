import React from "react";
import { perfil } from "../../assets";


export const Profile = ({isMobile})=>{
    let clases = isMobile ? "contProfileMobile" : "contProfile";

    return (
        <div className={`${clases}`} >

            <span><img src={perfil} alt="" /></span>

        </div>

    );
}