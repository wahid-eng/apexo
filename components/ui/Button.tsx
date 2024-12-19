import { twMerge } from 'tailwind-merge';

type ButtonProps = {
	children: React.ReactNode;
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	className?: string;
};

const Button: React.FC<ButtonProps> = ({
	children,
	className = '',
	onClick,
	type = 'button',
}) => {
	return (
		<button
			type={type}
			className={twMerge(
				'bg-light-black hover:bg-black text-white px-6 py-2 rounded-full transition-all',
				className
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
