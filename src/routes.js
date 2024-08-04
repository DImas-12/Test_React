import React from "react";

const HomePage = React.lazy(() => import("./pages/home/index"));
const ProfilePage = React.lazy(() => import("./pages/profile/index"));

const routes = [
  { path: "/home", name: "Dashboard", element: HomePage },
  { path: "/profile", name: "Profile Pages", element: ProfilePage },
];

export default routes;
