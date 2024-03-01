import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { OtherPage } from "../pages/Other";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<OtherPage />} path="/other" />
    </Routes>
  );
};