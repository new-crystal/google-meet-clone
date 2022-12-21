import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import JoinNotLogIn from "./join/JoinNotLogin";
import Join from "./join/Join";

const Shared = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/meeting" />
      <Route path="/join" element={<Join />}/>
      <Route path="/joinnotlogin" element={<JoinNotLogIn />}/>
      <Route path="*" element={<Main />} />
    </Routes>
  );
};

export default Shared;
