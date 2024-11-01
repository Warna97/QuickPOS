import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { appRoutingProviders } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    ...appRoutingProviders, // Spread the routing providers here
    provideClientHydration(),
    provideAnimationsAsync('noop')
  ]
};
