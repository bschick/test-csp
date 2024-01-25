import { ApplicationConfig,  } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

//CSP_NONCE
//const nonce = 'ew26COJKMG8qrA/bjTcl0w==';
/*,{
    provide: CSP_NONCE,
    useValue: nonce
  }*/
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
