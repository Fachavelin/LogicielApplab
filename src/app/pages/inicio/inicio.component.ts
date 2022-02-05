import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  public imagePath: string = '../../../assets/images/imagen-inicio.jpg';

  constructor() {}

  ngOnInit(): void {}
}
