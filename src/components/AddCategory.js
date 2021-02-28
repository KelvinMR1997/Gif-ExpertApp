import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategory((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
// Hacer requerida la función serCategory
AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
};