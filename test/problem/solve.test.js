jest.mock("got"); // got is now a mock function

import "@babel/polyfill";
import got from "got";
import { invokeSolve } from "../../src/problem/solve";

beforeEach(() => {
  // Cleaning up between tests
  got.mockClear();
});

it("should solve a problem", async () => {
  got.mockReturnValue(Promise.resolve({ body: "ANSWER" }));

  const config = {
    gateway: "https://GATEWAY",
    timeout: 200
  };
  const result = await invokeSolve(config, [], "QUESTION");

  expect(got).toHaveBeenCalledTimes(1);
  expect(got).toHaveBeenCalledWith("https://GATEWAY/solve", {
    body: {
      facts: [],
      question: "QUESTION"
    },
    encoding: "utf8",
    json: false,
    method: "POST",
    timeout: 200
  });
  expect(result.status).toBe(true);
  expect(result.result).toBe("ANSWER");
});
