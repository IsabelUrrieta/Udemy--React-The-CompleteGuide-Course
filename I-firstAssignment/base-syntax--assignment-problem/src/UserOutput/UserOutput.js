import React from "react";
import "./UserOutput.css";

const UserOtput = (props) => {
  return (
    <div>
      <p className="cita">
        «He vivido en tantos sitios que es de risa... y como me he movido tanto,
        el apego a un lugar es muy, muy importante para mí. Siempre estoy
        buscando... buscando sentirme en casa.»{" "}
        <span className="autor">{props.userName}</span>
      </p>
      <p className="cita">
        «Cuando fallecen tus padres has de afrontar tu propio final. —Ah,
        entiendo lo que quieres decir… Entonces ya no queda nadie para
        protegerte de la muerte».{" "}
        <span className="autor">{props.userName}</span>
      </p>
    </div>
  );
};

export default UserOtput;
