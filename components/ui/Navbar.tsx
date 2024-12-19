'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useGlobalContext } from '@/context/GlobalContext';

export default function Navbar() {
	const currentPath = usePathname();
	const { state } = useGlobalContext();

	return (
		<nav className="hidden lg:flex">
			<ul className="flex gap-x-8 text-lg">
				<li>
					<Link
						href="/"
						className={`flex ${
							currentPath === '/' ? 'text-light-green' : 'text-white'
						}`}
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						href="/services"
						className={`flex ${
							currentPath === '/services' ? 'text-light-green' : 'text-white'
						}`}
					>
						Services
					</Link>
				</li>
				<li>
					<Link
						href="/projects"
						className={`flex ${
							currentPath === '/projects' ? 'text-light-green' : 'text-white'
						}`}
					>
						Projects
					</Link>
				</li>
				<li>
					<Link
						href="/about"
						className={`flex ${
							currentPath === '/about' ? 'text-light-green' : 'text-white'
						}`}
					>
						About Us
					</Link>
				</li>
				<li>
					<Link
						href="/contact"
						className={`flex ${
							currentPath === '/contact' ? 'text-light-green' : 'text-white'
						}`}
					>
						Contact Us
					</Link>
				</li>
			</ul>
		</nav>
	);
}
