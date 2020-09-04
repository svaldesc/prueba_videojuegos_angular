import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [PeticionesService]
})
export class ClientesComponent implements OnInit {

  public clientes: any;
  public clienteFrecuente: any;
  public userId: any;
  public fecha: any;

  public nuevo_cliente: any;
  public usuario_guardado;

  constructor(
  	private _peticionesService: PeticionesService
  ){
  	this.userId = 1;
    this.nuevo_cliente = {
        "nombre": "",
        "apellido": "",
        "tipo_documento": "",
        "numero_documento": ""
    };
  }

  ngOnInit() {
  	this.cargaClientes();
  }

  cargaClientes(){
  	this.clientes = false;
  	this._peticionesService.getClientesTodos().subscribe(
  		result => {
  			this.clientes = result;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
  }

  onSubmit(form){

    this._peticionesService.addCliente(this.nuevo_cliente).subscribe(
      response => {
        this.usuario_guardado = response;
        form.reset();
        this.cargaClientes();
      },
      error => {
        console.log(<any>error);
      }
    );

  }

  cliente_frecuente() {
  	this._peticionesService.getClienteFrecuente().subscribe(
  		result => {
  			this.clienteFrecuente = result;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
  }

}
