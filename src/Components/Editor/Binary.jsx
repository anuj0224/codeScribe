import React, { useState } from "react";
import LangList from "./LangList";
import { toast } from "react-hot-toast";

import copy_icon from "../../assets/copy_icon.gif";
import download_icon from "../../assets/download_logo.png";

function Binary() {
  const [conversionType, setConversionType] = useState("decimal");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const decimalToBinary = (decimal) => {
    if (!/^[\d\s]+$/.test(decimal)) {
      return "The value you entered is not in decimal.";
    }
    return decimal
      .trim()
      .split(" ")
      .map((num) => {
        let n = parseInt(num);
        if (isNaN(n)) return "";
        let bin = "";
        while (n > 0) {
          bin = (n % 2) + bin;
          n = Math.floor(n / 2);
        }
        return bin || "0";
      })
      .join(" ");
  };

  const binaryToDecimal = (binary) => {
    if (!/^[01\s]+$/.test(binary)) {
      return "The value you entered is not in binary.";
    }
    return binary
      .trim()
      .split(" ")
      .map((bin) => {
        let sum = 0;
        for (let i = 0; i < bin.length; i++) {
          sum += Math.pow(2, i) * parseInt(bin[bin.length - 1 - i]);
        }
        return sum;
      })
      .join(" ");
  };

  const stringToBinary = (text) => {
    return text
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
  };

  const binaryToString = (binary) => {
    if (!/^[01\s]+$/.test(binary)) {
      return "The value you entered is not in binary.";
    }
    return binary
      .trim()
      .split(" ")
      .map((bin) => String.fromCharCode(parseInt(bin, 2)))
      .join("");
  };

  const handleConvert = () => {
    let result = "";
    switch (conversionType) {
      case "decimal":
        result = decimalToBinary(code);
        toast.success("Converted Decimal to Binary");
        break;
      case "binary":
        result = binaryToDecimal(code);
        toast.success("Converted Binary to Decimal");
        break;
      case "string":
        result = stringToBinary(code);
        toast.success("Converted String to Binary");
        break;
      case "binaryString":
        result = binaryToString(code);
        toast.success("Converted Binary to String");
        break;
      default:
        result = "Invalid conversion type";
    }
    setOutput(result);
  };

  const clear = () => {
    setOutput("");
    toast.success("Output Cleared");
  };

  const copyContent = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      toast.success("Copied to clipboard");
    } else {
      toast.error("Nothing to copy");
    }
  };

  const codeToFile = () => {
    const blob = new Blob([output], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `conversion-output-${conversionType}.txt`;
    link.click();
    toast.success("File Downloaded");
  };

  const titles = {
    decimal: "Decimal to Binary",
    binary: "Binary to Decimal",
    string: "Text to Binary",
    binaryString: "Binary to Text",
  };

  return (
    <div className="voiceContainer">
      <div className="voiceBody wholeeditorBody">
        <div className="leftLang">
          <LangList leftcolorbinary="white" />
        </div>
        <div className="PlaygroundMain">
          <div className="runHeaderJS">
            <div className="jsleftheaderfile jsfile">
              <mark>
                <h2>{titles[conversionType]}</h2>
              </mark>
              <div className="runbtn">
                <button className="vbtn" onClick={copyContent}>
                  <img className="voicebtn" src={copy_icon} alt="copy" />
                </button>
                <button className="vbtn" onClick={codeToFile}>
                  <img className="voicebtn" src={download_icon} alt="download" />
                </button>
                <button className="btn" onClick={handleConvert}>
                  RUN
                </button>
              </div>
            </div>
            <div className="jsrightheaderfile jsfile">
              <mark>
                <p>OUTPUT</p>
              </mark>
              <button className="clear" onClick={clear}>
                Clear
              </button>
            </div>
          </div>

          <div className="jsplayground playground">
            <div className="leftplayground snippet">
              <select
                value={conversionType}
                onChange={(e) => {
                  setConversionType(e.target.value);
                  setCode("");        // Clear input text area
                  setOutput("");      // Clear output display
                }}
                className="conversion-dropdown"
              >
                <option value="decimal">Decimal to Binary</option>
                <option value="binary">Binary to Decimal</option>
                <option value="string">Text to Binary</option>
                <option value="binaryString">Binary to Text</option>
              </select>

              <textarea
                className="dartpython"
                name="python"
                id="python"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter your input here..."
              ></textarea>
            </div>
            <h1 className="invisible">
              <mark>Output</mark>
            </h1>
            <div className="rightplayground snippet" id="consoleOutput">
              <p>{output}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Binary;
