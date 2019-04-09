// @flow
import { invokeSolve } from "./solve";

export class Problem {
  config: {
    gateway: string,
    timeout: number
  };
  question: string;
  constructor(gwURL: string, timeout: number, question: string) {
    this.config = {
      gateway: gwURL,
      timeout: timeout
    };
    this.question = question;
  }

  solve = async () => {
    const { status, result } = await invokeSolve(this.config, this.question);
    if (status) {
      return result;
    }
    return "";
  };
}
