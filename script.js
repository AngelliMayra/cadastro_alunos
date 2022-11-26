class Aluno {

    nome;
    matricula;
    nota1;
    nota2;
    nota3;

    constructor(nome, matricula, n1, n2, n3) {
        this.nome = nome;
        this.matricula = matricula;
        this.nota1 = n1;
        this.nota2 = n2;
        this.nota3 = n3;
    }

    exibeInfo() {
        return `Aluno: ${this.nome} - mat: ${this.matricula}
      Notas: N1: ${this.nota1} - N2: ${this.nota2} - N3: ${this.nota3}
      Média:${this.calculaMedia()}`;
    }

    calculaMedia() {
        return ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);
    }
}

const inputNome = document.getElementById('inputNome');
const inputMatricula = document.getElementById('inputMatricula');
const inputNota1 = document.getElementById('inputNota1');
const inputNota2 = document.getElementById('inputNota2');
const inputNota3 = document.getElementById('inputNota3');
const btnEnviar = document.getElementById('btnEnviar');
const tbodyListaAlunos = document.getElementById('tbodyListaAlunos');
let tr = ``;
let btnExcluir = ``;
let contador = -1;
let arrayAlunos = [];

const excluir = (id) => {
    let elemento = document.getElementById(`tr_aluno${id}`);
    elemento.remove();
}

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();

    let nome = inputNome.value;
    let matricula = inputMatricula.value;
    let nota1 = parseFloat(inputNota1.value);
    let nota2 = parseFloat(inputNota2.value);
    let nota3 = parseFloat(inputNota3.value);
    contador+= 1

    const aluno = new Aluno(nome, matricula, nota1, nota2, nota3);

    tr += `<tr id="tr_aluno${contador}">
                    <td>${nome}</td>
                    <td>${matricula}</td>
                    <td>${nota1}</td>
                    <td>${nota2}</td>
                    <td>${nota3}</td>
                    <td>${aluno.calculaMedia(nota1, nota2, nota3)}</td>
                    <td><input id="btnExcluir_${contador}" onClick="excluir(${contador})" type="button" value="Excluir"></input></td>
                </tr>`;

    tbodyListaAlunos.innerHTML = tr;
});


