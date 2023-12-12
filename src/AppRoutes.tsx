import { Route, Routes } from "react-router-dom";
import { WithSuspense } from "./components";
import { AdminIndexPage, LoginPage } from "./pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={WithSuspense(LoginPage)()} />
      <Route path="/admin" element={WithSuspense(AdminIndexPage)()} />
    </Routes>
  );
};
