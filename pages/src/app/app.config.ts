import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withViewTransitions({
        onViewTransitionCreated: ({ transition, to }) => {
          const path = to.routeConfig?.path ?? '';
          const dir = (path.startsWith('post') || path.startsWith('project')) ? 'vt-forward' : 'vt-back';
          document.documentElement.classList.add(dir);
          transition.finished.then(() =>
            document.documentElement.classList.remove('vt-forward', 'vt-back')
          );
        },
      }),
    ),
    provideHttpClient(),
  ],
};
