import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
//import { mergeApplicationConfig, ApplicationConfig, CSP_NONCE } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

//const nonce = crypto.getRandomValues(new Uint8Array(16));
/*,{
      provide: CSP_NONCE,
      useValue: nonce
    }*/
    
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
