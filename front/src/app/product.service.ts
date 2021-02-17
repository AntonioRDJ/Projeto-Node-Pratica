import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri= 'http://localhost:3000/api';


  constructor(private http: HttpClient) { }

  //Adicionar produto
  adicionarProduto(nomeProduto: any, quantidade: any, preco: any){
    const objProduto = {
      name_product: nomeProduto,
      qtd_product: quantidade,
      price_product: preco
    };

    console.log(objProduto);
    this.http.post(`${this.uri}/products`, objProduto)
        .subscribe(res => console.log('ok'));
  }
}
