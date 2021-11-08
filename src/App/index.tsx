import React, { Suspense, lazy } from 'react';
import { RouteProps } from "react-router";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet, HelmetProvider } from "react-helmet-async";
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
    component: lazy(() => import('../Views/ListView'))
  },
  {
    id: 'Details page',
    exact: true,
    path: ROUTE_DETAILS_PAGE,
    component: lazy(() => import('../Views/DetailsView'))
  },
  {
    id: 'New records page',
    exact: true,
    path: ROUTE_NEW_RECORDS,
    component: lazy(() => import('../Views/NewRecordView'))
  },
  {
    id: '404 page',
    component: lazy(() => import('../Views/NotFoundView'))
  },
];

const App = () => (
  <HelmetProvider>
    <Helmet title="Present Connection showcase"/>
    <Router>
      <Suspense
        fallback={
          <div className='LoaderWrapper'>
            <Loader />
          </div>
        }>
        <Header />
        <Switch>
          {routeMap.map(routeProp => <Route key={routeProp.id} {...routeProp}/> )}
        </Switch>
      </Suspense>
    </Router>
  </HelmetProvider>
);

export default App;