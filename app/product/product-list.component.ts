import {Component, OnInit } from '@angular/core'
import { IProduct } from './IProduct'
import { ProductService } from "./product-service";

@Component(
    {
        selector:"pm-products",
        templateUrl: "app/product/product-list.component.html",
        styleUrls: ["app/product/product-list.component.css"]
    }
)

export class ProductListComponent implements OnInit {

    PageTitle: string = "Product List!"
    imageWidth = 50;
    imageMargin = 2;  
    showImage: boolean = false;  
    filterProduct : string = "";
    products : IProduct[];
    erroMessage : string;

    constructor( private _productservice : ProductService ){

    }

    ngOnInit(): void {
        this._productservice.getProducts().subscribe(
                        products => this.products = products, 
                        error => this.erroMessage = <any> error);
    }


    toogleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message : string) : void {
        this.PageTitle = "Product List: " + message;
    }

}