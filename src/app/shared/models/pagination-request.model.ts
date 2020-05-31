export class PaginationRequest {
  selectItemsPerPage: number[] = [5, 10, 25, 100];
  pageSize: number = this.selectItemsPerPage[0];
  pageIndex = 1;
  allItemsLength = 0;
  first = 0;
}
