import { Injectable } from '@angular/core'
import { Http,Response } from '@angular/http'

import { IProduct } from './IProduct'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';



@Injectable()
export class ProductService {

    private urlProducts : string =  "http://localhost:54779/api/SampleData/Condominios"
    
    constructor(private _http : Http){

    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this.urlProducts)
                         .map((response : Response) => <IProduct[]> response.json())
                         .do(data => console.log('All : ' + JSON.stringify(data)))
                         .catch(this.handleErro);
    }
    
    getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }
    private handleErro(error: Response){
        console.log(error)

        return Observable.throw(error.json().error || 'Server Error');
    }


}