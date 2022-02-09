import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ContactoService } from '../../services/contacto.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  public enviando: boolean = false;

  contactoForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.minLength(9)]],
    asunto: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private cs: ContactoService) {}

  validarCampo(campo: string) {
    return (
      this.contactoForm.controls[campo].errors &&
      this.contactoForm.controls[campo].touched
    );
  }

  mostrarCapcha() {
    if (!this.contactoForm.valid) {
      return;
    }

    Swal.fire({
      title: 'Por favor confirmanos que eres humano antes de seguir',
      html: '<div class="mx-auto" id="recaptcha"></div>',
      didOpen: () => {
        grecaptcha.render('recaptcha', {
          sitekey: '6LfdiGgeAAAAAInv3oZS5IF71_mn0vWAb8b79C5c',
        });
      },
      preConfirm: function () {
        if (grecaptcha.getResponse().length === 0) {
          Swal.showValidationMessage(`Por favor completa el campo`);
        }
      },
    }).then(() => {
      if (grecaptcha.getResponse().length > 0) {
        this.enviarEmail();
      }
    });
  }

  enviarEmail() {
    if (!this.contactoForm.valid) {
      return;
    }
    this.enviando = true;
    const { email, telefono, asunto } = this.contactoForm.value;
    this.cs.enviarEmail(email, telefono, asunto).subscribe((resp) => {
      if (resp.ok) {
        Swal.fire({
          icon: 'success',
          text: resp.msg,
          // background: '#3b82f6',
          // color: '#ffffff',
          timer: 10000,
          confirmButtonColor: '#4338ca',
        }).then(() => {
          this.contactoForm.reset();
          this.enviando = false;
        });
      } else {
        Swal.fire({
          icon: 'error',
          text: 'A ocurrido un error intentelo más tarde',
          // background: '#3b82f6',
          // color: '#ffffff',
          timer: 10000,
          confirmButtonColor: '#4338ca',
        }).then(() => {
          this.contactoForm.reset();
          this.enviando = false;
        });
      }
    });
  }

  ngOnInit(): void {}
}
