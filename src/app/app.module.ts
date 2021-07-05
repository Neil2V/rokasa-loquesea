import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';
import { EntregasComponent } from './pages/entregas/entregas.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { DetalleEntregaComponent } from './pages/detalle-entrega/detalle-entrega.component';
import { GestionPersonalComponent } from './pages/gestion-personal/gestion-personal.component';


const routes: Route[] = [
 
  { path: 'reportes', component: ReportesComponent},
  { path: 'entrega', component: EntregasComponent},
  { path: 'entrega/001', component: DetalleEntregaComponent},
  { path: 'personal', component: GestionPersonalComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardAdminComponent,
    InventarioComponent,
    AgregarProductoComponent,
    EntregasComponent,
    ReportesComponent,
    DetalleEntregaComponent,
    GestionPersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
