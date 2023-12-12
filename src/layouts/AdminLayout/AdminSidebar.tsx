import { useAuthStore, useLogoutUser } from "../../hooks";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

export const AdminSidebar = () => {
  const userData = useAuthStore((state) => state.user);
  const logoutUser = useLogoutUser();
  return (
    <aside className="h-full w-3/12 ">
      <Card className="h-full px-2.5 py-2.5 flex flex-col justify-between items-center">
        <h1 className="text-center">{`${userData?.fullName}, خوش‌آمدید`}</h1>
        <Button onClick={logoutUser} variant="outlined">
          خروج از حساب کاربری
        </Button>
      </Card>
    </aside>
  );
};
