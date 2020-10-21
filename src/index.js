//2020-10-20 React-Redux綁定用最上層元件
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App29 from './App29';
import * as serviceWorker from './serviceWorker';
//第一步匯入createStore,combineReducers API
import { createStore, applyMiddleware, compose } from 'redux';
//combineReducers這個不會入的話時光旅除錯會無法除錯

// 導入redux-thunk中介軟體
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';

//第二步，寫出reducer
import { rootReducer } from './reducers';

//給定目前的狀態跟動作，回傳一個新的狀態
//action={type: 'ADD_VALUE",value:1}
//action={type: 'MINUS_VALUE",value:1}
// function counter(state = 99, action) {
//   switch (action.type) {
//     case 'ADD_VALUE':
//       return state + action.value;
//     case 'MINUS_VALUE':
//       return state - action.value;
//     default:
//       return state;
//   }
// }

//action={type: 'ADD_VALUE",item:{id,text,comleted,edited}}
// function todos(state = [], action) {
//   return state;
// }
//reducer要先寫出來再建立store

//第二之一：合併所有的reducers成一個大的reducer
// const rootReducer = combineReducers({
//   counter,
// });

//第三步：由rootReducer建立store
// const store = createStore(
//   rootReducer /* preloadedState, */,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// 在建立store時要加入中介軟體
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    {/* 最上層的react與redux綁定用的元件，屬性即為上面建立的store */}
    <Provider store={store}>
      <App29 />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
