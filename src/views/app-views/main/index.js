import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Main = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/main/dashboard`} />
      <Route path={`${match.url}/dashboard`} component={lazy(() => import(`./dashboard`))} />
      <Route path={`${match.url}/catalog`} component={lazy(() => import(`./catalog`))} />
      <Route path={`${match.url}/orders`} component={lazy(() => import(`./orders`))} />
      <Route path={`${match.url}/clients`} component={lazy(() => import(`./clients`))} />
      <Route path={`${match.url}/banners`} component={lazy(() => import(`./banners`))} />
      <Route path={`${match.url}/promocods`} component={lazy(() => import(`./promocods`))} />
      <Route path={`${match.url}/offline-points`} component={lazy(() => import(`./offline-points`))} />
      <Route path={`${match.url}/staff`} component={lazy(() => import(`./staff`))} />
      <Route path={`${match.url}/mailing`} component={lazy(() => import(`./mailing`))} />
    </Switch>
  </Suspense>
);

export default Main;
