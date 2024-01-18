import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cliente } from '../domain/cliente';
import { enviroment } from '../enviroments/enviroment';
@Injectable({
    providedIn: 'root'
  })
export class ClienteServices {
    constructor(private http: HttpClient) { }

  getClientes(){
    let url = enviroment.WS_PATH + "/clientes/list"
    return this.http.get<any>(url)
  }

  saveCliente(cliente: Cliente){
    let url = enviroment.WS_PATH + "/clientes/"
    return this.http.post<any>(url, cliente)
  }

  getDeudaCliente(dni: any) {
    let url = enviroment.WS_PATH + "/clientes/deudas";
    // Asegúrate de pasar el DNI como parámetro correctamente
    return this.http.get<any>(`${url}?dni=${dni}`);
  }
}
