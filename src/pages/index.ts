import { lazy } from "react";

export const LoginPage = lazy(() => import("./LoginPage/LoginPage"));
export const AdminIndexPage = lazy(
  () => import("./AdminIndexPage/AdminIndexPage")
);
