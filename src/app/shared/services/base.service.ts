import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Constantes } from '../util/constantes';

export class BaseService {

  protected httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  };

  constructor(protected httpClient: HttpClient) { }

  protected handleError(err: any) {
    let errorMessage = '';
    if (err.error instanceof Error) {
      errorMessage = `${Constantes.UnErrorHaOcurrido} : ${err.error.message}`;
    } else {
      errorMessage = err;
    }
    return throwError(errorMessage);
  }
}
