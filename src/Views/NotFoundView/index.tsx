import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ROUTE_ROOT } from '../../App/constants';

const NotFoundView = () => (
  <>
    <Helmet title="Not found | Present Connection" />
    <div className="NotFound">
      <h2>Page not found</h2>
      <p>Perhaps we can intrest you in our <Link to={ROUTE_ROOT}>list</Link></p>
    </div>
  </>
);

export default NotFoundView;