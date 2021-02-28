import { useState, useEffect } from "react";
import { getGifs } from "../components/helpers/getGifs";

export const useFetchGifs = (category) => {
  // -------------State-------------
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  // ------------------Effect

  //   UseEffect hace que las funciones dentro de él se ejecunten solo cuando se renderiza por primera vez el componente, asi evita la multiplicación e peticiones en cada cambio de estado, como primer paraametro recibe una función de funciones, es decir una funcion cuyo cuerpo será el codigo a cargar por primera vez, el segundo parametro es un arreglo de dependencias, para que estas funciones solo se carguen una vez, pero que pasa si NO se deja vacio... ?
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
