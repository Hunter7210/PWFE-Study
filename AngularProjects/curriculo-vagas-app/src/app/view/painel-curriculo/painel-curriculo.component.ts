import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/service/curriculo.service';

@Component({
  selector: 'app-painel-curriculo',
  templateUrl: './painel-curriculo.component.html',
  styleUrls: ['./painel-curriculo.component.css'],
})
export class PainelCurriculoComponent implements OnInit {
  public curriculo: Curriculo = new Curriculo(0, '', '', '', '', '', '', 0);
  // Uma instância de 'Curriculo' para rastrear os dados do formulário
  public curriculos: Curriculo[] = [];
  //Uma matriz para armazenar as vagas listadas

  constructor(private _CurriculosService: CurriculoService) {}
  //Aplica o serviço _CurriculosService no construtor

  ngOnInit(): void {
    this.listarCurriculos();
    // Quando o componente é inicializado, lista as vagas disponíveis
  }
  listarCurriculos() {
    //Lista as vagas do servidor usando o serviço 'CurriculoService
    this._CurriculosService.getCurriculos().subscribe((retornaCurriculo) => {
      this.curriculos = retornaCurriculo.map((item) => {
        //Mapeia os dados retornados para objetos 'Curriculo'
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

  // Função para listar um curriculo individual no formulário para edição
  listarCurriculo(curriculo: Curriculo) {
    this.curriculo = curriculo;
  }

  //Função de cadastrar um novo curriculo
  cadastrar() {
    this._CurriculosService.cadastrarCurriculo(this.curriculo).subscribe(
      () => {
        //Cadastro realizado com sucesso
        this.curriculo = new Curriculo(0, '', '', '', '', '', '', 0); //Limpar o formulario
        this.listarCurriculos(); //Atualizar a lista
      },
      (err) => {
        //Se erro: exibe um mensagem no console
        console.log('Erro cadastro', err);
      }
    );
  }

  atualizar(id: number) {
    // Função para atualizar uma vaga existente
    this._CurriculosService.atualizarCurriculo(id, this.curriculo).subscribe(
      () => {
        // Após atualizar com sucesso
        this.curriculo = new Curriculo(0, '', '', '', '', '', '', 0); // Limpa o formulário
        this.listarCurriculos(); // Atualiza a lista de vagas
      },
      (err) => {
        console.log('Erro ao atualizar', err);
      }
    );
  }

  excluir(id: number) {
    // Função para excluir uma vaga
    this._CurriculosService.removerCurriculo(id).subscribe(
      () => {
        // Após excluir com sucesso
        this.curriculo = new Curriculo(0, '', '', '', '', '', '', 0); // Limpa o formulário
        this.listarCurriculos(); // Atualiza a lista de vagas
      },
      (err) => {
        console.log('Erro ao excluir', err);
      }
    );
  }
}
