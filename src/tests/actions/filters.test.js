import moment from "moment";
import {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate
} from "../../actions/filters";

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
});

test('should generate set text filter action obeject with text value', () => {
    const action = setTextFilter('testing');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'testing'
    })
});

test('should generate set text filter action object with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})
test('should sort the filter by amount action object', () => {
    const action= sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    });
});

test('should sort the filter by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
})