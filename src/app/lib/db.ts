import { db } from "@vercel/postgres";

async function connectToDb() {
	try {
		const client = await db.connect();
		await client.sql`SELECT 1`;
		console.log("DB Connected");
	} catch (err) {
		console.log(err);
	}
}

connectToDb();
