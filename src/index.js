import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers";
import App from "./components/app"


const store = createStore(reducer);

ReactDOM.render(
 < Provider store={store}>
   <App/>
 </Provider>,
  document.getElementById('root')
);



// const store = createStore(reducer);
// const update = () => {
//   console.log(store.getState());
// };
// store.subscribe(update);
//
//
// store.dispatch(inc());
// store.dispatch(dec());
// store.dispatch(inc());
// store.dispatch(rnd());
// store.dispatch({type:'sdfsdf'});
// store.dispatch({type:'DEC'});
// store.dispatch({type:'INC'});
// store.dispatch(rnd());
//----------------------------------------------------
// const reducer = (state = 2, action) => {
//   switch (action.type) {
//     case 'inc':
//       return state + 1;
//     case 'dec':
//       return state - 1;
//     case 'rnd':
//       return state * action.payload;
//     default: return state;
//   }
// };
//
// let state= reducer(undefined, {});
//
// state = reducer(state, {type: 'inc'});
// state = reducer(state, {type: 'dec'});
// state = reducer(state, {
//   type: 'rnd',
//   payload: Math.floor(Math.random() * 100)});
// console.log(state);
