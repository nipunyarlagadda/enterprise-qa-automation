import { Client } from "pg";

export async function connectDatabase() {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "nipun1234",
    database: "qa_database",
  });

  await client.connect();

  return client;
}
