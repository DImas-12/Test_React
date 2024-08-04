import React from "react";

import HeaderComponent from "./header/index";
import AppContent from "./appContent";
const DefaultLayout = () => {
  return (
    <>
      <HeaderComponent />
      <div style={{ padding: "20px" }}>
        <AppContent />
      </div>
    </>
  );
};

export default DefaultLayout;
