import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Login from "../services/auth/Login";
import ProtectedRoute from "./ProtectedRoute";

// Lazy load components
const Home = lazy(() => import("../pages/Home"));
const AdminPage = lazy(() => import("../pages/AdminPage"));
const SuperAdminPage = lazy(() => import("../pages/SuperAdminPage"));
const TesterPage = lazy(() => import("../pages/TesterPage"));
const NotAuthorized = lazy(() => import("../pages/NotAuthorized"));
const NotFound = lazy(() => import("../pages/NotFound"));

// Define route configurations
const routes: RouteObject[] = [
  { path: "/login", element: <Login /> },
  { path: "/", element: <ProtectedRoute element={<Home />} roles={[]} /> },
  {
    path: "/admin",
    element: (
      <ProtectedRoute element={<AdminPage />} roles={["admin", "superadmin"]} />
    ),
  },
  {
    path: "/superadmin",
    element: (
      <ProtectedRoute element={<SuperAdminPage />} roles={["superadmin"]} />
    ),
  },
  {
    path: "/tester",
    element: (
      <ProtectedRoute
        element={<TesterPage />}
        roles={["tester", "superadmin"]}
      />
    ),
  },
  { path: "/not-authorized", element: <NotAuthorized /> },
  {
    path: "*",
    element: <ProtectedRoute element={<NotFound />} roles={[]} />,
  },
];

export default routes;
