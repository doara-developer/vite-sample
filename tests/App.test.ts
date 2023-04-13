import App from "@/App.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("App.vue", () => {
  test("app", async () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain("test");
  });
});
