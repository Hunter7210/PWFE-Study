import { Component } from '@angular/core';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {
  usuario: Usuario = {
    nome: '',
    email: '',
    senha:  ''
  
  }
}
