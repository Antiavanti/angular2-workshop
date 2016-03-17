import {enableProdMode} from 'angular2/core';

if (WEBPACK_ENV === 'production') {
  enableProdMode();
}

import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';

import {App} from './app';

bootstrap(App, [ROUTER_PROVIDERS, FORM_PROVIDERS, HTTP_PROVIDERS]);
