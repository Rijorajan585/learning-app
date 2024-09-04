import React from "react";
import { Link } from "react-router-dom";

const NotAuthorized: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h2 className="text-3xl font-semibold text-red-600 mb-4">
        Not Authorized
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        You do not have permission to view this page.
      </p>
      <Link
        to="/"
        className="text-blue-500 hover:text-blue-700 text-lg font-semibold"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotAuthorized;
