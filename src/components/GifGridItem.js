import React from "react";
// Desestructuracion de props
export const GifGridItem = ({ title, url }) => {
  // console.log(title, url);
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
