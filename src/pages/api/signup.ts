import { MongoClient, Db, Collection } from "mongodb";
import type { APIRoute } from "astro";
import { parse } from "querystring";

import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const uri: string = import.meta.env.MONGODB_URI || "";
const dbName: string = import.meta.env.MONGODB_DB_NAME || "early-access";
const collectionName: string =
  import.meta.env.MONGODB_COLLECTION_NAME || "emails";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

interface SignUp {
  email: string;
  signupDate: Date;
}

async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  if (!uri) {
    throw new Error("MONGODB_URI is not defined in the environment variables.");
  }

  const client: MongoClient = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export const POST: APIRoute = async ({ request }) => {
  let message: string = "";
  let isSuccess: boolean = false;

  try {
    const contentType = request.headers.get("content-type");
    let email: string = "";

    console.log("Received content type:", contentType);

    if (contentType?.includes("multipart/form-data")) {
      const formData = await request.formData();
      email = formData.get("email") as string;
    } else if (contentType === "application/x-www-form-urlencoded") {
      const body = await request.formData();
      email = body.get("email") as string;
    } else if (contentType === "application/json") {
      const body = await request.json();
      email = body.email;
    } else {
      throw new Error(`Unsupported content type: ${contentType}`);
    }
    console.log("Email received:", email);

    const { db } = await connectToDatabase();
    const collection: Collection<SignUp> = db.collection(collectionName);

    await collection.insertOne({ email, signupDate: new Date() });

    message = "Success! Thank you for signing up.";
    isSuccess = true;

    return new Response(
      JSON.stringify({
        message,
        isSuccess,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("Error occurred:", error);
    message = "An error occurred. Please try again.";
    isSuccess = false;
    return new Response(
      JSON.stringify({
        message,
        isSuccess,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
