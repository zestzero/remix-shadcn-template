import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("utils", () => {
  it("should return a string with the class names", () => {
    const result = cn("class1", "class2", "class3");
    expect(result).toEqual("class1 class2 class3");
  });
});
