import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { HttpClient } from '@angular/common/http';
import { EnviromentService } from 'src/app/shared/services/enviroment.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUsuarioLoginRequest } from '../models/usuario-login-request';
import { Constantes } from 'src/app/shared/util/constantes';
import { IUsuarioLoginResponse } from '../models/usuario-login-response';
import { IJsonResult } from 'src/app/shared/models/json-result.model';
import { GlobalService } from 'src/app/shared/services/global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  /**
   * Constructor
   * @param httpClient Instancia para invocación a servicios
   * @param enviromentService Instancia para invocación el uri dependiendo del ambiente
   * @param router Instancia para manejo de rutas
   */
  constructor(
    protected httpClient: HttpClient,
    private enviromentService: EnviromentService,
    public globalService: GlobalService,
    private router: Router) {
    super(httpClient);
  }

  /**
   * Permite autenticarse
   * @param usuarioLoginRequest Objeto que envía datos para realizar autenticación
   */
  login(usuarioLoginRequest: IUsuarioLoginRequest): Observable<IJsonResult<IUsuarioLoginResponse>> {
    const url = `${this.enviromentService.apiUrl}login/autenticar`;
    this.globalService.removeAuthorizationToken();
    return this.httpClient.post<IJsonResult<IUsuarioLoginResponse>>(url, usuarioLoginRequest, this.httpOptions);
  }

  logOut() {
    this.globalService.removeAuthorizationToken();
    this.router.navigate([Constantes.RutaAuth]);
  }
}
