import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { App } from './ui/App';

const history = createBrowserHistory({});

ReactDOM.render(
  <Router history={history}>
    <App history={history} />
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
