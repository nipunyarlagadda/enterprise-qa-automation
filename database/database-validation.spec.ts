import { test, expect } from "@playwright/test";
import { connectDatabase } from "./db-connection";

test("Validate user exists in database", async () => {
  const client = await connectDatabase();

  const result = await client.query(
    "SELECT * FROM users WHERE username = 'testuser'",
  );

  expect(result.rows.length).toBe(1);

  expect(result.rows[0].email).toBe("test@example.com");

  expect(result.rows[0].status).toBe("ACTIVE");

  await client.end();
});
