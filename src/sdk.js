// @flow
import { Problem } from "./problem";

export class Client {
  gatewayURL: string;
  timeout: number;
  constructor(options: { baseUrl: string, timeout?: number }) {
    this.gatewayURL = options.baseUrl;
    this.timeout = options.timeout || 10000;
  }

  problem(question: string) {
    //TODO: add more validations
    if (question == "") {
      throw Error("invalid question");
    }
    return new Problem(this.gatewayURL, this.timeout, question);
  }
}
