import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Tasks } from "./pages/tasks";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/to-do" element={<Tasks variant="todo" />} />
        <Route path="/done" element={<Tasks variant="done" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
