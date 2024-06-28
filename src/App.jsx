import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import Home from "./pages/Home/Home";
import Live from "./pages/Live/Live";
import News from "./pages/News/News";
import Notes from "./pages/Notes/Notes";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="/live" element={<Live />} />
            <Route path="/news" element={<News />} />
            <Route path="/notes" element={<Notes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
