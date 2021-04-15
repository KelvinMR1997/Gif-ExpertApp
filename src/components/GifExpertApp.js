import { useState } from "react";
import { Container } from "reactstrap";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";
export const GifExpertApp = () => {
  //   const categories = ["One punch man", "Samurai X", "Dragon ball Z"];
  const [categories, setCategory] = useState(["Code"]);

  // const handleAdd = () => {
  //   setCategory([...categories, "Death Note"]);
  // };

  return (
    <>
      <Container
        style={{
          borderRadius: 10,
          backgroundImage: `url("https://img.freepik.com/vector-gratis/fondo-geometrico-abstracto-premium-negro-oro_1017-24783.jpg?size=626&ext=jpg&ga=GA1.2.1592009306.1616889600")`,
          objectFit: "cover",
          overflow: "hidden",
        }}
      >
        <h2 className={"title"} style={{ color: "gray" }}>
          Gif Expert App
        </h2>
        <AddCategory setCategory={setCategory} />
        <hr />
        <ol>
          {categories.map((category) => {
            return <GifGrid key={category} category={category} />;
          })}
          {/* <li>{categories}</li> */}
        </ol>
      </Container>
    </>
  );
};
