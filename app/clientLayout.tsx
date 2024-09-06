'use client';

import { Provider } from 'react-redux';
import store from './libs/store';
import Navbar from './components/Navbar';
import AddButton from './components/AddButton';
import SessionProviderWrapper from './SessionProvider';

export default function ClientLayout({
	children,
	session
}: {
	children: React.ReactNode;
	session: any;
}) {
	return (
		<Provider store={store}>
			<SessionProviderWrapper session={session}>
				<Navbar />
				<div className="min-h-screen relative">
					<AddButton />
					{children}
				</div>
			</SessionProviderWrapper>
		</Provider>
	);
}
