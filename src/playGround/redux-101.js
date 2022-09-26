import { createStore } from "redux";

//Action generators are functions that returns action object

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type:'DECREMENT',
    decrementBy
})

const resetCount= () => ({
    type:'RESET'
});

const setCount = ({count} = {}) => ({
    type:'SET',
    count
})

//Reducers, reducres perform the action, where as action acts as carrier and sends what action needs to be performed
//1. Reducers are pure function.
//Pure function means that the output is completly depended on what input is passed. OR the function is not interacting with any variable outside of the function
//Impure function means that output is not completly depended on passed input, inside function we might define the other values which helps in generating the output. OR the function is interacting with any variable outside of the function
//2. Never change the state or action

const countReducer = (state = { count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
}

const store = createStore(countReducer);

//subscribe function is called every single time the store properties are changed
store.subscribe(() => {
    //getState returns the current state properties
    console.log(store.getState());
});

//following code to unsubscribe, the state will be changing but we will not notify about the change.
// const unsubscribe = store.subscribe(() => {
//     store.subscribe(() => {
//         console.log(store.getState())
//     })
// })

//Actions - it is more than object that gets sent to the store, we will have string of actions which changes the object over
//types of actions: increment, decrement, reset
//the action key will be in capitals, and if we want to send two different words we need to use '_' rather then space

//dispatch allows as to send the action object to the store
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

// store.dispatch({
//     type: 'INCREMENT'
// });

store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(incrementCount());

// store.dispatch({
//     type: 'RESET'
// });

store.dispatch(resetCount());

// store.dispatch({
//     type: 'DECREMENT'
// });

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:10}));

// store.dispatch({
//     type: 'SET',
//     count: 101
// })

store.dispatch(setCount({count:101}));

// in store object the action gets passed as second argument