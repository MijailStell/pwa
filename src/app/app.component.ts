import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, merge, of, fromEvent, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { GlobalService } from './shared/services/global.service';
import { mapTo } from 'rxjs/operators';
import { Constantes } from './shared/util/constantes';
declare var $: any;
import videojs from 'video.js';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { SearchComponent } from './shared/modal/search/search.component';
import { SignalRService } from './shared/services/signal-r.service';
import { EventBusService } from './shared/services/event-bus.service';
import { ActionEvent } from './shared/enum/action-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  online$: Observable<boolean>;
  networkStatus: string;
  username: string = this.globalService.getStoredUser();
  totalSize: number;
  eventbusConnectedSub: Subscription;
  connectionId = '';
  videoUrl = 'https://www.youtube.com/watch?v=sem5xr_wezM';

  constructor(
              public globalService: GlobalService,
              public signalRService: SignalRService,
              private eventBus: EventBusService,
              private router: Router,
              private location: Location,
              public dialog: MatDialog) {
    this.online$ = merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false))
    );
    this.setNetworkStatus();
  }

  public setNetworkStatus() {
    this.online$.subscribe(value => {
      this.networkStatus = value ? Constantes.Vacio : `(${Constantes.Offline})`;
      localStorage.setItem(Constantes.NetworkStatus, JSON.stringify(value));
    });
  }

  ngOnInit() {
    this.signalRService.startConnection('chatHub');
    this.signalRService.addConnectedListener();
    this.signalRService.addDisconnectedListener();
    this.signalRService.addLoggedListener();
    this.eventbusConnectedSub = this.eventBus.on(ActionEvent.Connected, ((connectionId: string) => {
      this.connectionId = connectionId;
    }));
  }

  back() {
    this.location.back();
  }

  goToHome() {
    this.router.navigate([Constantes.RutaBaseUser]);
  }

  cerrarSesion() {
  }

  goToAdmin() {
    this.router.navigate([Constantes.RutaBaseAdmin]);
  }

  openDialogSearch() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'custom-dialog';
    const dialogRef = this.dialog.open(SearchComponent, dialogConfig);
  }
}
