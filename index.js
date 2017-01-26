import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store'

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import InnerComponent from './components/InnerComponent.jsx';
import Claims from './components/claims/claims.jsx';
import Claim from './components/claim/claim.jsx';

const appRouter = (
    <Router history={hashHistory}>
        <Route path="/" component={InnerComponent}>
            <IndexRoute component={Claims}/>
            <Route path="/:id" component={Claim}/>
        </Route>
    </Router>
);

render(<Provider store={store}>
            {appRouter}
       </Provider>,
    document.getElementById('app')
);
