'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

type ActiveLinkProps = {
	children: React.ReactNode;
	href: string;
	activeClassName: string;
};

export default function ActiveLink({
	children,
	activeClassName,
	href,
	...rest
}: ActiveLinkProps) {
	const currentPath = usePathname();

	const isActive = currentPath === href;

	return (
		<Link
			href={href}
			className={twMerge('flex text-white', isActive ? activeClassName : '')}
			{...rest}
		>
			{children}
		</Link>
	);
}
