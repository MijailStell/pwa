import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Sidebar } from '../models/sidebar.model';
import { filter, map } from 'rxjs/operators';
import { IJsonResult } from 'src/app/shared/models/json-result.model';
import { Injectable } from '@angular/core';
import { Menu } from '../models/menu.model';
import { GlobalService } from 'src/app/shared/services/global.service';
import { IActionForm } from '../models/action-form.model';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  constructor(public userService: UserService,
              public authService: AuthService,
              public globalService: GlobalService) {}

  getPermisos(): Observable<Sidebar> {
    this.globalService.rutas = [];
    this.globalService.permisos = [];
    const usuarioId = this.globalService.getUsuarioId();
    return this.userService.getPermisos(usuarioId).pipe(
      filter(p => p.valid),
      map((data: IJsonResult<any>) => data as IJsonResult<Sidebar>),
      map(response => {
        const sidebarObject = response.data;

        sidebarObject.menus = sidebarObject.menus.map(moduleItem => {
          const subItems = moduleItem.items as Menu[];

          moduleItem.items = subItems.map(subItem => {

            this.globalService.rutas.push(subItem.url);

            const actionForms = subItem.actions as IActionForm[];
            actionForms.map(actionForm => {
              this.globalService.permisos.push(actionForm);
            });

            return subItem;
          });

          return moduleItem;
        });

        return sidebarObject;
      })
    );
  }
}
