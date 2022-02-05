import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';



@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
