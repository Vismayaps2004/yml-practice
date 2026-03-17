import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { hi } from "../src/yml-practice.js";

describe("hey", () => {
  it("hi", () => {
    assertEquals(hi(), "hi");
  })
})