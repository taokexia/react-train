import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';
import CommentsReducer from './component-v3/reducer/comments'
import {Provider} from 'react-redux';
import ComponentApp from './component-v3/container/CommentApp';
import * as serviceWorker from './serviceWorker';

const store = createStore(CommentsReducer);

ReactDOM.render(
     <Provider store={store}>
         < ComponentApp /> 
     </Provider>
     , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();