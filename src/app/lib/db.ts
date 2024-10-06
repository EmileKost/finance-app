import { db } from "@vercel/postgres";

async function connectToDb() {
	const client = await db.connect();
	await client.sql`SELECT 1`;
}

connectToDb();
