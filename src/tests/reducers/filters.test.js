import moment from "moment";
import filtersReducers from "../../reducers/filters";

test('should setup default filter values', () => {
    const state = filtersReducers(undefined, {type: '@@INT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducers(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
});

test('should set sortBy to date', () => {
    const currentState = {
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducers(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text='testing';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducers(undefined, action);
    expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
    const date = moment();
    const currentState = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    };
    const action = {
        type: 'SET_START_DATE',
        date
    };
    const state = filtersReducers(currentState, action);
    expect(state.startDate).toBe(date);
});

test('should set endDate filter', () => {
    const date = moment();
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const action = {
        type: 'SET_END_DATE',
        date
    };
    const state = filtersReducers(currentState,action);
    expect(state.endDate).toBe(date);
})