import { Navigate, useLocation } from "react-router-dom";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import { useAppSelector } from "../store";

export const PublicAuth = ({ children }: { children: JSX.Element }) => {
  const token = useAppSelector((state) => state.auth.token);
  let location = useLocation();

  if (token) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }

  return (
    <>
      <ColorModeSwitcher />

      {children}
    </>
  );
};
