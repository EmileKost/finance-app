"use server";

import { db, sql } from "@vercel/postgres";

export const signup = async (formData: FormData) => {
	if (!formData) return;

	const user = {
		name: formData.get("name"),
		username: formData.get("username"),
		email: formData.get("email"),
		password: formData.get("password"),
	};
	const name = "test";

	try {
		await sql`INSERT INTO "users" (name, username, email, password) VALUES (${name}, ${user.username}, ${user.email}, ${user.password})`;
		console.log("User succesfully added");
	} catch (err) {
		console.log(err);
	}
};

export const login = async (formData: FormData) => {
	if (!formData) return;
};

// This is a server action
// - Make API call to DB here and send the appropriate RES to user back
// TODO: Make connection with DB (postgres)

// Psuedo
// - if !formData return
// - Check if email exists and check if valid, if so throw error
// - else create form object
// - Save to DB
