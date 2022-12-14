import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [login, setLogin] = useState<boolean>(false);
  return (
    <div className="App">
      {login ? (
        <Login login={login} setLogin={setLogin} />
      ) : (
        <Signup login={login} setLogin={setLogin} />
      )}
    </div>
  );
}

export default App;
