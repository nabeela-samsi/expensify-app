import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import ExpenseListItem from "../../components/ExpensesListItem";

test('should render ExpenseListItem', () => {
    const wrapper = shallow(<ExpenseListItem key ={expenses[0].id} {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});