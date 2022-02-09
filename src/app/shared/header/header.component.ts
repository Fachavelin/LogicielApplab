import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public abierto: boolean = false;
  public indice: number = 0;
  public icono: string[] = ['fa-solid fa-align-justify', 'fa-solid fa-x'];
  public logo1: string = '../../../assets/images/degradado tonos frios.png';

  public rutas: string[] = ['', '/contacto', '/nosotros'];

  constructor() {}

  ngOnInit(): void {}

  abrir() {
    this.abierto = !this.abierto;
    if (this.abierto) {
      this.indice = 1;
    } else {
      this.indice = 0;
    }
  }
}
