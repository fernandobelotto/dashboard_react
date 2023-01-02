import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { DashboardPage } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { RecoverPage } from "../pages/RecoverPage";
import { RegisterPage } from "../pages/RegisterPage";
import { PublicAuth } from "./PublicAuth";
import { RequireAuth } from "./RequireAuth";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicAuth>
                <LoginPage />
              </PublicAuth>
            }
          />
          <Route
            path="register"
            element={
              <PublicAuth>
                <RegisterPage />
              </PublicAuth>
            }
          />
          <Route
            path="recover"
            element={
              <PublicAuth>
                <RecoverPage />
              </PublicAuth>
            }
          />
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <DashboardPage />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
