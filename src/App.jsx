import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import { FadeLoader } from "react-spinners";

function App() {
  const loading = useNavigation();
  return (
    <div className="App">
      <Header></Header>
      {loading.state === "loading" && (
        <div className="spinner">
          <FadeLoader color="#36d7b7" />
        </div>
      )}

      <Outlet />
    </div>
  );
}

export default App;
