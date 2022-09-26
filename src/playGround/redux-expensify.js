import { createStore, combineReducers } from "redux";
import uuid from 'uuid'

//combineReducers is used when multiple reducers are used

//ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET_TEXT_FILTER
const setTextFilter = (updates) => ({
    type:'SET_TEXT_FILTER',
    updates
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

//SET_START_DATE
const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})

//SET_END_DATE
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})

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

//Filter Reducers
const filtersReducersDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducers = (state=filtersReducersDefaultState,action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                ...action.updates
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.date
            }
        default:
            return state
    }
};

//Get Visible Expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        //includes is used to check the case sensitive string matches with others or no and also it checks the substring matches to main string or no
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else {
            return a.createdAt <  b.createdAt ? -1 : 1
        }
    });
}

//store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducers
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description:'Rent', amount:100, createdAt:1000}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount:300, createdAt: -1000}));

// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}));
// store.dispatch(setTextFilter({text:'rent'}));
// store.dispatch(setTextFilter({text:''}));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
store.dispatch(setEndDate(99));

const demoState = {
    expenses: [{
        id: 'nvfkkvfmk',
        description: "jan rent",
        note: "This is my final settlement",
        amount: 938390,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};
