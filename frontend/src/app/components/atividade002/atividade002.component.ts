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
export class Atividade002Component implements OnInit {

  private _products: Product[] = [];

  constructor(
    private produtoRepJson: ProductsJsonRepository,
    private changeDetector: ChangeDetectorRef
  ) { }

  get products(): Product[] {
    return this._products;
  }

  async ngOnInit(): Promise<void> {
    this._products = await lastValueFrom (this.produtoRepJson.listProducts());
    this.changeDetector.markForCheck();
  }

}
