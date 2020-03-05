import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import {ActivateGuard} from './activate.guard';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  {path: '',redirectTo: '/admin', pathMatch: 'full'},
  
  {path: 'admin', component: AdminComponent},
  
    {path: 'dashboard', canActivate: [ActivateGuard], component: DashboardComponent,
    children: [
      {path: 'products',canActivate: [ActivateGuard], component: ProductsComponent},
    ],
  },
    
    {path: '**', component: PageNotFoundComponent}

  ];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
   ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
