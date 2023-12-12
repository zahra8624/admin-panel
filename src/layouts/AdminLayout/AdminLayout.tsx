import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Outlet } from "react-router-dom";
import { useAuthStore, useLogoutUser } from "../../hooks";

export const AdminLayout = () => {
  const userData = useAuthStore((state) => state.user);
  const logoutUser = useLogoutUser();
  return (
    <section className="h-screen flex flex-row">
      <aside className="h-full w-3/12 ">
        <Card className="h-full px-2.5 py-2.5 flex flex-col justify-between items-center">
          <h1 className="text-center">{`${userData?.fullName}, خوش‌آمدید`}</h1>
          <Button onClick={logoutUser} variant="outlined">
            خروج از حساب کاربری
          </Button>
        </Card>
      </aside>
      <main className="h-full w-full overflow-y-auto px-2.5 py-2.5">
        <Outlet />
      </main>
    </section>
  );
};
