import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../service/api-service/api-service';
import { Product } from '../../../service/api-service/productResponseDTO';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prodcut-details',
  imports: [CommonModule],
  templateUrl: './prodcut-details.html',
  styleUrl: './prodcut-details.css',
})
export class ProdcutDetails {
  product: any = signal<Product | undefined>(undefined);
  constructor(private route: ActivatedRoute, private productAPI: ApiService,private router: Router) { }
  ngOnInit() {
    let productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productAPI.getProduct().subscribe((data) => {
      data.products.find((product) => {
        if (productId == product.id) {
          this.product.set(product);
          console.log(product);
        }
      })
    })
  }
  goBack() {
   this.router.navigate(['']); // change route if needed
}
}
