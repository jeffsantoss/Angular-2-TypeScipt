import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { IProduct } from './IProduct'
import { ProductService } from "./product-service";


@Component({
    templateUrl: '/app/product/product-detail.component.html'
})


export class ProductDetailComponent implements OnInit{

    errorMessage: string;
    pageTitle : string = "Product Detail";
    product: IProduct;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _service : ProductService){    

        console.log(this._route.snapshot.params['id'])        
    }

    ngOnInit(): void { 

        let id = + this._route.snapshot.params['id']

         this._service.getProduct(id)
                            .subscribe(product => this.product = product,
                                        error => this.errorMessage = <any>error);    
    }

    onBack() : void {
        this._router.navigate(['/products']);
    }
}