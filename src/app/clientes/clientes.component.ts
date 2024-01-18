import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../domain/cliente';
import { ClienteServices } from '../services/cliente-services';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {
  clientes: any
  dni : any

  client: Cliente = new Cliente()

  deuda :any

  constructor(private clientesService: ClienteServices){

  }

  ngOnInit(): void {
      this.clientes = this.clientesService.getClientes()
      
  }

  guardar(){
    this.clientesService.saveCliente(this.client).subscribe(data => {
      console.log(data)
      if(data.codigo == 1)
        this.ngOnInit()
      else
        alert("Error al insertar " + data.mensaje)
    })
  }

  getDeuda(dni: any) {
    this.clientesService.getDeudaCliente(dni).subscribe(data => {
      this.deuda = data;
      alert("Deuda del cliente: " + this.deuda);
    });
  }

}
