import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Product } from 'src/domain/products/product';
import { ProductsJsonRepository } from 'src/domain/products/products-json-repository';

@Component({
  selector: 'app-atividade002',
  templateUrl: './atividade002.component.html',
  styleUrls: ['./atividade002.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ATIVIDADE002Component implements OnInit {

  private _products: Product[] = [];
  query: string = "";
  quantity: number = 0;
  quantities: number[] = [0, 50, 75];

  constructor(
    private produtoRepJson: ProductsJsonRepository,
    private changeDetector: ChangeDetectorRef
  ) { }

  get products(): Product[] {
    return this._products;
  }

  async ngOnInit(): Promise<void> {
    this._products = await lastValueFrom(this.produtoRepJson.listProducts());
    this.changeDetector.markForCheck();
  }

  async searchProduct() {
    this._products = await lastValueFrom(this.produtoRepJson.listProducts(this.query, this.quantity));
    this.changeDetector.markForCheck();
  }

}