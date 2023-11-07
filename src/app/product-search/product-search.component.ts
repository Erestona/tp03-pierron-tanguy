import { Component } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {

  criteria: SearchCriteria = { price: 0, category: '' };

  search()
  {
    this.filteredProducts = this.products.filter(product => {
      const passesCategoryFilter = !this.criteria.category || product.category.includes(this.criteria.category);

      const passesPriceFilter = !this.criteria.price || product.price <= this.criteria.price;

      return passesCategoryFilter && passesPriceFilter;
    }
  } 
}


export interface SearchCriteria {
  category: string;
  price: number;
}