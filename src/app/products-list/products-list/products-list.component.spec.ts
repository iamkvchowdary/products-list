import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductsListComponent} from './products-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Image} from "../interfaces/product.modal";
import {ProductService} from "../product.service";
import {MockProducts} from "../mocks/data.const";
import {Observable, Observer} from "rxjs";
import {MessageService} from "primeng/api";

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let productService: ProductService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule
      ],providers: [MessageService],
      declarations: [ProductsListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    spyOn(productService, 'getProducts').and.returnValue(new Observable((observer: Observer<any>) => {
      observer.next(MockProducts);
    }))
    spyOn(productService, 'getLocalProducts').and.returnValue(new Observable((observer: Observer<any>) => {
      observer.next(MockProducts);
    }))
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should loadIages', () => {
    const images: Image[] = [];
    const img: Image = {} as Image;
    img.href = 'http:localhost';
    images.push(img);
    component.loadImages(images);
    expect(component.selectedProductImages).toBe(images);
  });
});
export const dummyData = {}
