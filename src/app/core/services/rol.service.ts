import { Injectable } from '@angular/core';
import { EnviromentService } from 'src/app/shared/services/enviroment.service';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/shared/services/base.service';
import { Observable } from 'rxjs';
import { IJsonResult } from 'src/app/shared/models/json-result.model';
import { TableResponse } from 'src/app/shared/models/table-response.model';

@Injectable({
  providedIn: 'root'
})
export class RolService extends BaseService {
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

  getAssignment(paginator: any): Observable<IJsonResult<TableResponse>> {
    const url = `${this.enviromentService.apiUrl}Rol/assignment`;
    return this.httpClient.post<IJsonResult<TableResponse>>(url, paginator);
  }

  getRoles(): Observable<IJsonResult<any>> {
    const url = `${this.enviromentService.apiUrl}Rol/all`;
    return this.httpClient.get<IJsonResult<any>>(url);
  }
}
