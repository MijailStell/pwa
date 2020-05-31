import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Constantes } from 'src/app/shared/util/constantes';
import { GlobalService } from 'src/app/shared/services/global.service';

@Injectable({
  providedIn: 'root'
})
export class VerificaTokenGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router,
    public globalService: GlobalService,
    private location: Location
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> | boolean {
    const token = this.globalService.getAuthorizationToken();
    if (!token) {
      this.router.navigate([Constantes.RutaAuth]);
      return false;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    const expirado = this.expirado(payload.exp);

    if (expirado) {
      this.router.navigate([Constantes.RutaAuth]);
      return false;
    }

    if (!(state.url === Constantes.RutaAuth || state.url === Constantes.RutaBaseAdmin || state.url === Constantes.RutaBaseUser)) {
      if (!this.globalService.validarRuta(state.url)) {
        this.location.back();
        return false;
      }
    }

    return this.verificaRenueva(payload.exp);
  }

  verificaRenueva(fechaExp: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }

  expirado(fechaExp: number) {
    const ahora = new Date().getTime() / 1000;

    if (fechaExp < ahora) {
      return true;
    } else {
      return false;
    }
  }
}
