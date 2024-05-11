import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import ArticlesList from "../pages/ArticlesList";
import ArticlesDetails from "../pages/ArticlesDetails";

function RoutePage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="detail/:articleId" element={<ArticlesDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default RoutePage;
