import React, { Suspense, lazy } from "react";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import "./App.css";

const DefaultPage = lazy(() => import("./components/defaultLayout"));

function App() {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="*" element={<DefaultPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
