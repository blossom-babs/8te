// components/LoginButton.js

import { signIn } from 'next-auth/react';

const LoginButton = () => (
  <button className='bg-[#16423C] text-white rounded-md px-4 py-2 mt-4' onClick={() => signIn('google')}>
    Sign in with Google
  </button>
);

export default LoginButton;