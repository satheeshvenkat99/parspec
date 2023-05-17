import "./App.css";
import HomeComponent from "./Components/Home";
import NavigationBar from "./Components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Todo from "./Components/Todo";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
