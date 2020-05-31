import { Injectable } from '@angular/core';
import { Sort } from '@angular/material';
import { SortRequest } from '../models/sort-request.model';

@Injectable({
    providedIn: 'root'
})
export class SortService {

    private sortRequest: SortRequest;

    get field(): string {
        return this.sortRequest.field;
    }

    get order(): number {
        return this.sortRequest.order;
    }

    constructor() {
        this.sortRequest = new SortRequest();
    }

    change(sort: Sort) {
      this.sortRequest.field = sort.active;
      this.sortRequest.order = (sort.direction === 'asc') ? -1 : 0;
    }
}
