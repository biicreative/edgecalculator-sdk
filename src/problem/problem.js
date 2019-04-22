// @flow
import { invokeSolve } from "./solve";
import nlp from "compromise";

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

  parse = () => {
    // "understand" the question with a nlp lib
    const doc = nlp(this.question);

    // find the "named things"
    const facts: Array<string> = doc
      .match("#Value #Noun")
      .trim()
      .out("array");

    // find the real question
    const q: string = doc.questions().out();

    return { facts: facts, question: q };
  };

  solve = async () => {
    const { facts } = this.parse();
    const { status, result } = await invokeSolve(
      this.config,
      facts,
      this.question
    );
    if (status) {
      return result;
    }
    return "";
  };
}
