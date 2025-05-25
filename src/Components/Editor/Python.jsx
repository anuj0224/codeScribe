import React, { useEffect, useState } from "react";
import LangList from "./LangList";
// import axios from 'axios';
import copy_icon from "../../assets/copy_icon.gif";
import download_icon from "../../assets/download_logo.png";
import { toast } from "react-hot-toast";
let pyodide = null;

const loadPyodideScript = async () => {
  if (!pyodide) {
    toast.loading("Loading Python Interpreter...");
    pyodide = await window.loadPyodide();
    toast.remove();
    toast.success("Python Ready");
  }
};

function Python() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js";
    script.onload = loadPyodideScript;
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async () => {
  toast.loading("Executing Python Code...");
  try {
    await loadPyodideScript(); // Ensure Pyodide is loaded

    // Redirect stdout
    pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = mystdout = StringIO()
    `);

    // Execute user code
    await pyodide.runPythonAsync(code);

    // Get the printed output
    const printedOutput = pyodide.runPython("mystdout.getvalue()");

    setOutput(printedOutput || "No output");
    toast.remove();
    toast.success("Executed in Browser Successfully.");
  } catch (err) {
    setOutput(err.toString());
    toast.remove();
    toast.error("Python Error");
    console.error("Pyodide Error:", err);
  }
};


  const clear = () => {
    toast.success("Output Cleared");
    const box = document.querySelector("#consoleOutput p");
    box.innerText = "";
  };

  const copyContent = () => {
    toast.success("Copied");
    navigator.clipboard.writeText(code);
  };

  const codeToFile = () => {
    toast.success("File is Downloading...");
    const text = document.querySelector("#python").value;

    const blob = new Blob([text], { type: "text/python" });

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "codeScribe-python.py";
    link.click();
  };

  return (
    <>
      <div className="voiceContainer">
        <div className="voiceBody wholeeditorBody">
          <div className="leftLang">
            <LangList leftcolorpy="white" />
          </div>
          <div className="PlaygroundMain">
            <div className="runHeaderJS">
              <div className="jsleftheaderfile jsfile">
                <mark>
                  <h2>index.py</h2>
                </mark>
                <div className="runbtn">
                  <button className="vbtn">
                    <img
                      className="voicebtn"
                      onClick={copyContent}
                      src={copy_icon}
                      alt="copy"
                    />
                  </button>
                  <button className="vbtn">
                    <img
                      className="voicebtn"
                      onClick={codeToFile}
                      src={download_icon}
                      alt="download"
                    />
                  </button>
                  <button className="btn" onClick={handleSubmit}>
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
                <textarea
                  className="dartpython"
                  name="python"
                  id="python"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder='print("hello coder")'
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
    </>
  );
}

export default Python;
