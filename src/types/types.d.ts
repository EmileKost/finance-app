export type Route = {
	[key: string]: {
		title: string;
		href: string;
	};
};

export type User = {
	name: FormDataEntryValue | null;
	username: FormDataEntryValue | null;
	email: FormDataEntryValue | null;
	password: FormDataEntryValue | null;
};
