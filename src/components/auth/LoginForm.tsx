import { login } from "@/app/actions/authentication";

export const LoginForm = () => (
	<div className="flex flex-col gap-12">
		<h2 className="text-white-primary text-2xl md:text-5xl">Login</h2>
		<form
			method="POST"
			action={login}
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
					className="border-b border-white-primary pb-0.5 bg-transparent placeholder-current"
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
					className="border-b border-white-primary pb-0.5 bg-transparent placeholder-current"
				/>
			</div>
			<button type="submit">Log in</button>
		</form>
	</div>
);
