'use client';

import { Provider } from 'react-redux';
import store from './libs/store';
import Navbar from './components/Navbar';
import AddButton from './components/AddButton';
import SessionProviderWrapper from './SessionProvider';
import FinanceForm from './components/FinanceForm';

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
					<div className=''>
					<AddButton />
					<FinanceForm/>
					</div>
					{children}
				</div>
			</SessionProviderWrapper>
		</Provider>
	);
}
