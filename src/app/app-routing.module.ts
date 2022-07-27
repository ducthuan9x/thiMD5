import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TuorListComponent} from "./component/tuor-list/tuor-list.component";
import {SaveComponent} from "./component/save/save.component";
import {EditTuorComponent} from "./component/edit-tuor/edit-tuor.component";

const routes: Routes = [
  {
    path:'',
    component:TuorListComponent
  },
  {
    path:'save',
    component:SaveComponent
  },
  {
    path:'edit-tuor/:id',
    component:EditTuorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
