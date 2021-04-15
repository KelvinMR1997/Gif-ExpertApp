import { Alert, Modal } from "bootstrap";
import React from "react";
import { ImgModal } from "./ImgModal";

// Desestructuracion de props
export const GifGridItem = ({ title, url }) => {
  const handleClickImage = () => {
    alert("hola");
    // TODO: Un modal con la img-- Revisa el componente Imgmodal.js
  };
  return (
    <div
      style={{ color: "gray", cursor: "pointer" }}
      className="card animate__animated animate__fadeIn mb-3"
      onClick={handleClickImage}
    >
      <img src={url} alt={title} title={title} />
      <p style={{ color: "gray" }}>{title}</p>
    </div>
  );
};
