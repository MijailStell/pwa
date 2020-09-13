import { EnviromentService } from './enviroment.service';

export const EnviromentServiceFactory = () => {
  // Create env
  const env = new EnviromentService();

  // Read environment variables from browser window
  const defaultWindow = {
    __env: null
  };
  Object.assign(defaultWindow, window);
  const browserWindow = defaultWindow || defaultWindow;
  const browserWindowEnv = browserWindow.__env || {};

  // Assign environment variables from browser window to env
  // In the current implementation, properties from env.js overwrite defaults from the EnvService.
  // If needed, a deep merge can be performed here to merge properties instead of overwriting them.
  for (const key in browserWindowEnv) {
    if (browserWindowEnv.hasOwnProperty(key)) {
      env[key] = defaultWindow.__env[key];
    }
  }

  return env;
};

export const EnviromentServiceProvider = {
  provide: EnviromentService,
  useFactory: EnviromentServiceFactory,
  deps: []
};