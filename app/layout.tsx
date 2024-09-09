// app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Nunito } from 'next/font/google';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { getServerSession } from 'next-auth';
import SessionProviderWrapper from './SessionProvider';
import { authOptions } from './api/auth/[...nextauth]';
import { GET } from './api/auth/[...nextauth]/route';
import Navbar from './components/Navbar';
import AddButton from './components/AddButton';
import { Provider } from 'react-redux';
import store from './libs/store';
import ClientLayout from './clientLayout';

const inter = Inter({ subsets: ['latin'] });
const nunito = Nunito({subsets: ['latin'] });

export const metadata: Metadata = {
  title: '8te - Personal finance',
  description: 'Track your money',
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const session = await getServerSession(GET);

  return (
    <html lang="en">
      <body className={`${nunito.className} custom-bg`}>
        <ClientLayout session={session}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}