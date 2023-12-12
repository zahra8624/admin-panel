import { Route, Routes } from "react-router-dom";
import { WithSuspense } from "./components";
import { AdminIndexPage, LoginPage } from "./pages";
import { useUser } from "./hooks";
import { AdminLayout } from "./layouts";

export const AppRoutes = () => {
  const [data, { isLoading }] = useUser();
  if (isLoading) {
    return <p>در‌حال گرفتن اطلاعات کاربر</p>;
  }
  return (
    <Routes>
      {!!data ? (
        <Route path="/" element={<AdminLayout />}>
          <Route path="/" element={WithSuspense(AdminIndexPage)()} />
        </Route>
      ) : (
        <Route path="/" element={WithSuspense(LoginPage)()} />
      )}
    </Routes>
  );
};
