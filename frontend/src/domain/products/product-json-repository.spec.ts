import { TestBed } from '@angular/core/testing';
import { ProductsJsonRepository } from './products-json-repository';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { environment } from 'src/environments/environment';

describe('ProductJsonRepository', () => {
    let repository: ProductsJsonRepository;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ]
        });
        repository = TestBed.inject(ProductsJsonRepository);
        httpMock = TestBed.inject(HttpTestingController);
    })

    it('should be created', () => {
        expect(repository).toBeTruthy();
    })

    it('should return a product result', () => {
        repository.listProducts().subscribe(products => {
            expect(products).toBeTruthy();
            expect(products.length).toEqual(5);
        })

        const req = httpMock.expectOne(environment.API_URL)
        expect(req.request.method).toBe('GET');
    })
})