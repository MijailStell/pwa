import { EnviromentService } from './enviroment.service';
import { Constantes } from '../util/constantes';

export const EnviromentServiceFactory = () => {
  // Create Enviroment
  const enviroment = new EnviromentService();

  // Read Environment variables from browser window
  const browserWindow = window || {};
  const browserWindowEnviromet = browserWindow[Constantes.Enviroment] || {};

  // Assign Environment variables from browser window to Enviroment
  // In the current implementation, properties from config.js overwrite defaults from the EnvService.
  // If needed, a deep merge can be performed here to merge properties instead of overwriting them.
  for (const key in browserWindowEnviromet) {
    if (browserWindowEnviromet.hasOwnProperty(key)) {
      enviroment[key] = window[Constantes.Enviroment][key];
    }
  }

  return enviroment;
};

export const EnviromentServiceProvider = {
  provide: EnviromentService,
  useFactory: EnviromentServiceFactory,
  deps: []
};
