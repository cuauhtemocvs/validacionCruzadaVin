import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { CapOcrComponent } from '../explore-container/cap-ocr/cap-ocr.component';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {path:'ocr/:numero', component: CapOcrComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
