import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../routes";

const AppContent = () => {
  let routeKey = 0;
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          {routes.map((route) => {
            return (
              route.element && (
                <Route
                  key={routeKey++}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            );
          })}
          <Route path="/" element={<Navigate to="home" replace />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppContent;
