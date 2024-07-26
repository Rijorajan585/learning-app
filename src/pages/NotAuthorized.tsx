import React from 'react';
import { Link } from 'react-router-dom';

const NotAuthorized: React.FC = () => {
  return (
    <div>
      <h2>Not Authorized</h2>
      <p>You do not have permission to view this page.</p>
      <Link to="/home">Go to Home</Link>
    </div>
  );
};

export default NotAuthorized;
