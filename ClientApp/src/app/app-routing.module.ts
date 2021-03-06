import { RegisterSupplierComponent } from './register-supplier/register-supplier.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UserAccountComponent } from './user-account/user-account.component';


const routes: Routes = [
  {path: 'supplier/register',component : RegisterSupplierComponent},
  {path: 'supplier',component : SuppliersComponent},
  {path: 'createaccount',component : UserAccountComponent},

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
