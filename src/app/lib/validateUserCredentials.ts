import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";

import { User } from "@/types/types";

export const validateUserCredentials = async (user: User) => {
	if (!user) return;

	const { name, username, email, password } = user;

	// Check for existing users
	const userByEmail =
		await sql`SELECT * FROM users WHERE email = $1', [email])`;
	const userByUsername =
		await sql`SELECT * FROM users WHERE username = $1', [username]`;

	if (userByEmail) {
		return { succes: false, message: "User already exists with email" };
	}

	if (userByUsername)
		return { succes: false, message: "Username is already in use" };

	const encryptedPassword = await hashPassword(password as string);

	const validatedUser: User = {
		name,
		username,
		email,
		password: encryptedPassword as FormDataEntryValue,
	};

	return validatedUser;
};

const hashPassword = async (password: string) => {
	if (!password) return;

	return await bcrypt.hash(password, 10);
};
