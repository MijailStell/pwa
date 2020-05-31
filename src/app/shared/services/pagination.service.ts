import { Injectable } from '@angular/core';
import { PaginationRequest } from '../models/pagination-request.model';
import { PageEvent } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class PaginationService {

  private paginationRequest: PaginationRequest;

  get pageNumber(): number {
      return this.paginationRequest.pageIndex;
  }

  get selectItemsPerPage(): number[] {
      return this.paginationRequest.selectItemsPerPage;
  }

  get pageSize(): number {
      return this.paginationRequest.pageSize;
  }

  get pageFirst(): number {
    return (this.paginationRequest.pageIndex === 1) ?
    0 : ((this.paginationRequest.pageIndex - 1) * this.paginationRequest.pageSize);
  }

  constructor() {
      this.paginationRequest = new PaginationRequest();
  }

  change(pageEvent: PageEvent) {
      this.paginationRequest.pageIndex = pageEvent.pageIndex + 1;
      this.paginationRequest.pageSize = pageEvent.pageSize;
      this.paginationRequest.allItemsLength = pageEvent.length;
  }

  reset() {
    this.paginationRequest.pageIndex = 1;
  }
}
