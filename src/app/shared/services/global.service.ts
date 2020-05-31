import { EnviromentService } from './enviroment.service';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IActionForm } from 'src/app/core/models/action-form.model';
import { Constantes } from '../util/constantes';
import { Sidebar } from 'src/app/core/models/sidebar.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalService extends BaseService {
  permisos: IActionForm[];
  rutas: string[];

  /**
   * Constructor
   * @param httpClient Instancia para invocación a servicios
   */
  constructor(
    protected httpClient: HttpClient) {
    super(httpClient);
    this.permisos = [];
    this.rutas = [];
  }

  validarPermiso(codigo: string) {
    const permisos = this.getPermisos();
    if (permisos === undefined || permisos == null) {
      return false;
    } else {
      const permiso = permisos.find(p => p.codigo === codigo);
      return (permiso !== undefined);
    }
  }

  validarRuta(ruta: string) {
    const rutas = this.getRutas();
    if (rutas === undefined || rutas == null) {
      return false;
    } else {
      return (rutas.indexOf(ruta) !== -1);
    }
  }

  guardarStorage(
    id: string,
    token: string,
    usuario: string,
    recordar: boolean
  ) {
    localStorage.setItem(Constantes.Id, id);
    localStorage.setItem(Constantes.Token, token);
    localStorage.setItem(Constantes.Usuario, usuario);
  }

  guardarStorageSidebar(sidebar: Sidebar) {
    localStorage.setItem(Constantes.Menues, JSON.stringify(sidebar));
    localStorage.setItem(Constantes.Permisos, JSON.stringify(this.permisos));
    localStorage.setItem(Constantes.Rutas, JSON.stringify(this.rutas));
  }

  getAuthorizationToken() {
    return localStorage.getItem(Constantes.Token);
  }

  getUsuarioId(): number {
    return parseInt(localStorage.getItem(Constantes.Id), 10);
  }

  getStoredUser(): string {
    return localStorage.getItem(Constantes.Usuario);
  }

  getMenues(): Sidebar {
    return JSON.parse(localStorage.getItem(Constantes.Menues));
  }

  getPermisos(): IActionForm[] {
    return JSON.parse(localStorage.getItem(Constantes.Permisos));
  }

  getRutas(): string[] {
    return JSON.parse(localStorage.getItem(Constantes.Rutas));
  }

  removeAuthorizationToken() {
    localStorage.removeItem(Constantes.Id);
    localStorage.removeItem(Constantes.Token);
    localStorage.removeItem(Constantes.Menues);
    localStorage.removeItem(Constantes.Permisos);
    localStorage.removeItem(Constantes.Rutas);
  }
}
