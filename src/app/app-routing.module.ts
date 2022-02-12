import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

const routes: Routes = [
  { path: '', component: InicioComponent, data: { animation: 'inicio' } },
  {
    path: 'nosotros',
    component: NosotrosComponent,
    data: { animation: 'nosotros' },
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    data: { animation: 'contacto' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
