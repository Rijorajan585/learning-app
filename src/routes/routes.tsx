import React from 'react';
import { RouteObject } from 'react-router-dom';
import Login from "../services/auth/Login";
import ProtectedRoute from "./ProtectedRoute";


// Lazy load components
const Home = React.lazy(() => import('../pages/Home'));
const AdminPage = React.lazy(() => import('../pages/AdminPage'));
const SuperAdminPage = React.lazy(() => import('../pages/SuperAdminPage'));
const TesterPage = React.lazy(() => import('../pages/TesterPage'));
const NotAuthorized = React.lazy(() => import('../pages/NotAuthorized'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

// Define route configurations
const routes: RouteObject[] = [
  { path: '/login', element: <Login /> },
  { path: '/home', element: <ProtectedRoute element={<Home />} roles={[]} /> },
  { path: '/admin', element: <ProtectedRoute element={<AdminPage />} roles={['admin', 'superadmin']} /> },
  { path: '/superadmin', element: <ProtectedRoute element={<SuperAdminPage />} roles={['superadmin']} /> },
  { path: '/tester', element: <ProtectedRoute element={<TesterPage />} roles={['tester', 'superadmin']} /> },
  { path: '/not-authorized', element: <NotAuthorized /> }, 
  { path: '*', element: <NotFound /> },
];

export default routes;
