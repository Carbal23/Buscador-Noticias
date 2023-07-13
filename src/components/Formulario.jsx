import React from "react";
import styles from "./styles/formulario.module.css";
import { useSelect } from "../hooks/useSelect";

export const Formulario = ({setCategoria}) => {
  const opciones = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];

  const { noticia,SelectNoticias } = useSelect('general',opciones);

  const handleSubmit = e =>{
    e.preventDefault();
    setCategoria(noticia);
  }

  return (
    <div className={`row ${styles.buscador}`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={handleSubmit}>
          <h2 className={styles.heading}>Encuentra noticia por categoria</h2>
          <SelectNoticias />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`btn-large amber darken-2 ${styles.btn_block}`}
              value="buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
