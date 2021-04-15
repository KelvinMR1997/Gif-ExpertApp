import React from "react";
// Desestructuracion de props
export const GifGridItem = ({ title, url }) => {
  // console.log(title, url);
  return (
    <div
      style={{ color: "gray" }}
      className="card animate__animated animate__fadeIn mb-3"
    >
      <img src={url} alt={title} title={title} />
      <p style={{ color: "gray" }}>{title}</p>
    </div>
  );
};
