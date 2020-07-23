import React, { Component, Suspense } from 'react';
import { Link, Route } from 'react-router-dom';
const Pizza = React.lazy(() => import('./containers/Pizza'));
const Users = React.lazy(() => import('./containers/Users'));

class App extends Component {
    render() {
        return (
            <>
                <div>
                    <Link to="/">Users</Link>
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/" exact render={() => <Suspense fallback={<div>Loading...</div>}><Users /></Suspense>} />
                    <Route path="/pizza" render={() => <Suspense fallback={<div>Loading...</div>}><Pizza /></Suspense>} />
                </div>
            </>
        );
    }
}

export default App;