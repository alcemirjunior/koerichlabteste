import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/domain/products/product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductTableComponent {

  displayedColumns: string[] = ['produto', 'quantidade', 'defeito', 'disponiveis']
  private _dataSource = new MatTableDataSource<Product>();
  isEmptyData: boolean = true;

  @ViewChild(MatSort) sort: MatSort = new MatSort;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) { }

  @Input()
  set data(data: Product[]) {
    if (data != this.dataSource.data) {
      this._dataSource = new MatTableDataSource(data);
      this._dataSource.sort = this.sort;
      this.isEmptyData = data.length > 0;
      this.changeDetector.markForCheck();
    }
  }

  get dataSource(): MatTableDataSource<Product> {
    return this._dataSource;
  }
}
