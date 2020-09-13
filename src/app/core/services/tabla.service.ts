import { Injectable } from '@angular/core';
import { EnviromentService } from 'src/app/shared/services/enviroment.service';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/shared/services/base.service';
import { Observable } from 'rxjs';
import { IJsonResult } from 'src/app/shared/models/json-result.model';

@Injectable({
  providedIn: 'root'
})
export class TablaService extends BaseService {
  /**
   * Constructor
   * @param httpClient Instancia para invocación a servicios
   * @param enviromentService Instancia para invocación el uri dependiendo del ambiente
   * @param router Instancia para manejo de rutas
   */
  constructor(
    protected httpClient: HttpClient,
    private enviromentService: EnviromentService) {
    super(httpClient);
  }

  getBermas(): Observable<IJsonResult<any>> {
    const url = `${this.enviromentService.apiUrl}Tabla/berma`;
    return this.httpClient.get<IJsonResult<any>>(url);
  }

  getVias(): Observable<IJsonResult<any>> {
    const url = `${this.enviromentService.apiUrl}Tabla/via`;
    return this.httpClient.get<IJsonResult<any>>(url);
  }

  getConstrucciones(): Observable<IJsonResult<any>> {
    const url = `${this.enviromentService.apiUrl}Tabla/construccion`;
    return this.httpClient.get<IJsonResult<any>>(url);
  }

  getOrdenes(): Observable<IJsonResult<any>> {
    const url = `${this.enviromentService.apiUrl}Tabla/orden`;
    return this.httpClient.get<IJsonResult<any>>(url);
  }

  getRedes(): Observable<IJsonResult<any>> {
    const url = `${this.enviromentService.apiUrl}Tabla/red`;
    return this.httpClient.get<IJsonResult<any>>(url);
  }
}
