import Image from 'next/image';
import Link from 'next/link';

import greenLogo from '@/public/images/apexo-green.svg';
import Navbar from '@/components/ui/Navbar';
import NavbarToggler from '../ui/NavbarToggler';

export default function Header() {
	return (
		<header className="bg-light-black text-white py-5">
			<div className="container flex justify-between items-center">
				<div>
					<Link href="/">
						<Image src={greenLogo} alt="Apexo Logo" />
					</Link>
				</div>

				<Navbar />

				<div className="flex items-center gap-x-2">
					<Link
						href="/contact"
						className="bg-white hover:bg-light-gray text-light-black px-4 py-2 rounded-full transition-all"
					>
						Get in touch
					</Link>
					<NavbarToggler className="lg:hidden" />
				</div>
			</div>
		</header>
	);
}
