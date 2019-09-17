import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import App from './../App';
import Home from './../components/Home';
import World from './../components/World';

const Root = () => (

    <p>
        <Switch>
            <Route
                path="/"
                render={() => (
                    <App>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/home" component={Home} />
                            <Route path="/world" component={World} />
                            {/*路由不正确时，默认跳回home页面*/}
                            <Route render={() => <Redirect to="/" />} />
                        </Switch>
                    </App>
                )}
            />
        </Switch>
    </p>

);

export default Root;