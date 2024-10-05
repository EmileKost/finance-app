"use server";

export const signup = async (formData: FormData) => {
	if (!formData) return;

	console.log(formData);
};

export const login = async (formData: FormData) => {
	if (!formData) return;

	console.log({ formData });
};

// This is a server action
// - Make API call to DB here and send the appropriate RES to user back
// TODO: Make connection with DB (postgres)
