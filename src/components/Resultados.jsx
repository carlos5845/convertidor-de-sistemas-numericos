// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import "../styles/result.css";
function Results({ result }) {
  return (
    <div className="result-container">
      {result && (
        <>
          <h3 className="result-title">Resultados:</h3>
          <p className="result-item">
            Decimal: <span className="decimal-value">{result.decimal}</span>
          </p>
          <p className="result-item">
            Binario: <span className="binary-value">{result.binary}</span>
          </p>
          <p className="result-item">
            Octal: <span className="octal-value">{result.octal}</span>
          </p>
          <p className="result-item">
            Hexadecimal:{" "}
            <span className="hexadecimal-value">{result.hexadecimal}</span>
          </p>
        </>
      )}
    </div>
  );
}

Results.propTypes = {
  result: PropTypes.shape({
    decimal: PropTypes.string,
    binary: PropTypes.string,
    octal: PropTypes.string,
    hexadecimal: PropTypes.string,
  }).isRequired,
};

export default Results;
