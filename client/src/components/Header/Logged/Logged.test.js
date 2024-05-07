import React from "react";
import { shallow } from "enzyme";
import Logged from "./Logged";

describe("Logged", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Logged />);
    expect(wrapper).toMatchSnapshot();
  });
});
