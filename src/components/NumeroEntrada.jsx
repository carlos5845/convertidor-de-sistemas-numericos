// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types"; 
import '../styles/input.css'

function InputNumber({ inputValue, setInputValue }) {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="input-container">
      <label className="label-text">
        Introduce el número:
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="input-field"
        />
      </label>
    </div>
  );
}

// Definir los tipos de props que recibe este componente
InputNumber.propTypes = {
  inputValue: PropTypes.string.isRequired, // inputValue es de tipo string y requerido
  setInputValue: PropTypes.func.isRequired, // setInputValue es de tipo función y requerido
};

export default InputNumber;
