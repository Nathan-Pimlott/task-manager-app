import { describe, expect, test } from "vitest";

import { generateId } from "../common";

describe("Common utils", () => {
  test("should correctly generate an ID", () => {
    expect(typeof generateId()).toBe("string");
  });
});
