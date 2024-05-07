import React from "react";
import { shallow } from "enzyme";
import NoLogged from "./NoLogged";

describe("NoLogged", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NoLogged />);
    expect(wrapper).toMatchSnapshot();
  });
});
