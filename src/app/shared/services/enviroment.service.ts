import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviromentService {
  public apiUrl = '';
  public timeOutNotifications = 1000;

  constructor() {}
}
