// components/LogoutButton.js

import { signOut } from 'next-auth/react';

const LogoutButton = () => (
  <button onClick={() => signOut()}>
    Sign out
  </button>
);

export default LogoutButton;