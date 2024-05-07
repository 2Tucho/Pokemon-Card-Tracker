import React from "react";
import { shallow } from "enzyme";
import Cards from "./Cards";

describe("Cards", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Cards />);
    expect(wrapper).toMatchSnapshot();
  });
});
