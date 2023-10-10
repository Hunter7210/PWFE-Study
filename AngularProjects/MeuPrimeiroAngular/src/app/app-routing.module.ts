import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { ContainerMeioComponent } from './container-meio/container-meio.component';
import { FormularioComponent } from './formulario/formulario.component';


const routes: Routes = [
{ path: 'header', component: HeaderComponent },
{ path: 'footer', component: FooterComponent },
{ path: '', component: HomeComponent },
{ path: 'sobre', component: SobreComponent },
{ path: 'contato', component: ContatoComponent },
{ path: 'container', component: ContainerMeioComponent },
{ path: 'formulario', component: FormularioComponent },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}