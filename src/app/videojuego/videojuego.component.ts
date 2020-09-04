import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
	selector: 'videojuego',
	templateUrl: './videojuego.component.html',
	providers: [PeticionesService]
})
export class VideojuegoComponent implements OnInit {

public titulo: string;
	public listado: string;

	public juegoMasRentado: any;
	public ventasDia: any;
	public director: any;
	public finddirector: any;

	public directorNombre: any;

	constructor(private _peticionesService: PeticionesService){
		this.titulo = "Reportes";
		this.listado = "Consultar las diferentes opciones de reportes";
	}

	ngOnInit(){
		// console.log("OnInit ejecutado");
	}

	getJuegoMasRentado(){
		this.ventasDia = false;
		this.finddirector =false;
		this._peticionesService.getJuegoMasRentado().subscribe(
  		result => {
  			this.juegoMasRentado = result;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
	}

	getVentasDia(){
		this.juegoMasRentado = false;
		this.finddirector =false;
		this._peticionesService.getVentasDia().subscribe(
  		result => {
  			this.ventasDia = result;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
	}

	getDirector(){
		this.juegoMasRentado = false;
		this.ventasDia = false;

		this.directorNombre = {
                "nombre_director": this.directorNombre
            };

		this._peticionesService.getDirector(this.directorNombre).subscribe(
  		result => {
  			this.director = result;
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
	}

	findDirector() {
		this.juegoMasRentado = false;
		this.ventasDia = false;

		this.finddirector = true;
	}

}