import { describe, expect, test } from "@jest/globals";
import { v1 } from "./v1";

describe("v1 function", () => {
  test("check the validity of the uuid that we get from v1", () => {
    const uuid = v1();

    // Define a regular expression to match UUID version 1 format
    const uuidRegex =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-1[0-9a-fA-F]{3}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

    expect(uuid).toMatch(uuidRegex);
  });
});
