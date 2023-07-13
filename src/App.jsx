import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";
import { ListadoNoticias } from "./components/ListadoNoticias";

function App() {
  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);

  useEffect(()=>{
    const consultarApi = async ()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=e9988301dc174394819117ec64ca62f2`
      const solicitud = await fetch(url);
      const resultado = await solicitud.json();
      setNoticias(resultado.articles);
    }
    consultarApi();

  },[categoria])
  return (
    <>
      <Header title="BUSCADOR DE NOTICIAS" />
      <div className="container-white">
        <Formulario
        setCategoria={setCategoria}
        />
        <ListadoNoticias
        noticias={noticias}
        />

      </div>
    </>
  );
}

export default App;
