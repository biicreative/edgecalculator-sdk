jest.mock("got"); // got is now a mock function

import "@babel/polyfill";
import got from "got";
import { Client } from "../src/sdk";

beforeEach(() => {
  // Cleaning up between tests
  got.mockClear();
});

it("should solve a problem", async () => {
  got.mockReturnValue(Promise.resolve({ body: "15 cats" }));

  const options = {
    baseUrl: "https://GATEWAY"
  };
  const client = new Client(options);
  const problem = client.problem(
    "Jack has 8 cats. Jill has 7 cats. How many cats are there in all?"
  );
  const answer = await problem.solve();

  expect(got).toHaveBeenCalledTimes(1);
  expect(got).toHaveBeenCalledWith("https://GATEWAY/solve", {
    body: {
      facts: ["8 cats", "7 cats"],
      question: "How many cats are there in all?"
    },
    encoding: "utf8",
    json: false,
    method: "POST",
    timeout: 10000
  });

  expect(answer).toEqual("15 cats");
});
