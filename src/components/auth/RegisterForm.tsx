import { signup } from "@/app/actions/authentication";

export const RegisterForm = () => (
	<div className="flex flex-col gap-12">
		<h2 className="text-white-primary text-2xl md:text-5xl">Sign up</h2>
		<form
			method="GET"
			action={signup}
			className="max-w-[650px] flex flex-col gap-4 md:gap-8">
			<div className="flex flex-col gap-1">
				<label
					htmlFor=""
					className="sr-only">
					Email
				</label>
				<input
					type="text"
					name="email"
					id="email"
					placeholder="Email"
					className="border-b border-white-primary pb-0.5 bg-transparent"
				/>
			</div>
			<div className="flex flex-col gap-1">
				<label
					htmlFor=""
					className="sr-only">
					Password
				</label>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Password"
					className="border-b border-white-primary pb-0.5 bg-transparent"
				/>
			</div>
			<div className="flex flex-col gap-1">
				<label
					htmlFor=""
					className="sr-only">
					Username
				</label>
				<input
					type="text"
					name="username"
					id="username"
					placeholder="username"
					className="border-b border-white-primary pb-0.5 bg-transparent"
				/>
			</div>
			<button type="submit">Log in</button>
		</form>
	</div>
);
