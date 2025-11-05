import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WriteArticle from "./pages/WriteArticle";
import BlogTitles from "./pages/BlogTitles.jsx";
import GenerateImages from "./pages/GenerateImages";
import RemoveBackground from "./pages/RemoveBackground";
// import Dashboard from "./pages/Dashboard";
import RemoveObject from "./pages/RemoveObject";
import ReviewResume from "./pages/ReviewResume";
// import Community from "./pages/Community";
// import AuthModal from "./components/features/AuthModal";

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ai/write-article" element={<WriteArticle />} />
      <Route path="/ai/blog-titles" element={<BlogTitles />} />
      <Route path="/ai/generate-images" element={<GenerateImages />} />
      <Route path="/ai/remove-background" element={<RemoveBackground />} />
      <Route path="/ai/remove-object" element={<RemoveObject />} />
      <Route path="/ai/review-resume" element={<ReviewResume />} />
      {/* <Route path="/ai" element={<Dashboard />} />
      <Route path="/ai/community" element={<Community />} /> */}
    </Routes>
  </>
  );
}

export default App;
