import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//provider allows us to provide the store to all of the components that makes up the application
import AppRouter from './routers/AppRouter';
import store from './store/configureStore';
import { addExpense } from './actions/expenses';
import selectExpenses from './selector/expenses';
import 'normalize.css/normalize.css'; //this removes the browser styles, and considers the styles given by the user
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';


store.dispatch(addExpense({description:"WaterBill", amount:4500}));
store.dispatch(addExpense({description:"gasBill", createdAt:1000}));
store.dispatch(addExpense({description:"Rent", amount:109500}));

const state = store.getState();
const visibleExpenses = selectExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
console.log(store.getState());

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('App'));
