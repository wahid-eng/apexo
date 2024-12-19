import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layouts/Header';
import { dmSans, robotoSerif } from '@/lib/fonts';
import Footer from '@/components/layouts/Footer';
import { GlobalContextProvider } from '@/context/GlobalContext';

export const metadata: Metadata = {
	title: 'Apexo | Empowering Digital Solutions',
	description:
		'Apexo is a digital solutions agency specializing in web development, design, and innovative strategies to help businesses thrive online. Let us elevate your brand with cutting-edge solutions.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${dmSans.className} ${robotoSerif.className}`}>
			<body className="font-sans antialiased">
				<GlobalContextProvider>
					<Header />
					{children}
					<Footer />
				</GlobalContextProvider>
			</body>
		</html>
	);
}
