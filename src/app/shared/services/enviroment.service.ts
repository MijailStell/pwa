import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviromentService {
  // The values that are defined here are the default values that can
  // be overridden by config.js

  // API url
  public urlBaseServiciosApi = 'http://localhost/api/';
  public urlBaseServicios = 'http://localhost/';

  // Whether or not to enable debug mode
  public enableDebug = true;
  public timeOutNotifications = 5000;

  constructor() {}
}
