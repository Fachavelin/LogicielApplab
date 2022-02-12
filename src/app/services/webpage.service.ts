import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ImagenesHero } from '../interfaces/imagenes-hero.interface';
import { DatosHero } from '../interfaces/datos-hero.interface';
import { DatosBody } from '../interfaces/datos-body.interface';
import { DatosFooter } from '../interfaces/datos-footer.interface';

@Injectable({
  providedIn: 'root',
})
export class WebpageService {
  private _baseUrl: String = 'https://logiciel-applab-demo.herokuapp.com';

  constructor(private http: HttpClient) {}

  cargarImagenesHero() {
    const url = `${this._baseUrl}/api/webpage/imagenes-hero`;

    return this.http.get<ImagenesHero[]>(url);
  }

  cargarDatosHero() {
    const url = `${this._baseUrl}/api/webpage/datos-hero`;

    return this.http.get<DatosHero>(url);
  }

  cargarDatosBody() {
    const url = `${this._baseUrl}/api/webpage/datos-body`;

    return this.http.get<DatosBody[]>(url);
  }

  cargarDatosFooter() {
    const url = `${this._baseUrl}/api/webpage/datos-footer`;

    return this.http.get<DatosFooter[]>(url);
  }
}
