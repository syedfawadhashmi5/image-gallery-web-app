import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

});
