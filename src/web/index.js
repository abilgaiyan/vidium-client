import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import App from './components/App';
// import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import FileUpload from "./components/FileUpload";
import Signout from './components/auth/Signout';
import Homepage from './components/Homepage'

const store = createStore(reducers, {
    auth: { authenticated: localStorage.getItem('token') }
}, applyMiddleware(reduxThunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Signup} />
                <Route path="/home" exact component={Homepage} />
                <Route path="/signup" component={Signup} />
                <Route path="/fileUpload" component={FileUpload} />
                <Route path="/signout" component={Signout} />
                <Route path="/signin" component={Signin} />
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
);