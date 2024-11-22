import type { Metadata } from 'next';
import './globals.css';

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
		<html lang="en">
			<body className="antialiased">{children}</body>
		</html>
	);
}
