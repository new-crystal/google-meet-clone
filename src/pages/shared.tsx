import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./main/main";

const Shared = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/meeting" />
      <Route path="/join" />
      <Route path="*" element={<Main />} />
    </Routes>
  );
};

export default Shared;
