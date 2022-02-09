import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public logo1: String = '../../../assets/images/degradado tonos frios.png';

  public icons: String[] = [
    '../../../assets/icons/facebook.png',
    '../../../assets/icons/instagram.png',
    '../../../assets/icons/whatsapp.png',
  ];

  constructor() {}

  ngOnInit(): void {}
}
