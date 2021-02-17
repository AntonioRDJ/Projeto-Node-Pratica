import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar os componentes gerados
import { ProdAddComponent } from './prod-add/prod-add.component';


const routes: Routes = [
  {
    path: 'product/create',
    component: ProdAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
