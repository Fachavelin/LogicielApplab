import { Component, OnInit } from '@angular/core';

import { WebpageService } from '../../services/webpage.service';
import { DatosBody } from 'src/app/interfaces/datos-body.interface';
import { DatosHero } from '../../interfaces/datos-hero.interface';
import { ImagenesHero } from '../../interfaces/imagenes-hero.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  public imagePath: string = '../../../assets/images/imagen-inicio.jpg';
  public body: DatosBody[] = [];
  public hero!: DatosHero;
  public imagenes: ImagenesHero[] = [];

  constructor(private ws: WebpageService) {}

  ngOnInit(): void {
    this.ws.cargarImagenesHero().subscribe((imagenes) => {
      imagenes.forEach((imagen) => {
        this.imagenes.push(imagen);
      });
    });

    this.ws.cargarDatosHero().subscribe((hero) => {
      this.hero = hero;
    });

    this.ws.cargarDatosBody().subscribe((datoBody) => {
      datoBody.forEach((body) => {
        this.body.push(body);
      });
    });
  }
}
