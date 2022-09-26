import React from "react";
import { shallow } from "enzyme";
import ExpenseDaashboardPage from "../../components/ExpenseDaashboardPage";

test('should render ExpenseDaashboardPage', () => {
    const wrapper = shallow(<ExpenseDaashboardPage />);
    expect(wrapper).toMatchSnapshot();
})