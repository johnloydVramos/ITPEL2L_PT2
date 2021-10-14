import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeDetailPage } from './recipe-detail.page';
import {IonicModule} from '@ionic/angular';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: RecipeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeDetailPageRoutingModule {}
