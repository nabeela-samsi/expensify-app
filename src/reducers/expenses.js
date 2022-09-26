//Expenses Reducers
const expensesReducerDefaultState = [];
const expensesReducer = (state=expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            //we are not using push since it will overwrite the state which we dont want to do it so we use concat => state.concat(action.expense), currently we are using spread operator
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                };
            })
        default:
            return state;
    }
}

export default expensesReducer;