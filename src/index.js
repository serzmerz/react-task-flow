import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware, createStore} from 'redux';

import {Route} from 'react-router-dom';
import {Router} from 'react-router';
import thunk from 'redux-thunk';

import history from './utils/history';
import reducer from './reducers';
import TableComponent from "./components/Table/index";
import InfoComponent from "./components/Info";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
syncHistoryWithStore(history, store);


ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={history}>
                <App>
                    <Route exact path="/" component={TableComponent} />
                    <Route path="/info/:id" component={InfoComponent} />
                </App>
            </Router>
        </Provider>
    </MuiThemeProvider>
    , document.getElementById('root'));
registerServiceWorker();
