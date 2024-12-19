'use client';

import Button from '@/components/ui/Button';
import { twMerge } from 'tailwind-merge';
import { useGlobalContext } from '@/context/GlobalContext';

export default function NavbarToggler({
	className = '',
}: {
	className?: string;
}) {
	const { toggleNavbar } = useGlobalContext();

	return (
		<Button className={twMerge('bg-black', className)} onClick={toggleNavbar}>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M4 12H20M4 18H20M4 6H20" stroke="#fff"></path>
			</svg>
		</Button>
	);
}
