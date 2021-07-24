import {fakeAsync, TestBed} from '@angular/core/testing';

import { ProductService } from './product.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {MockProducts} from "./mocks/data.const";
import {Observable, Observer} from "rxjs";


describe('ProductService', () => {
  let service: ProductService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]

    });
    // Returns a service with the MockBackend so we can test with dummy responses
    service = TestBed.inject(ProductService);
    // Inject the http service and test controller for each test
    httpTestingController = TestBed.inject(HttpTestingController);

  });
  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  })
});
