import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Catalog = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/clients/clients-list`} />
      <Route path={`${match.url}/clients-list`} component={lazy(() => import(`./clients-list`))} />
      <Route path={`${match.url}/clients-group`} component={lazy(() => import(`./clients-group`))} />
    </Switch>
  </Suspense>
);

export default Catalog;
