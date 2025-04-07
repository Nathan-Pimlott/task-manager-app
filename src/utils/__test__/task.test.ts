import { describe, expect, test } from "vitest";

import { buildTask, filterOutTask, updateTaskStatus } from "../task";

describe("Task utils", () => {
  describe("Build task", () => {
    test("should correctly build up a task if a title and description are provided", () => {
      expect(buildTask("test", "test", "test")).toHaveProperty("id");
    });
    test("should return falsy if title is an empty string", () => {
      expect(buildTask("", "test", "test")).toBeFalsy();
    });
    test("should return falsy if description is an empty string", () => {
      expect(buildTask("test", "", "test")).toBeFalsy();
    });
    test("should return falsy if taskListName is an empty string", () => {
      expect(buildTask("test", "test", "")).toBeFalsy();
    });
  });
  describe("Filter out task", () => {
    test("should correctly filter out a task from an array", () => {
      // @ts-ignore Don't need other properties, just id.
      expect(filterOutTask([{ id: "123" }, { id: "234" }], "123").length).toBe(
        1
      );
    });
    test("should correctly return an empty array if tasks only contains 1 item", () => {
      // @ts-ignore Don't need other properties, just id.
      expect(filterOutTask([{ id: "123" }], "123").length).toBe(0);
    });
    test("should return initial array if item can't be found", () => {
      // @ts-ignore Don't need other properties, just id.
      expect(filterOutTask([{ id: "234" }, { id: "345" }], "123").length).toBe(
        2
      );
    });
  });
  describe("Update task status", () => {
    test("should correctly filter out a task from an array", () => {
      expect(
        // @ts-ignore Don't need other properties, just id.
        updateTaskStatus([{ id: "123", status: "todo" }], "123", "done")[0]
          .status
      ).toBe("done");
    });
    test("should return the initial array if the id can't be found", () => {
      expect(
        // @ts-ignore Don't need other properties, just id.
        updateTaskStatus([{ id: "123", status: "todo" }], "234", "done")[0]
          .status
      ).toBe("todo");
    });
  });
});
