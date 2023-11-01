import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//CRIAÇÃO DAS ROTAS DE CADA PAGINA, ESSAS SÃO AS PAGINAS QUE DESEJO IR
import { InicioComponent } from './view/inicio/inicio.component';
import { CurriculoComponent } from './view/curriculo/curriculo.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'curriculo', component: CurriculoComponent},
  {path: 'vagas', component: VagasComponent},
  {path: 'painel', component: PainelVagasComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
