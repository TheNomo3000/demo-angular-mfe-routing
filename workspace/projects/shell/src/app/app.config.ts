import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DynamicRoutingService } from './dynamic-routing/dynamic-routing.service';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (dynamicRoutingService: DynamicRoutingService) => {
        return () => dynamicRoutingService.generateRoutes();
      },
      deps: [DynamicRoutingService],
      multi: true,
    },
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
