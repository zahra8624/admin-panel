import { Outlet } from "react-router-dom";
import { AdminSidebar } from "./AdminSidebar";

export const AdminLayout = () => {
  return (
    <section className="h-screen flex flex-row">
      <AdminSidebar />
      <main className="h-full w-full overflow-y-auto px-2.5 py-2.5">
        <Outlet />
      </main>
    </section>
  );
};
