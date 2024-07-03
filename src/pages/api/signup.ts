import { MongoClient, Db, Collection } from "mongodb";
import type { APIRoute } from "astro";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const uri: string =
  "mongodb+srv://srivishalsivasubramanian:f%23%23ksociety@cluster0.3xlz28h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client: MongoClient = new MongoClient(uri);
const dbName: string = "early-access";
const collectionName: string = "emails";

let message: string = "";
let isSuccess: boolean = false;

interface SignUp {
  email: string;
  signupDate: Date;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get("content-type");
    let email: string = "";
    if (contentType === "application/x-www-form-urlencoded") {
      const bodyText = await request.formData();
      email = bodyText.get("email") as string;
    } else if (contentType === "application/json") {
      const body = await request.json();
      email = body.email;
    }

    await client.connect();
    const db: Db = client.db(dbName);
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
    console.error("Error:", error);
    message = "An error occurred. Please try again.";
    isSuccess = false;
    return new Response(
      JSON.stringify({
        message,
        isSuccess,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  } finally {
    await client.close();
  }
};
