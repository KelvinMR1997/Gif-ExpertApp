import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { Progress, Spinner } from "reactstrap";
export const GifGrid = ({ category }) => {
  const { loading, data: images } = useFetchGifs(category);
  // console.log(data);

  // const [images, setImages] = useState([]);
  return (
    <>
      <h3
        style={{ color: "gray" }}
        className="animate__animated animate__fadeIn"
      >
        {category}
      </h3>
      {/* Operador ternario:
      loading ? (= true) = 'cargando...' : (!=true) 'Data cargada' 
      // Doble ampersand && si es verdadero haga lo siguiente, sino no haga nada
      */}
      {loading == true && (
        <>
          <center>
            <h1 style={{ color: "gray" }} className={"pb-3"}>
              LOADING...
            </h1>

            <div>
              <Spinner type="grow" color="secondary" />
              <Spinner type="grow" color="dark" />
              <Spinner type="grow" color="secondary" />
              <Spinner type="grow" color="dark" />
              <Spinner type="grow" color="secondary" />
              <Spinner type="grow" color="dark" />
              <Spinner type="grow" color="secondary" />
              <Spinner type="grow" color="dark" />
            </div>
          </center>
        </>
      )}
      <div
        className="card-grid"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
