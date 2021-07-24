import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './products-list/products-list.component';
import {RouterModule, Routes} from "@angular/router";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ToastModule} from "primeng/toast";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {MessageService} from "primeng/api";
import {CarouselModule} from 'primeng/carousel';


const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent
  }
];

@NgModule({
  declarations: [
    ProductsListComponent,
  ],
  providers: [ MessageService ],
  imports: [
    CommonModule,
    ButtonModule,
    CarouselModule,
    TableModule,
    DropdownModule,
    FormsModule,
    OverlayPanelModule,
    ToastModule,
    InputTextModule,
    DropdownModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductsListModule {
}
