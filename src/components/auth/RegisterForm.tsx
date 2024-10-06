"use client";

import { useFormState } from "react-dom";

import { signup } from "@/app/actions/authentication";

export const RegisterForm = () => {
	// const [formState, setFormState] = useFormState(signup, undefined);

	return (
		<div className="flex flex-col gap-12">
			<h2 className="text-white-primary text-2xl md:text-5xl">Sign up</h2>
			<form
				method="POST"
				action={signup}
				className="max-w-[650px] flex flex-col gap-4 md:gap-8">
				<div className="flex flex-col gap-1">
					<label
						htmlFor=""
						className="sr-only">
						Email
					</label>
					<input
						required
						type="text"
						name="email"
						id="email"
						placeholder="Email"
						className="border-b border-white-primary pb-0.5 bg-transparent placeholder-current text-white-primary"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label
						htmlFor=""
						className="sr-only">
						Password
					</label>
					<input
						required
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						className="border-b border-white-primary pb-0.5 bg-transparent placeholder-current text-white-primary"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label
						htmlFor=""
						className="sr-only">
						Username
					</label>
					<input
						required
						type="text"
						name="username"
						id="username"
						placeholder="username"
						className="border-b border-white-primary pb-0.5 bg-transparent placeholder-current text-white-primary"
					/>
				</div>
				\{" "}
				<div className="flex flex-col gap-1">
					<label
						htmlFor=""
						className="sr-only">
						Username
					</label>
					<input
						required
						type="text"
						name="name"
						id="name"
						placeholder="name"
						className="border-b border-white-primary pb-0.5 bg-transparent placeholder-current text-white-primary"
					/>
				</div>
				<button type="submit">Log in</button>
			</form>
		</div>
	);
};
