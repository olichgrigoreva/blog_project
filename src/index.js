import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import Test from './components/test';
import Post from './components/post';
import AddPost from './services/addPost';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/test" component={Test} />
            <Route path="/create" component={AddPost} />
            <Route path="/post/:id" component={Post} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
