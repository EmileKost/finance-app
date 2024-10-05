import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<main className="h-screen w-full overlfow-hidden flex items-center px-3 md:px-20">
			{children}
		</main>
	);
}
