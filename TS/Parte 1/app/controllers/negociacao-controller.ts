import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { NegociacoesDoDia } from "../interfaces/negociacoes-do-dia.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView'); 
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        else {
            this.negociacoes.adiciona(negociacao);
            this.limparFormulario();
            this.atualizaView();
        }
    }

    public async importarDados(): Promise<void> {
        let dadosApi = await fetch('http://localhost:8080/dados');
        let dadosApiConvertido: NegociacoesDoDia[] = await dadosApi.json(); //montante é uma interface, apenas os parâmetros definidos na interface poderam ser usados. A vantagem de usar com uma API é que outro desenvolvedor não vai conseguir chamar um dado que não existe. Documenta no front o que está esperando do back.Antes de NegociacoesDia[] era Array<any>

        let dadosNegociacao = dadosApiConvertido.map(dado => {
            return new Negociacao(new Date(), dado.vezes, dado.montante);
        });

        dadosNegociacao.forEach(negociacao => {
            this.negociacoes.adiciona(negociacao);
        });
        this.negociacoesView.update(this.negociacoes);

        
        console.log(dadosNegociacao);
           
    }

    private ehDiaUtil(data: Date): boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
        //a função getDay retorna o dia da semana (0- domingo, 6- sábado), portanto se o retorno estiver entre 1 e 5 significa que estou pegando dias da semana
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputData.focus();
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
}