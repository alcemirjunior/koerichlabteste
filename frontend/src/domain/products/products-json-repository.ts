import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "./product";

@Injectable({ providedIn: 'root' })
export class ProductsJsonRepository {

    constructor(private http: HttpClient) { }

    listProducts(query: string = "", quantity: number = 0): Observable<Product[]> {
        return this.http.get<Product[]>(environment.API_URL)
            .pipe(
                map(products => products
                    .map(product => Object.assign(new Product(), product))
                    .filter(product => product.quantidade >= quantity)
                    .filter(product => product.produto.toLowerCase().includes(query.toLowerCase()))
                )
            )
    }
}