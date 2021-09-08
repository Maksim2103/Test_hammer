import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Catalog = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/catalog/goods`} />
      <Route path={`${match.url}/goods`} component={lazy(() => import(`./goods`))} />
      <Route path={`${match.url}/category`} component={lazy(() => import(`./category`))} />
      <Route path={`${match.url}/collections`} component={lazy(() => import(`./collections`))} />
      <Route path={`${match.url}/combo`} component={lazy(() => import(`./combo`))} />
    </Switch>
  </Suspense>
);

export default Catalog;
