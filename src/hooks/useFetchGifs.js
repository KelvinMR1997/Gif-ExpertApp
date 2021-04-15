import { useState, useEffect } from "react";
import { Alert } from "../components/helpers/alert";
import { getGifs } from "../components/helpers/getGifs";

export const useFetchGifs = (category) => {
  /* ---------------- Se inicializa un estado como objeto vacio --------------- */
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  //   UseEffect hace que las funciones dentro de él se ejecunten solo cuando se renderiza por primera vez el componente, asi evita la multiplicación e peticiones en cada cambio de estado, como primer paraametro recibe una función de funciones, es decir una funcion cuyo cuerpo será el codigo a cargar por primera vez, el segundo parametro es un arreglo de dependencias, para que estas funciones solo se carguen una vez, pero que pasa si NO se deja vacio... ?

  useEffect(() => {
    // Se le pasan prpos a getGifs y de inmediato se insertan en el State
    getGifs(category)
      .then((imgs) => {
        setTimeout(() => {
          setState({
            data: imgs,
            loading: false,
          });
        }, 1000);
      })
      .catch((error) => {
        Alert(
          "No estás conectado a internet 🙄🙄😒😒",
          "No pudimos traer tus gifs 😌😌: " + error,
          "error"
        );
        console.log("Error: " + error);
      });
  }, []);

  return state;
};
