import React from "react";
import { mount } from "enzyme";
import Header from "./Header";

describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Header />);
  });

  test("render the title of name", () => {
    expect(wrapper.find("span").text()).toContain("Photo Album App");
  });

});