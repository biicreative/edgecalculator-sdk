// @flow

export const invokeOptions = (input: any, timeout: number) => {
  return {
    method: "POST",
    json: true,
    encoding: "utf8",
    timeout: timeout,
    body: input
  };
};
