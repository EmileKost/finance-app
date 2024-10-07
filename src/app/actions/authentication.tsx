"use server";

import { db, sql } from "@vercel/postgres";

import { User } from "@/types/types";
import { validateUserCredentials } from "../lib/validateUserCredentials";

export const signup = async (formData: FormData) => {
	if (!formData) throw new Error("Error: Required fields are missing");

	const userInput: User = {
		name: formData.get("name"),
		username: formData.get("username"),
		email: formData.get("email"),
		password: formData.get("password"),
	};

	const user = await validateUserCredentials(userInput);

	console.log(user);
};

export const login = async (formData: FormData) => {
	if (!formData) return;
};

// TODO: Fix postgress shizzle
// await sql`INSERT INTO "users" (name, username, email, password) VALUES (${user.name}, ${user.username}, ${user.email}, ${user.password})`;
