import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface Respuesta {
  ok: boolean;
  msg: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  private _baseUrl: String = '';

  constructor(private http: HttpClient) {}

  enviarEmail(email: string, telefono: string, asunto: string) {
    const url = `${this._baseUrl}/api/contacto/`;
    const body = { email, telefono, asunto };

    return this.http.post<Respuesta>(url, body);

    /* .pipe(
      map((resp) => console.log(resp)),
      catchError((err) => of(err.error.msg))
    ); */
  }
}
