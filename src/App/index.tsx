import React, { Suspense, lazy } from 'react';
import { RouteProps } from "react-router";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import Header from "../Components/Header";
import Loader from '../Components/Loader';
import { ROUTE_DETAILS_PAGE, ROUTE_NEW_RECORDS, ROUTE_ROOT } from './constants';

interface RouteParams extends RouteProps {
  id: string
}

const routeMap: RouteParams[] = [
  {
    id: 'List page',
    exact: true,
    path: ROUTE_ROOT,
    component: lazy(() => import('../Views/ListPage'))
  },
  {
    id: 'Details page',
    exact: true,
    path: ROUTE_DETAILS_PAGE,
    component: lazy(() => import('../Views/DetailsPage'))
  },
  {
    id: 'New records page',
    exact: true,
    path: ROUTE_NEW_RECORDS,
    component: lazy(() => import('../Views/NewRecordPage'))
  },
];

const App = () => (
  <HelmetProvider>
    <Router>
      {/* TODO Do a better loading component */}
      <Suspense fallback={<div className='LoaderWrapper'><Loader /></div>}>
        <Header />
        <Switch>
          {routeMap.map(routeProp => <Route key={routeProp.id} {...routeProp}/> )}
        </Switch>
      </Suspense>
    </Router>
  </HelmetProvider>
);

export default App;