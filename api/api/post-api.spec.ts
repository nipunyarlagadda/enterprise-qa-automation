import { test, expect } from "@playwright/test";

test("POST API should create a new post", async ({ request }) => {
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      data: {
        title: "QA Automation Test",
        body: "Created using Playwright API testing",
        userId: 1,
      },
    },
  );

  // Validate HTTP status
  expect(response.status()).toBe(201);

  // Convert response to JSON
  const post = await response.json();

  // Validate returned data
  expect(post.title).toBe("QA Automation Test");
  expect(post.body).toBe("Created using Playwright API testing");
  expect(post.userId).toBe(1);
});
