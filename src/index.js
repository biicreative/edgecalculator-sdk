// @flow
import "@babel/polyfill";
import * as Sentry from "@sentry/node";
import { version } from "../package.json";

export { Client } from "./sdk";

// Configure the error reporting system
Sentry.init({
  dsn: "https://6ab848dfdbac4e08b761314392148bb4@sentry.io/1434690",
  release: `edgecalculator-sdk@${version}`
});
