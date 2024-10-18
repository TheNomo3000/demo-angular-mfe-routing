import { inject, Injectable } from '@angular/core';
import {
  DynamicRoutingConfig,
  MicrofrontendConfig,
} from './dynamic-routing.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route, Router, Routes } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class DynamicRoutingService {
  private http: HttpClient = inject(HttpClient);
  private router: Router = inject(Router);

  constructor() {}

  private downloadConfigFile(): Observable<DynamicRoutingConfig> {
    return this.http
      .get('manifest.json')
      .pipe(map((response) => response as DynamicRoutingConfig));
  }

  private buildRouteMicrofrontend(app: MicrofrontendConfig): Route {
    return {
      path: app.routePath,
      children: [
        {
          path: '',
          loadChildren: () =>
            loadRemoteModule({
              remoteEntry: app.remoteEntry,
              exposedModule: app.exposedModule,
            })
              .then((module) => {
                console.log(module[app.nameClass]);
                return module[app.nameClass];
              })
              .catch(console.error),
        },
      ],
      data: app,
    };
  }

  generateRoutes(): Observable<DynamicRoutingConfig> {
    return this.downloadConfigFile().pipe(
      tap((config: DynamicRoutingConfig) => {
        const routes: Routes = [];
        console.log(config);

        Object.keys(config).forEach((key) => {
          const mfe = config[key];
          routes.push(this.buildRouteMicrofrontend(mfe));
        });

        this.router.resetConfig(routes);
        console.log(this.router.config);
        return config;
      })
    );
  }
}
