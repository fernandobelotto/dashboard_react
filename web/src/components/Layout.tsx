import { Outlet } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const Layout = () => {
  return (
    <div>
      <ColorModeSwitcher />
      <Outlet />
    </div>
  );
};
