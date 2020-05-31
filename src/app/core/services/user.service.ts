import { Injectable } from '@angular/core';
import { BaseCrudService } from 'src/app/shared/services/base-crud.service';
import { EnviromentService } from 'src/app/shared/services/enviroment.service';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';
import { IJsonResult } from 'src/app/shared/models/json-result.model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseCrudService<Usuario> {
  constructor(
    public enviromentService: EnviromentService,
    public http: HttpClient
  ) {
    super(enviromentService, http, 'usuario');
  }

  getPermisos(id: number): Observable<IJsonResult<any>> {
    const url = `${
      this.enviromentService.urlBaseServiciosApi
    }Usuario/${id}/permisos`;
    return this.http.get<IJsonResult<any>>(url);
  }
}
