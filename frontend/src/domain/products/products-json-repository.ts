import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Product } from "./product";

export const REP_URL = 'assets/repositories/repositorio.json'

@Injectable({ providedIn: 'root' })
export class ProductsJsonRepository {

    constructor(public http: HttpClient) { }

    listProducts(query: string = "", quantity: number = 0): Observable<Product[]> {
        return this.http.get<Product[]>(REP_URL)
            .pipe(
                map(products => products
                    .map(product => Object.assign(new Product(), product))
                    .filter(it => it.quantidade >= quantity)
                    .filter(it => it.produto.toLowerCase().includes(query.toLowerCase()))
                )
            )
    }
}