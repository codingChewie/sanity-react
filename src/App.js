import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";

// Components
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" exact element={<AllPosts />} />
        <Route path="/:slug" element={<OnePost />}  />
      </Routes>
    </BrowserRouter>
  );
}
export default App;