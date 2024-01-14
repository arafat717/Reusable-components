import { Outlet } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";

const AdminLayout = () => {
  return (
    <div className="bg-white h-screen">
      <div className="flex">
        <div className="flex-[1]">
          <AdminSideBar></AdminSideBar>
        </div>
        <div className="flex-[5]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
