import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import routes from './routes/routes';

// eslint-disable-next-line
const Root = ({ store, history }) => (
  <Provider store={ store }>
    <ConnectedRouter history={history}>
      { routes }
    </ConnectedRouter>
  </Provider>
);

export default Root;
