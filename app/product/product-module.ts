import { NgModule } from "@angular/core";

import { ProductListComponent } from './product-list.component';
import { ProductFilterPipe } from './product-filter-pipe';
import { ProductDetailComponent } from './product-detail.component'
import { ProductDetailGuard } from './product-guarde-service';
import { RouterModule } from "@angular/router";
import { ProductService } from "./product-service";
import { SharedModule } from "../shared/shared-module";

@NgModule({
    declarations: [
         ProductListComponent, ProductFilterPipe ,ProductDetailComponent         
    ],   

    imports:[
        SharedModule,
        RouterModule,
        RouterModule.forChild([
            { path:'products', component: ProductListComponent },
            { path:'product/:id', canActivate: [ ProductDetailGuard ], component: ProductDetailComponent },    
        ])
    ],
    providers: [
        ProductDetailGuard,
        ProductService      
    ]
})

export class ProductModule{

}