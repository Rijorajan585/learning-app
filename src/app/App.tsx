import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "../services/auth/AuthContext";
import AppRoutes from "../routes/AppRoutes";
import MainLayout from "../layouts/MainLayout";

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </AuthProvider>
    </Router>
  );
};

export default App;
