import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FormComponent } from './form/form.component';


const routes: Routes = [
  {path: 'form/:number',component: FormComponent},
  {path: '**',component: FormComponent}
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }