import { Route, Routes } from "react-router-dom";
import { DashboardLayout } from "../components/dashboard/DashboardLayout";
import { Layout } from "../components/Layout";
import { EntitiesPage } from "../pages/EntitiesPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { RecoverPage } from "../pages/RecoverPage";
import { RegisterPage } from "../pages/RegisterPage";
import { SettingsPage } from "../pages/SettingsPage";
import { UsersPage } from "../pages/UsersPage";
import { PublicAuth } from "./PublicAuth";
import { RequireAuth } from "./RequireAuth";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/">
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
            path="/dashboard"
            element={
              <RequireAuth>
                <DashboardLayout />
              </RequireAuth>
            }
          >
            <Route index element={<HomePage />} />
            <Route path="entities" element={<EntitiesPage />} />
            <Route path="users" index element={<UsersPage />} />
            <Route path="settings" index element={<SettingsPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
