import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		// @ts-ignore Weird UMD global error because TS14 not supporting Fragments shorthand <> right now.
		<>
			<main>{children}</main>
		</>
	);
}
