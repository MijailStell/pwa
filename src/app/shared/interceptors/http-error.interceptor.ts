import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MessageService } from '../services/message.service';
import { Constantes } from '../util/constantes';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(public router: Router, public injector: Injector, public messageService: MessageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        () => {},
        (error: HttpErrorResponse) => {
          if (error.status === Constantes.UnAuthorizedCode) {
            this.messageService.toastMessage({
              title: Constantes.NoTieneAccesoPantalla,
              type: Constantes.Error
            });

            this.router.navigate([Constantes.RutaAuth]);
          } else {
            this.messageService.toastMessage({
              title: Constantes.OcurrioUnErrorDuranteProceso,
              type: Constantes.Error
            });
          }
        }
      )
    );
  }
}
