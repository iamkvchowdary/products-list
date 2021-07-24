import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Group, Image, ProductListResponse} from "../interfaces/product.modal";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Group[] = [];
  selectedProductImages: Image[] = [];
  responsiveOptions: any;
  constructor(private productService: ProductService, private messageService : MessageService ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  loadImages(images:  Image[]){
    this.selectedProductImages = images;
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe((value: ProductListResponse) => {
        this.products = value.groups;
        console.log(value.groups);
      },
      error => {
        alert('getting error form backend: ' + error.message + 'so fetching data from local json');
        this.productService.getLocalProducts().subscribe(value1 => {
          this.products = value1.groups;
        })
      }
    )
  }

}
