import React, { Suspense, lazy } from 'react';
import { RouteProps } from "react-router";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";

interface RouteParams extends RouteProps {
  id: string
}

const ListPage = lazy(() => import('../Views/ListPage'));
const DetailsPage = lazy(() => import('../Views/DetailsPage'));
const NewRecordPage = lazy(() => import('../Views/NewRecordPage'));

const routeMap: RouteParams[] = [
  {
    id: 'List page',
    exact: true,
    path: '/',
    component: ListPage
  },
  {
    id: 'Details page',
    exact: true,
    path: '/details/:id',
    component: DetailsPage
  },
  {
    id: 'New records page',
    exact: true,
    path: '/new-record',
    component: NewRecordPage
  },
];

const App = () => (
  <HelmetProvider>
    <Router>
      {/* TODO Do a better loading component */}
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routeMap.map(routeProp => <Route key={routeProp.id} {...routeProp}/> )}
        </Switch>
      </Suspense>
    </Router>
  </HelmetProvider>
);

export default App;