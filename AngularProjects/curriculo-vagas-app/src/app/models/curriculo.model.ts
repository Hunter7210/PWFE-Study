export class Curriculo {
  //Atributos
  id: number = 0;
  idade: string = '';
  nome: string = '';
  email: string = '';
  telefone: string = '';
  qualificacoes: string = '';
  experiencia: string = '';
  pretencaoSalarial: number = 0;


  //Construct
  constructor(
    id: number,idade: string ,nome: string, email: string, telefone: string, qualificacoes: string, experiencia: string, pretencaoSalarial: number){

      this.id = id;
      this.nome = nome;
      this.idade = idade;
      this.email = email;
      this.telefone = telefone;
      this.qualificacoes = qualificacoes;
      this.experiencia = experiencia;
      this.pretencaoSalarial = pretencaoSalarial;
    }
}
