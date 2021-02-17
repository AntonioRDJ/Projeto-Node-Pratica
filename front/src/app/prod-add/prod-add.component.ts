import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-prod-add',
  templateUrl: './prod-add.component.html',
  styleUrls: ['./prod-add.component.css']
})
export class ProdAddComponent implements OnInit {



  constructor(private productService: ProductService) {
  }

  adicionarProduto(nomeProduto: any, quantidade: any, preco: any){
    this.productService.adicionarProduto(nomeProduto, quantidade, preco);
  }

  ngOnInit(): void {
  }

}
