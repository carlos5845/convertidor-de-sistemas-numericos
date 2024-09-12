// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import InputNumber from "./components/NumeroEntrada";
import SelectBase from "./components/SelectBase";
import Results from "./components/Resultados";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [base, setBase] = useState("decimal");
  const [result, setResult] = useState({});

  // Validar entrada según la base seleccionada
  const isValidInput = (value, base) => {
    switch (base) {
      case "binary":
        return /^[01]+$/.test(value);
      case "octal":
        return /^[0-7]+$/.test(value);
      case "hexadecimal":
        return /^[0-9A-Fa-f]+$/.test(value);
      case "decimal":
        return /^[0-9]+$/.test(value);
      default:
        return false;
    }
  };



  // Algoritmo para convertir binario a decimal
  const binaryToDecimal = (binary) => {
    let decimal = 0;
    let binaryStr = binary.toString();
    for (let i = 0; i < binaryStr.length; i++) {
      decimal += binaryStr[binaryStr.length - 1 - i] * Math.pow(2, i);
    }
    return decimal;
  };

  // Algoritmo para convertir octal a decimal
  const octalToDecimal = (octal) => {
    let decimal = 0;
    let octalStr = octal.toString();
    for (let i = 0; i < octalStr.length; i++) {
      decimal += octalStr[octalStr.length - 1 - i] * Math.pow(8, i);
    }
    return decimal;
  };

  // Algoritmo para convertir hexadecimal a decimal
  const hexadecimalToDecimal = (hexadecimal) => {
    const hexDigits = "0123456789ABCDEF";
    let decimal = 0;
    let hexStr = hexadecimal.toUpperCase();
    for (let i = 0; i < hexStr.length; i++) {
      decimal +=
        hexDigits.indexOf(hexStr[hexStr.length - 1 - i]) * Math.pow(16, i);
    }
    return decimal;
  };



  // Algoritmo para convertir decimal a binario
  const decimalToBinary = (decimal) => {
    let binary = "";
    while (decimal > 0) {
      binary = (decimal % 2) + binary;
      decimal = Math.floor(decimal / 2);
    }
    return binary || "0";
  };

  // Algoritmo para convertir decimal a octal
  const decimalToOctal = (decimal) => {
    let octal = "";
    while (decimal > 0) {
      octal = (decimal % 8) + octal;
      decimal = Math.floor(decimal / 8);
    }
    return octal || "0";
  };

  // Algoritmo para convertir decimal a hexadecimal
  const decimalToHexadecimal = (decimal) => {
    const hexDigits = "0123456789ABCDEF";
    let hex = "";
    while (decimal > 0) {
      hex = hexDigits[decimal % 16] + hex;
      decimal = Math.floor(decimal / 16);
    }
    return hex || "0";
  };




  // Convertir binario, octal o hexadecimal a otros sistemas numéricos
  const binaryToOthers = (binary) => {
    const decimal = binaryToDecimal(binary);
    return {
      decimal: decimal.toString(),
      octal: decimalToOctal(decimal),
      hexadecimal: decimalToHexadecimal(decimal),
    };
  };

  const octalToOthers = (octal) => {
    const decimal = octalToDecimal(octal);
    return {
      decimal: decimal.toString(),
      binary: decimalToBinary(decimal),
      hexadecimal: decimalToHexadecimal(decimal),
    };
  };

  const hexadecimalToOthers = (hexadecimal) => {
    const decimal = hexadecimalToDecimal(hexadecimal);
    return {
      decimal: decimal.toString(),
      binary: decimalToBinary(decimal),
      octal: decimalToOctal(decimal),
    };
  };

  const decimalToOthers = (decimal) => {
    return {
      binary: decimalToBinary(decimal),
      octal: decimalToOctal(decimal),
      hexadecimal: decimalToHexadecimal(decimal),
    };
  };

  // Función principal de conversión
  const convert = (value, base) => {//aquiiiiiiiiiiiiiiiiii
    switch (base) {
      case "decimal":
        return decimalToOthers(parseInt(value));
      case "binary":
        return binaryToOthers(value);
      case "octal":
        return octalToOthers(value);
      case "hexadecimal":
        return hexadecimalToOthers(value);
      default:
        return null;
    }
  };

  const handleConvert = () => {
    if (!isValidInput(inputValue, base)) {
      alert("Entrada no válida para la base seleccionada.");
      setResult({});
      return;
    }

    const converted = convert(inputValue, base);
    setResult(converted);
  };

  return (
    <div style={{ padding: "20px" }} className="container">
      <h1 className="title-efecct">Convertidor de Sistemas Numéricos</h1>
      <InputNumber inputValue={inputValue} setInputValue={setInputValue} />
      <SelectBase base={base} setBase={setBase} />
      <button onClick={handleConvert} className="buttoon">
        Convertir
      </button>
      <Results result={result} />

    </div>
  );
}

export default App;
