// Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HomeComponent } from './home/home.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';

import { ClientesComponent } from './clientes/clientes.component';

// Array de rutas
const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'videojuego', component: VideojuegoComponent},
	{path: 'clientes', component: ClientesComponent},
	{path: '**', component: HomeComponent}
];

// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);