import { test, expect } from "@playwright/test";

test("GET user API should return user data", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users/1",
  );

  // Verify HTTP status code
  expect(response.status()).toBe(200);

  // Convert response to JSON
  const user = await response.json();

  // Validate response data
  expect(user.id).toBe(1);
  expect(user.name).toBeTruthy();
  expect(user.email).toBeTruthy();
});
