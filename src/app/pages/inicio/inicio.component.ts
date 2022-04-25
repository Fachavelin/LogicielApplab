import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { WebpageService } from '../../services/webpage.service';
import { DatosBody } from 'src/app/interfaces/datos-body.interface';
import { DatosHero } from '../../interfaces/datos-hero.interface';
import { ImagenesHero } from '../../interfaces/imagenes-hero.interface';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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

  pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

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
