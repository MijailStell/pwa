import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, merge, of, fromEvent } from 'rxjs';
import { Router } from '@angular/router';
import { GlobalService } from './shared/services/global.service';
import { mapTo } from 'rxjs/operators';
import { Constantes } from './shared/util/constantes';
declare var $: any;
import videojs from 'video.js';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { SearchComponent } from './shared/modal/search/search.component';

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

  constructor(
              public globalService: GlobalService,
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
      this.networkStatus = value? Constantes.Vacio: `(${Constantes.Offline})`;
      localStorage.setItem(Constantes.NetworkStatus, JSON.stringify(value));
    })
  }

  ngOnInit() {

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