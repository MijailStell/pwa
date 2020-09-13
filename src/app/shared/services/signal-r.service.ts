import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';

import { EventBusService } from './event-bus.service';
import { ActionEvent } from '../enum/action-event';
import { EnviromentService } from './enviroment.service';
import { EmitEvent } from '../models/emit-event';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  private hubConnection: signalR.HubConnection;

  constructor(private eventBus: EventBusService,
              private environmentService: EnviromentService) { }

  public startConnection = (hubName: string) => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl(this.environmentService.apiUrl + hubName)
                            .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));
  }

  public broadcastChartData = () => {
    this.hubConnection.invoke('broadcastchartdata', {})
    .catch(err => console.error(err));
  }

  public addConnectedListener() {
    this.hubConnection.on('connected', (connectionId) => {
        this.eventBus.emit(new EmitEvent(ActionEvent.Connected, connectionId));
        localStorage.setItem('connectionId', connectionId);
    });
  }

  public addDisconnectedListener() {
    this.hubConnection.on('disconnected', (response) => {
    });
  }

  public addLoggedListener() {
    this.hubConnection.on('logged', (response) => {
    });
  }

  public addAfterConnectedListener() {

    const guid = this.getGuid();
    const usuario = 'mijailstell';
    const sexo = 1;
    const connectionId = localStorage.getItem('connectionId');
    const roomId = 1;
    this.hubConnection.invoke('afterconnected', guid, usuario, sexo, connectionId, roomId)
    .catch(err => console.error(err));
  }

  getGuid(): string {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
    this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
}
