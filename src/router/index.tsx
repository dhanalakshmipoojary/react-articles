import React, { Suspense } from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { Loader } from '../components'
const ArticlesList = React.lazy(() => import("../pages/ArticlesList"));
const ArticlesDetails = React.lazy(() => import("../pages/ArticlesDetails"));

function RoutePage() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Suspense fallback={<Loader />}><ArticlesList /></Suspense>} />
        <Route
          path="detail/:articleId"
          element={
            <Suspense fallback={<Loader />}>
              <ArticlesDetails />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default RoutePage;
