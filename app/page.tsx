'use client';

import { useSession } from 'next-auth/react';
import LoginButton from './components/Login';
import LogoutButton from './components/Logout';


export default function Home() {
  const { data: session, status } = useSession();

  //console.log({session, status})

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1>You are not signed in</h1>
        <LoginButton />
      </div>
    );
  }

  return (
    <main className="">
      <div>
      <h1>Welcome, {session.user?.name ?? 'Guest'}</h1>
      <p>Email: {session.user?.email ?? 'Guest'}</p>
      <LogoutButton />
    </div>
    </main>
  );
}
