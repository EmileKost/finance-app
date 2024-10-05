import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
	// const token = req.cookies.get("authToken");
	const token = true;

	if (
		!token &&
		req.nextUrl.pathname !== "/login" &&
		req.nextUrl.pathname !== "/register"
	) {
		return NextResponse.redirect(new URL("/login", req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!login|register).*)"], // Matches all routes except /login and /register
};
