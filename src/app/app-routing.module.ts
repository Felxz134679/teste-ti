import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';

//configurando as rotas da nossa aplicação

const routes: Routes = [
  {path:'',component:ConsultaComponent },
  {path: 'cadastrar', component: ClienteFormComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
