import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Product } from 'src/domain/products/product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductTableComponent {

  displayedColumns: string[] = ['produto', 'quantidade', 'defeito', 'disponiveis']
  private _products: Product[] = [];
  hasProduct: boolean = false;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) { }

  @Input()
  set products(value: Product[]) {
    if (value != this.products) {
      this._products = value;
      this.hasProduct = this.products.length > 0;
      this.changeDetector.markForCheck();
    }
  }

  get products(): Product[] {
    return this._products;
  }

}
