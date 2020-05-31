import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotPermittedComponent } from './components/page-not-permitted/page-not-permitted.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SearchComponent } from './modal/search/search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PageNotFoundComponent,
    PageNotPermittedComponent,
    LoadingComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    HeaderComponent,
    PageNotFoundComponent,
    PageNotPermittedComponent,
    LoadingComponent
  ],
  entryComponents: [ SearchComponent]
})
export class SharedModule { }