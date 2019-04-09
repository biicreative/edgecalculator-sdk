// @flow

export const invokeOptions = (input: any, timeout: number) => {
  return {
    method: "POST",
    json: false,
    encoding: "utf8",
    timeout: timeout,
    body: input
  };
};
