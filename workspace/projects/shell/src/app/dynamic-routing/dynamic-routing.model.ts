export interface DynamicRoutingConfig {
  [key: string]: MicrofrontendConfig;
}

export interface MicrofrontendConfig {
  remoteEntry: string;
  exposedModule: string;
  routePath: string;
  nameClass: string;
}
