import { Component, OnInit } from '@angular/core';
import { CurriculoService } from 'src/app/service/curriculo.service';
import { Curriculo } from 'src/app/models/curriculo.model';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.css'],
})
export class CurriculoComponent implements OnInit {
  public curriculos: Curriculo[] = [];

  constructor(private _curriculoService: CurriculoService) {}
  //Injeta o serviço de curriculo no construtor do componente

  ngOnInit(): void {
    //ngOnInit() = Toda vez que abrir o site execute:
    this.listarCurriculos();
    // Executa a função de listagem de vagas quando é inicializado
  }

  //Função
  listarCurriculos() {
    this._curriculoService.getCurriculos().subscribe((retornaCurriculo) => {
      this.curriculos = retornaCurriculo.map((item) => {
        //Mapeia os dados retornados para o modelo Curriculo
        return new Curriculo(
          item.id,
          item.nome,
          item.idade,
          item.email,
          item.telefone,
          item.qualificacoes,
          item.experiencia,
          item.pretencaoSalarial
        );
      });
    });
  }
}
