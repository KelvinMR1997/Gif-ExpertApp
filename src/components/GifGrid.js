// import { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { loading, data: images } = useFetchGifs(category);
  // console.log(data);

  // const [images, setImages] = useState([]);
  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {/* Operador ternario:
      loading ? (= true) = 'cargando...' : (!=true) 'Data cargada' 
      // Doble ampersand && si es verdadero haga lo siguiente, sino no haga nada
      */}
      {loading && <p className="txt-loading animate__animated animate__flash">Loading...</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
