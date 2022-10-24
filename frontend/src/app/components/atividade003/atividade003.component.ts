import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Product } from 'src/domain/products/product';
import { ProductsJsonRepository } from 'src/domain/products/products-json-repository';
import { SearchOptions } from '../common/search-bar/search-bar.component';

@Component({
  selector: 'app-atividade003',
  templateUrl: './atividade003.component.html',
  styleUrls: ['./atividade003.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ATIVIDADE003Component implements OnInit {

  private _products: Product[] = [];
  hasProduct: boolean = false;

  constructor(
    private produtoRepJson: ProductsJsonRepository,
    private changeDetector: ChangeDetectorRef
  ) { }

  get products(): Product[] {
    return this._products;
  }

  async ngOnInit(): Promise<void> {
    this._products = await lastValueFrom(this.produtoRepJson.listProducts());
    this.hasProduct = this._products.length > 0; 
    this.changeDetector.markForCheck();
  }

  async searchProduct(searchOptions: SearchOptions): Promise<void> {
    this._products = await lastValueFrom(this.produtoRepJson.listProducts(searchOptions.query, searchOptions.quantity));
    this.hasProduct = this._products.length > 0; 
    this.changeDetector.markForCheck();
  }

  trackByName(_: any, product: Product) {
    return product.produto;
  }

}
