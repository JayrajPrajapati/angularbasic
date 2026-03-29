import { Component, signal } from '@angular/core';
import { ApiService } from '../../../service/api-service/api-service';
import { Product } from '../../../service/api-service/productResponseDTO';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-prodcut-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './prodcut-list.html',
  styleUrl: './prodcut-list.css',
})
export class ProdcutList {
  constructor(private apiService: ApiService) {
  }
  //Product API Calling
  productList: any = signal<Product[] | undefined>(undefined);
  ngOnInit() {
    this.apiService.getProduct().subscribe((data) => {
      this.productList.set(data.products);
    })
  }
}
