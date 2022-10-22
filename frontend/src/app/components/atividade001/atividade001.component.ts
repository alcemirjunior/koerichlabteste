import { ProductsJsonRepository } from '../../../domain/products/products-json-repository';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from 'src/domain/products/product';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-atividade001',
  templateUrl: './atividade001.component.html',
  styleUrls: ['./atividade001.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ATIVIDADE001Component implements OnInit {

  private _products: Product[] = [];
  displayedColumns: string[] = ['produto', 'quantidade', 'defeito', 'disponiveis']

  constructor(
    private produtoRepJson: ProductsJsonRepository,
    private changeDetector: ChangeDetectorRef
  ) { }

  get products(): Product[] {
    return this._products;
  }

  async ngOnInit() {
    this._products = await lastValueFrom (this.produtoRepJson.listProducts());
    this.changeDetector.markForCheck();
  }

}
