import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";
export const GifExpertApp = () => {
  //   const categories = ["One punch man", "Samurai X", "Dragon ball Z"];
  const [categories, setCategory] = useState(["One punch man"]);

  // const handleAdd = () => {
  //   setCategory([...categories, "Death Note"]);
  // };

  return (
    <>
      <h2>Gif Exper App</h2>
      <AddCategory setCategory={setCategory} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
        {/* <li>{categories}</li> */}
      </ol>
    </>
  );
};
