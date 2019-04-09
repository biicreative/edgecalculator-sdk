// @flow
import got from "got";
import { invokeOptions } from "../global";
import * as Sentry from "@sentry/node";

export const invokeSolve = async (
  config: {
    gateway: string,
    timeout: number
  },
  question: string
) => {
  try {
    const options = invokeOptions(question, config.timeout);
    const response = await got(`${config.gateway}/solve`, options);
    return { status: true, result: response.body };
  } catch (err) {
    Sentry.captureException(err);
    console.error("an error occured while executing the request:", err);
    let result: any = {};
    return { status: false, result: result };
  }
};
