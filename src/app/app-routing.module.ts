import { CardDetailsComponent } from './card-details/card-details.component';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'form',component:FormComponent},
  {path:'',redirectTo:'form',pathMatch:'full'},
  {path:'card',component:CardDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
