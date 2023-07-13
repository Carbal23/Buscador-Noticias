import React, { useState } from "react";

export const useSelect = (inicialState, opciones) => {
  const [noticia, setNoticia] = useState(inicialState);

  const SelectNoticias = () => (
    <select 
    className="browser-default" 
    value={noticia}
    onChange={e => setNoticia(e.target.value)}
    >
      {opciones.map((opcion) => (
        <option key={opcion.value} value={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </select>
  );

  return {
    SelectNoticias,
    noticia,
  };
};
