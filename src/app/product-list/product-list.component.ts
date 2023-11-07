import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: any[0] 

  constructor(private productService : ProductServiceService)
  {
    
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }

  
}
