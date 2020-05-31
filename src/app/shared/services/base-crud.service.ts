import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Constantes } from '../util/constantes';
import { EnviromentService } from './enviroment.service';
import { IJsonResult } from '../models/json-result.model';
import { TableResponse } from '../models/table-response.model';
import { IOption } from '../models/option.model';

export class BaseCrudService<T> {

  protected httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  };

  constructor(public enviromentService: EnviromentService,
              protected http: HttpClient,
              public controller: string) { }

  getAll(paginator: any): Observable<IJsonResult<TableResponse>> {
    const url = `${this.enviromentService.urlBaseServiciosApi}${
      this.controller
    }/filter`;
    return this.http.post<IJsonResult<TableResponse>>(url, paginator);
  }

  get(id: number): Observable<IJsonResult<T>> {
    const url = `${this.enviromentService.urlBaseServiciosApi}${
      this.controller
    }/${id}`;
    return this.http.get<IJsonResult<T>>(url);
  }

  add(entity: T): Observable<IJsonResult<any>> {
    const url = `${this.enviromentService.urlBaseServiciosApi}${this.controller}`;
    return this.http.post<IJsonResult<any>>(url, entity);
  }

  update(id: number, entity: T): Observable<IJsonResult<any>> {
    const url = `${this.enviromentService.urlBaseServiciosApi}${
      this.controller
    }/${id}`;
    return this.http.put<IJsonResult<any>>(url, entity);
  }

  delete(id: number): Observable<IJsonResult<any>> {
    const url = `${this.enviromentService.urlBaseServiciosApi}${
      this.controller
    }/${id}`;
    return this.http.delete<IJsonResult<any>>(url);
  }

  updateState(id: number, status: boolean): Observable<IJsonResult<any>> {
    const url = `${this.enviromentService.urlBaseServiciosApi}${
      this.controller
    }/updateStatus/${id}`;
    return this.http.put<IJsonResult<any>>(url, { id, Estado: status });
  }

  search(search: string): Observable<IJsonResult<IOption[]>> {
    const url = `${this.enviromentService.urlBaseServiciosApi}${
      this.controller
    }/search/${search}`;
    return this.http.get<IJsonResult<any>>(url);
  }

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
