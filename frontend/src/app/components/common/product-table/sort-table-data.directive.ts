import { Directive } from '@angular/core';
import { MatSort, Sort, SortDirection } from '@angular/material/sort';

const KEY = 'MAT_SORT';

@Directive({
  selector: '[sortTableData]'
})
export class SortTableDataDirective {

  get matSort(): MatSortData {
    return JSON.parse(sessionStorage.getItem(window.location.pathname + '?' + KEY) || '{}');
  }

  set matSort(mat: MatSortData) {
    sessionStorage.setItem(window.location.pathname + '?' + KEY, JSON.stringify(mat));
  }

  constructor(
    private el: MatSort,
  ) { }

  ngOnInit(): void {
    if (this.matSort) {
      this.el.active = this.matSort.active;
      this.el.direction = this.matSort.direction;
    }
    this.el.sortChange
      .subscribe((sort: Sort) => {
        this.matSort = {
          active: sort.active,
          direction: sort.direction
        }
      });
  }
}

interface MatSortData {
  active: string;
  direction: SortDirection;
}