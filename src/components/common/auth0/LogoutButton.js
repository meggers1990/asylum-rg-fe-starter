import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() => logout({ returnTo: window.Location.origin })}
      className="btn btn-danger btn-block"
    >
      Logout
    </button>
  );
};

export default LoginButton;
