import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { BehaviorSubject, combineLatest } from 'rxjs';

export interface SearchOptions {
  query: string,
  quantity: number
}

const QUERY_KEY = 'QUERY';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit, OnDestroy {
  querySubject$ = new BehaviorSubject<string>("");
  quantitySubject$ = new BehaviorSubject<number>(0);
  quantities: number[] = [0, 50, 75];

  @Output() filtersChange = new EventEmitter<SearchOptions>();

  get searchOptions(): SearchOptions {
    return JSON.parse(sessionStorage.getItem(window.location.pathname + '?' + QUERY_KEY) || '{}')
  }

  set searchOptions(searchOption: SearchOptions) {
    sessionStorage.setItem(window.location.pathname + '?' + QUERY_KEY, JSON.stringify(searchOption))
  }

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    if (this.searchOptions) {
      this.querySubject$.next(this.searchOptions.query);
      this.quantitySubject$.next(this.searchOptions.quantity);
      this.emitFilters();
    }

    combineLatest(this.querySubject$, this.quantitySubject$)
      .pipe(untilDestroyed(this))
      .subscribe(searchOptions => {
        this.searchOptions = {
          query: searchOptions[0],
          quantity: searchOptions[1]
        };
      })
  }

  emitFilters() {
    this.filtersChange.emit({ query: this.querySubject$.value, quantity: this.quantitySubject$.value })
  }

  trackByQuantity(_: any, quantity: number) {
    return quantity;
  }

  ngOnDestroy(): void { }

}
