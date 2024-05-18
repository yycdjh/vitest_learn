import { test, expect, describe, vi } from "vitest";
import { doubleUserAge } from "./third-party-modules";

import axios from "axios";

vi.mock("axios");

describe("third-party-modules", () => {
  test("doubleUserAge", async () => {
    vi.mocked(axios.get).mockResolvedValue({ name: "jd", age: 18 });
    const age = await doubleUserAge();
    expect(age).toBe(36);
  });
});
