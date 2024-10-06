"use server";

import { sql } from "@vercel/postgres";

// TODO: Fix types
export const signup = async (formData: FormData) => {
	if (!formData) return;

	console.log(formData);
};
const emails = ["test@test"];
export const login = async (formData: FormData) => {
	if (!formData) return;

	const email = formData.get("email");
};

// This is a server action
// - Make API call to DB here and send the appropriate RES to user back
// TODO: Make connection with DB (postgres)

// Psuedo
// - if !formData return
// - Check if email exists and check if valid, if so throw error
// - else create form object
// - Save to DB
