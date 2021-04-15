import { useState } from "react";
import PropTypes from "prop-types";
import { Input, Button, Spinner, Container } from "reactstrap";

export const AddCategory = ({ setCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setIsHidden(false);
      setCategory((cats) => [inputValue, ...cats]);
      setInputValue("");
      setIsHidden(true);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          value={inputValue}
          onChange={handleInputChange}
          style={{ borderColor: "gray" }}
        ></Input>
        {/* <input type="text" value={inputValue} onChange={handleInputChange} /> */}
      </form>
    </>
  );
};
// Hacer requerida la función serCategory
AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
};
