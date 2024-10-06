import { ReactNode } from "react";

import { TheHeaderAuthentication } from "../../components/TheHeaderAuthentication";

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		// @ts-ignore Weird UMD global error because TS14 not supporting Fragments shorthand <> right now.
		<>
			<TheHeaderAuthentication />
			<main className="h-screen w-screen overlfow-hidden flex items-center px-3 md:px-20 bg-black-primary">
				{children}
			</main>
		</>
	);
}
