import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MessageService } from '../services/message.service';
import { Constantes } from '../util/constantes';

@Injectable()
export class MessageErrorInterceptor implements HttpInterceptor {
  constructor(public router: Router, public messageService: MessageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse && event.ok) {
            if (event.body.valid === false) {
              this.messageService.toastMessage({
                title: event.body.message,
                type: Constantes.Error
              });
            }
          }
        },
        // Operation failed; error is an HttpErrorResponse
        () => {}
      )
    );
  }
}
