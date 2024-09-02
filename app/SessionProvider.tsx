'use client'; // This is important to mark this component as client-side

import { SessionProvider } from 'next-auth/react';
import React from 'react';

interface Props {
  children: React.ReactNode;
  session: any; // Replace 'any' with the actual session type if you have it
}

const SessionProviderWrapper: React.FC<Props> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default SessionProviderWrapper;