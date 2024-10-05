import { signup } from "@/app/actions/authentication";

export const RegisterForm = () => (
	<div>
		<form
			method="GET"
			action={signup}>
			<div>
				<label htmlFor="">Email</label>
				<input
					type="text"
					name="email"
					id="email"
				/>
			</div>
			<div>
				<label htmlFor="">Password</label>
				<input
					type="password"
					name="password"
					id="password"
				/>
			</div>
			<div>
				<label htmlFor="">Username</label>
				<input
					type="text"
					name="username"
					id="text"
				/>
			</div>
			<button type="submit">SUBMIT</button>
		</form>
	</div>
);
