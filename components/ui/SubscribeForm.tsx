'use client';

type Inputs = {
	email: string;
};

import { useForm, SubmitHandler } from 'react-hook-form';
import Button from './Button';

export default function SubscribeForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="relative">
				<input
					className={`text-light-black block w-full focus-within:outline-none h-16 pl-6 pe-32 rounded-full ${
						errors.email
							? 'bg-red-200 placeholder:text-red-600'
							: 'bg-white placeholder:text-light-black'
					}`}
					placeholder="Enter your email here"
					{...register('email', {
						required: 'Please enter a valid email address',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'Please enter a valid email address',
						},
					})}
				/>

				<Button
					type="submit"
					className="absolute top-1/2 -translate-y-1/2 end-4 px-4"
				>
					Subscribe
				</Button>
			</div>
			{errors.email && (
				<p className="text-red-600 mt-1">{errors.email.message}</p>
			)}
		</form>
	);
}
