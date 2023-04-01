<h1 align="center" id="title">Tabela com Armazenamento em Google Spreadsheet ⚙</h1>
<p id="description">O sistema de Tabelas funciona de acordo com um Armazenamento Alternativo, não utilizando um banco de dados em linguagem SQL, faz uso de planilhas, sim, Spreadsheets do Google. Ferramenta na qual qualquer usuário com uma conta Google consegue ter acesso por meio de suas ferramentas google.</p>

 <a url="#"><img src="https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/tabela.png?raw=true" height="auto" width="auto" style="border-radius:50%"></a>

<h2>📀 Idéia</h2>

> Tudo começou com a vontade de fazer algo prático,
> funcional e principalmente, adáptavel. No github temos apenas como
> hospedar sites dinamicos com JavaScript e site estáticos, porém, sem PHP.

Para fazer uso de um Banco de Dados em SQL, o mínimo necessário é rodar um código fonte em PHP. O sistema é idealizado
para ajudar nós, que não vamos pagar uma Hospedagem apenas para testar projetos, e fazeremos uso dos repositórios do GitHub.

Utilizando apenas JavaScript como linguagem para fazer a conexão entre, Site e Banco, consegui chegar no resultado esperado, um site com banco de dados externo, totalmente adaptado para o [github](https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet).

Apenas uma chave [API](https://console.cloud.google.com/) de relação separa Tabela e Banco de Dados
```bash
const API_KEY = "AIzaSyBHmDvBAPF-q-X-------------------w";
```

<h2>💻 Linguagens e desenvolvimento</h2>
Tudo o que foi utilizado para a criação desse projeto:

*   JavaScript (Conexão entre Site e Banco) / (LocalStorage -> Tema Escuro e Claro)
*   GSheets API (Google-Sheets/SpreadSheets)
*   HTML5 / CSS3

<h2>🛠️ Como utilizar essa Tabela com seu Banco Próprio</h2>

<p>1. Abra o site seu Console.Cloud da sua conta Google</p>

![alt text](https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/uso/parte1.png?raw=true)

Ao final de todas essas etapas, a sua tabela já deve estar totalmente pronta para receber novos Dados
de suas planilhas. Dessa forma você consegue desfrutar de todos os benefícios da forma que escolher.

![alt text](https://github.com/henzofelici/Tabelas-com-Armazenamento-em-Google-Speadsheet/blob/main/tabeladados.png?raw=true)
