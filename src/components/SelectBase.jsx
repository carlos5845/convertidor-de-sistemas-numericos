// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import '../styles/select.css'
function SelectBase({ base, setBase }) {
  const handleBaseChange = (e) => {
    setBase(e.target.value);
  };

  return (
    <div className="select-container">
      <label className="label-text">
        Selecciona la base del número:
        <select
          value={base}
          onChange={handleBaseChange}
          className="select-field"
        >
          <option value="decimal">Decimal</option>
          <option value="binary">Binario</option>
          <option value="octal">Octal</option>
          <option value="hexadecimal">Hexadecimal</option>
        </select>
      </label>
    </div>
  );
}

// Definir los tipos de props
SelectBase.propTypes = {
  base: PropTypes.string.isRequired, // base es de tipo string y requerido
  setBase: PropTypes.func.isRequired, // setBase es de tipo función y requerido
};

export default SelectBase;
