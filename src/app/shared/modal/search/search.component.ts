import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/app/shared/util/constantes';
import { MatDialogRef } from '@angular/material';
import { IOption } from 'src/app/shared/models/option.model';
import { Accesory } from 'src/app/core/models/accesory.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public material: IOption;

  constructor(private dialogRef: MatDialogRef<SearchComponent>) 
  { }

  ngOnInit() {
  }

  selectedButton(event: any) {
    this.dialogRef.close();
  }

}
