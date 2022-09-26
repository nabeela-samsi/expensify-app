import moment from "moment";
import expensesReducer from "../../reducers/expenses";
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state =expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove the expenses if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        description: 'coffee Bill',
        amount:1300,
        createdAt: moment(0).add(2, "days").valueOf(),
        note:''
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        action.expense
    ]);
});

test('should edit an expense', () => {
    const updates = {
        note:'my first array'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([{...expenses[0], ...updates}, expenses[1], expenses[2]]);
});

test('should not edit expense if expense not found', () => {
    const updates = {
        note:'my notEditable array'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1234',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
})