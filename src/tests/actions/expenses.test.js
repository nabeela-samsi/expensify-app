import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '1234abcd'});
    //to verify objects/arrays we should use toEqual and toBe is used while verifing booleans or string
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1234abcd'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('1234abcd',{note: 'New note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1234abcd',
        updates: {
            note: 'New note value'
        }
    })
});

test('should setup add expense action object with no default values',() => {
    const expenseData = {
        description: 'Test Bill',
        amount: 2400,
        createdAt: 1000,
        note: 'Test bill data'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    })
})