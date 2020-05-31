import { Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';
import { GlobalService } from 'src/app/shared/services/global.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public injector: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const globalService = this.injector.get(GlobalService);

    // Get the auth token from the service.
    const authToken = globalService.getAuthorizationToken();

    if (authToken) {
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      const authReq = request.clone({
          setHeaders: {
              Authorization: `Bearer ${authToken}`
          }
      });
      // send cloned request with header to the next handler.
      return next.handle(authReq);
    }

    // send request with header to the next handler.
    return next.handle(request);
  }
}
