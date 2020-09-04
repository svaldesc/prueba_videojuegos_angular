import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService{
	public url: string;
	
	constructor(
		public _http: HttpClient
	){
		this.url = "http://localhost:8080/";
	}

	getClientesTodos(): Observable<any>{
		return this._http.get(this.url+'clientes/consultarTodos');
	}

	getClienteFrecuente(): Observable<any>{
		return this._http.get(this.url+'reportes/cliente_frecuente');
	}

	getJuegoMasRentado(): Observable<any>{
		return this._http.get(this.url+'reportes/juegos_frecuentes');
	}

	getVentasDia(): Observable<any>{
		return this._http.get(this.url+'reportes/ventas_dia');
	}

	addCliente(cliente): Observable<any>{
		let params = JSON.stringify(cliente);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.post(this.url+'clientes/crear', params, {headers: headers});
	}

	getDirector(director): Observable<any>{
		let params = JSON.stringify(director);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.post(this.url+'reportes/consultar_director', params, {headers: headers});
	}

}