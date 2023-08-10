import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ConsultaComponent } from './components/consulta/consulta.component'; // Importe o componente aqui
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ClienteFormComponent,
    ConsultaComponent,
  
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
