import { Outlet } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

type Props = {};

export const Layout = (props: Props) => {
  return (
    <div>
      <ColorModeSwitcher />
      <Outlet />
    </div>
  );
};
