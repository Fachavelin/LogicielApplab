import { Component, OnInit } from '@angular/core';
import { DatosFooter } from 'src/app/interfaces/datos-footer.interface';
import { WebpageService } from '../../services/webpage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public logo1: String = '../../../assets/images/degradado tonos frios.png';

  public footer: DatosFooter[] = [];

  constructor(private ws: WebpageService) {}

  ngOnInit(): void {
    this.ws.cargarDatosFooter().subscribe((footer) => {
      footer.forEach((datosFooter) => {
        this.footer.push(datosFooter);
      });
    });
  }
}
