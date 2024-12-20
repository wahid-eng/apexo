import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Terms and Conditions | Apexo',
	description:
		"Review the terms and conditions for using Apexo's website and services. Ensure compliance with our policies.",
};

export default function Terms() {
	return (
		<main className="container py-16">
			<h1 className="mb-2">Terms of Service for Apexo</h1>
			<p>Effective Date: January 01, 2025</p>
			<p>
				Welcome to Apexo. By accessing or using our website, services, or
				applications, you agree to abide by the following Terms of Service.
				Please read these terms carefully before using our services.
			</p>
			<h2 className="mb-2 mt-4">1. Acceptance of Terms</h2>
			<p>
				By using our services, you agree to be bound by these Terms of Service.
				If you do not agree to these terms, you may not use our services.
			</p>
			<h2 className="mb-2 mt-4">2. Services</h2>
			<p>
				Apexo provides web hosting, software tools, etc. We reserve the right to
				modify or discontinue any part of the services at our discretion, with
				or without notice.
			</p>
			<h2 className="mb-2 mt-4">3. User Responsibilities</h2>
			<p>
				You agree to use Apexo&apos;s services in a lawful manner and in
				compliance with all applicable laws and regulations. You must not:
			</p>
			<ul className="list-disc ml-8">
				<li>
					Use our services to transmit any harmful, abusive, or illegal content.
				</li>
				<li>Interfere with the operation of our website or services.</li>
				<li>
					Engage in activities that may harm the security or performance of our
					website.
				</li>
			</ul>
			<h2 className="mb-2 mt-4">4. Account Registration</h2>
			<p>
				To access certain features, you may be required to create an account
				with Apexo. You agree to provide accurate, complete, and current
				information during the registration process and to keep your account
				details confidential.
			</p>
			<h2 className="mb-2 mt-4">5. Payment and Billing</h2>
			<p>
				For paid services, you agree to provide valid payment information. You
				are responsible for all charges incurred under your account, including
				any taxes or fees.
			</p>
			<h2 className="mb-2 mt-4">6. Termination</h2>
			<p>
				We may suspend or terminate your access to our services if you violate
				these Terms of Service. You may also terminate your account by
				contacting us.
			</p>
			<h2 className="mb-2 mt-4">7. Limitation of Liability</h2>
			<p>
				Apexo is not liable for any indirect, incidental, special, or
				consequential damages resulting from your use of our services. Our
				liability to you will not exceed the amount you paid for the services in
				the last 12 months.
			</p>
			<h2 className="mb-2 mt-4">8. Intellectual Property</h2>
			<p>
				All content and materials on the Apexo website, including text, images,
				and software, are the property of Apexo or its licensors and are
				protected by copyright laws. You may not copy, distribute, or use our
				content without permission.
			</p>
			<h2 className="mb-2 mt-4">9. Indemnification</h2>
			<p>
				You agree to indemnify and hold Apexo harmless from any claims, losses,
				or damages arising from your use of our services, violation of these
				terms, or infringement of any rights of third parties.
			</p>
			<h2 className="mb-2 mt-4">10. Changes to Terms</h2>
			<p>
				Apexo reserves the right to modify these Terms of Service at any time.
				Any changes will be posted on this page, with the January 01, 2025
				updated accordingly. Your continued use of our services after changes
				are posted constitutes acceptance of the new terms.
			</p>
			<h2 className="mb-2 mt-4">11. Governing Law</h2>
			<p>
				These Terms of Service are governed by the laws of the state or country
				where Apexo operates. Any disputes will be resolved in the appropriate
				courts located in the jurisdiction.
			</p>
			<h2 className="mb-2 mt-4">12. Contact Information</h2>
			<p>
				If you have any questions about these Terms of Service, please contact
				us at{' '}
				<a
					href="mailto:support@apexo.com"
					className="underline underline-offset-2"
				>
					support@apexo.com.
				</a>
			</p>
		</main>
	);
}
