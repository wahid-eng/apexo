import Image from 'next/image';
import Link from 'next/link';
import SubscribeForm from '@/components/ui/SubscribeForm';

export default function Footer() {
	return (
		<footer className="bg-black text-white">
			<div className="container flex flex-wrap flex-col md:flex-row gap-x-24 gap-y-12 py-16 sm:py-20">
				<div className="xl:w-1/3">
					<Image
						src="/images/apexo-white.svg"
						alt="Logo of Apexo"
						width={200}
						height={52}
						className="mb-6"
					/>
					<p className="text-lg">
						We&apos;re a team of strategic creator and digital innovator, united
						focus in our pursuit of mastery and joyful.
					</p>
				</div>
				<div className="flex-1 flex justify-between gap-y-12 gap-x-24">
					<div className="flex-1">
						<h5 className="text-lg mb-4">Pages</h5>
						<ul className="flex flex-col gap-y-3">
							<li>
								<Link href="/" className="hover:underline underline-offset-2">
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="hover:underline underline-offset-2"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/services"
									className="hover:underline underline-offset-2"
								>
									Our Services
								</Link>
							</li>
							<li>
								<Link
									href="/projects"
									className="hover:underline underline-offset-2"
								>
									Our Projects
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="hover:underline underline-offset-2"
								>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
					<div className="flex-1">
						<h5 className="text-lg mb-4">Others</h5>
						<ul className="flex flex-col gap-y-3">
							<li>
								<Link
									href="/terms"
									className="hover:underline underline-offset-2"
								>
									Terms
								</Link>
							</li>
							<li>
								<Link
									href="/privacy"
									className="hover:underline underline-offset-2"
								>
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex-1">
					<h5 className="text-lg mb-4">Subscribe</h5>
					<SubscribeForm />
				</div>
			</div>
			<div className="container">
				<hr />
			</div>
			<div className="container flex flex-wrap flex-col md:flex-row justify-between gap-y-8 gap-x-24 pt-6 pb-12">
				<div>
					<h5 className="text-lg mb-1">Copyright</h5>
					<p>
						Developed By{' '}
						<a
							href="https://wahideng.com"
							className="hover:underline underline-offset-2"
						>
							Mohammad Wahid
						</a>
					</p>
				</div>
				<div>
					<h5 className="text-lg mb-1">Contact Us</h5>
					<p>
						<a
							href="tel:+12316208183"
							className="hover:underline underline-offset-2"
						>
							+1 (231) 620-8183
						</a>
					</p>
				</div>
				<div>
					<h5 className="text-lg mb-1">Address</h5>
					<p>4927 Lynn Avenue, Kennan, WI 54537</p>
				</div>
				<div className="flex items-center md:justify-end gap-x-7">
					<a
						href="#"
						className="bg-white rounded-full w-12 h-12 flex items-center justify-center"
					>
						<svg
							width="32"
							height="32"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10 8V8C10 6.60355 10 5.90533 10.1964 5.34402C10.5482 4.33866 11.3387 3.5482 12.344 3.19641C12.9053 3 13.6036 3 15 3H15.4444C15.9626 3 16.2217 3 16.4226 3.09369C16.6357 3.19305 16.8069 3.36431 16.9063 3.57738C17 3.77831 17 4.03739 17 4.55556V5C17 5.46594 17 5.69891 16.9239 5.88268C16.8224 6.12771 16.6277 6.32239 16.3827 6.42388C16.1989 6.5 15.9659 6.5 15.5 6.5H15C14.4477 6.5 14 6.94772 14 7.5V7.5V8"
								stroke="#000000"
							></path>
							<path
								d="M10 8V10H8.75C8.04777 10 7.69665 10 7.44443 10.1685C7.33524 10.2415 7.24149 10.3352 7.16853 10.4444C7 10.6967 7 11.0478 7 11.75V11.75C7 12.4522 7 12.8033 7.16853 13.0556C7.24149 13.1648 7.33524 13.2585 7.44443 13.3315C7.69665 13.5 8.04777 13.5 8.75 13.5H10V19.2C10 19.9499 10 20.3249 10.191 20.5878C10.2527 20.6727 10.3273 20.7473 10.4122 20.809C10.6751 21 11.0501 21 11.8 21H12.2C12.9499 21 13.3249 21 13.5878 20.809C13.6727 20.7473 13.7473 20.6727 13.809 20.5878C14 20.3249 14 19.9499 14 19.2V13.5H15.25C15.9522 13.5 16.3033 13.5 16.5556 13.3315C16.6648 13.2585 16.7585 13.1648 16.8315 13.0556C17 12.8033 17 12.4522 17 11.75V11.75C17 11.0478 17 10.6967 16.8315 10.4444C16.7585 10.3352 16.6648 10.2415 16.5556 10.1685C16.3033 10 15.9522 10 15.25 10H14V8"
								stroke="#000000"
							></path>
						</svg>
					</a>
					<a
						href="#"
						className="bg-white rounded-full w-12 h-12 flex items-center justify-center"
					>
						<svg
							width="32"
							height="32"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11 10.5V16.5V13.9375C11 12.039 12.539 10.5 14.4375 10.5V10.5C15.5766 10.5 16.5 11.4234 16.5 12.5625V16.5M7.5 10.5V16.5"
								stroke="#000000"
							></path>
							<circle cx="7.5" cy="7.5" r="1" fill="#000000"></circle>
							<path
								d="M3 10.2C3 7.20021 3 5.70032 3.76393 4.64886C4.01065 4.30928 4.30928 4.01065 4.64886 3.76393C5.70032 3 7.20021 3 10.2 3H13.8C16.7998 3 18.2997 3 19.3511 3.76393C19.6907 4.01065 19.9893 4.30928 20.2361 4.64886C21 5.70032 21 7.20021 21 10.2V13.8C21 16.7998 21 18.2997 20.2361 19.3511C19.9893 19.6907 19.6907 19.9893 19.3511 20.2361C18.2997 21 16.7998 21 13.8 21H10.2C7.20021 21 5.70032 21 4.64886 20.2361C4.30928 19.9893 4.01065 19.6907 3.76393 19.3511C3 18.2997 3 16.7998 3 13.8V10.2Z"
								stroke="#000000"
							></path>
						</svg>
					</a>
					<a
						href="#"
						className="bg-white rounded-full w-12 h-12 flex items-center justify-center"
					>
						<svg
							width="32"
							height="32"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M18.5 6.5C18.5 7.05228 18.0523 7.5 17.5 7.5C16.9477 7.5 16.5 7.05228 16.5 6.5C16.5 5.94772 16.9477 5.5 17.5 5.5C18.0523 5.5 18.5 5.94772 18.5 6.5Z"
								fill="#000000"
							></path>
							<path
								d="M3 10.2C3 7.20021 3 5.70032 3.76393 4.64886C4.01065 4.30928 4.30928 4.01065 4.64886 3.76393C5.70032 3 7.20021 3 10.2 3H13.8C16.7998 3 18.2997 3 19.3511 3.76393C19.6907 4.01065 19.9893 4.30928 20.2361 4.64886C21 5.70032 21 7.20021 21 10.2V13.8C21 16.7998 21 18.2997 20.2361 19.3511C19.9893 19.6907 19.6907 19.9893 19.3511 20.2361C18.2997 21 16.7998 21 13.8 21H10.2C7.20021 21 5.70032 21 4.64886 20.2361C4.30928 19.9893 4.01065 19.6907 3.76393 19.3511C3 18.2997 3 16.7998 3 13.8V10.2Z"
								stroke="#000000"
							></path>
							<path
								d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
								stroke="#000000"
							></path>
						</svg>
					</a>
				</div>
			</div>
		</footer>
	);
}
