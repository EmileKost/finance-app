import { sql } from "@vercel/postgres";

import { User } from "@/types/types";

export const matchUserAuth = async (user: User) => {
	if (!user) throw new Error("Could not find a user");

	try {
		const users = await sql`SELECT * FROM users`;
		const { rows } = users;

		rows.forEach((existingUser) => {
			if (
				user.email === existingUser.email ||
				user.username === existingUser.username
			) {
				return null;
			} else {
				return user;
			}
		});
	} catch (err) {
		console.log(err);
	}
};
