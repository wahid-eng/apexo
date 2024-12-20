import Image from 'next/image';
import Link from 'next/link';

import greenLogo from '@/public/images/apexo-green.svg';
import NavbarToggler from '../ui/NavbarToggler';
import ActiveLink from '../ui/ActiveLink';

export default function Header() {
	return (
		<header className="bg-light-black text-white py-5">
			<div className="container flex justify-between items-center">
				<div>
					<Link href="/">
						<Image src={greenLogo} alt="Apexo Logo" />
					</Link>
				</div>

				<nav className="hidden lg:flex">
					<ul className="flex gap-x-8 text-lg">
						<li>
							<ActiveLink href="/" activeClassName="text-light-green">
								Home
							</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/services" activeClassName="text-light-green">
								Services
							</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/projects" activeClassName="text-light-green">
								Projects
							</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/about" activeClassName="text-light-green">
								About Us
							</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/contact" activeClassName="text-light-green">
								Contact Us
							</ActiveLink>
						</li>
					</ul>
				</nav>

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
