import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Catalog = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/offline-points/adress`} />
      <Route path={`${match.url}/adress`} component={lazy(() => import(`./adress`))} />
      <Route path={`${match.url}/geozone`} component={lazy(() => import(`./geozone`))} />
    </Switch>
  </Suspense>
);

export default Catalog;
