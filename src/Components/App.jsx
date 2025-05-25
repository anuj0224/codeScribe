import React, { createContext, useReducer } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Voice2Text from "./Editor/Voice2Text";
import Image2Text from "./Editor/Image2Text";
import Python from "./Editor/Python";
import Html from "./Editor/Html";
import JavaScript from "./Editor/Javascript";
import Errorpage from "./Screens/Errorpage";
import Homepage from "./Screens/Homepage";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

import { initialState, reducer } from "../reducer/UseReducer";
import Binary from "./Editor/Binary";

export const UsedContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsedContext.Provider value={{ state, dispatch }}>
      <div>
        <Toaster
          position="top-center"
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        />
      </div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/editor/python" element={<Python />} />
          <Route path="/editor/javascript" element={<JavaScript />} />
          <Route path="/editor/html" element={<Html />} />
          <Route path="/editor/css" element={<Html />} />
          <Route path="/editor/binary" element={<Binary />} />
          <Route path="/editor/voice2text" element={<Voice2Text />} />
          <Route path="/editor/image2text" element={<Image2Text />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Router>
    </UsedContext.Provider>
  );
}

export default App;
