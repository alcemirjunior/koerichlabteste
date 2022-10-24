import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface SearchOptions {
  query: string,
  quantity: number
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  query: string = "";
  quantity: number = 0;
  quantities: number[] = [0, 50, 75];

  @Output() filtersChange = new EventEmitter<SearchOptions>();

  constructor() { }

  ngOnInit(): void {
  }

  emitFilters() {
    this.filtersChange.emit({ query: this.query, quantity: this.quantity })
  }

  trackByQuantity(_: any, quantity: number) {
    return quantity;
  }

}
